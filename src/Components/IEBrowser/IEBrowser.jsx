import { useState, useRef, useCallback } from 'react';
import IETitleBar from './IETitleBar';
import IEToolbar from './IEToolbar';
import IEAddressBar from './IEAddressBar';
import IETabStrip from './IETabStrip';
import IELoadingBar from './IELoadingBar';
import IEContentPane from './IEContentPane';
import IEStatusBar from './IEStatusBar';

const TABS = [
  { id: 'about',      label: 'About',      url: 'http://www.yuvamkumar.com/about.htm' },
  { id: 'projects',   label: 'Projects',   url: 'http://www.yuvamkumar.com/projects/' },
  { id: 'experience', label: 'Experience', url: 'http://www.yuvamkumar.com/experience.htm' },
  { id: 'skills',     label: 'Skills',     url: 'http://www.yuvamkumar.com/skills.htm' },
  { id: 'contact',    label: 'Contact',    url: 'http://www.yuvamkumar.com/contact.htm' },
  { id: 'resume',     label: 'Resume',     url: 'https://docs.google.com/document/d/1W0OPxAc82DQ6vQ6djhJdS4bhFtV7JbN7/edit?usp=sharing&ouid=116903424471273577317&rtpof=true&sd=true' },
];

export default function IEBrowser() {
  const [activeTab, setActiveTab]           = useState('about');
  const [isLoading, setIsLoading]           = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [statusText, setStatusText]         = useState('Done');
  const [hoveredUrl, setHoveredUrl]         = useState(null);
  const [tabHistory, setTabHistory]         = useState(['about']);
  const [historyIndex, setHistoryIndex]     = useState(0);
  const [refreshNonce, setRefreshNonce]     = useState(0);

  const contentRef  = useRef(null);
  const rafRef      = useRef(null);

  const navigateTo = useCallback((tabId) => {
    if (tabId === 'resume') {
      const resumeUrl = TABS.find(t => t.id === 'resume')?.url;
      if (resumeUrl) {
        window.open(resumeUrl, '_blank', 'noopener,noreferrer');
        setStatusText('Opened Resume in new tab');
        setTimeout(() => setStatusText('Done'), 1000);
      }
      return;
    }

    if (tabId === activeTab || isLoading) return;

    // Cancel any running animation
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    setIsLoading(true);
    setLoadingProgress(0);
    setStatusText(`Opening ${TABS.find(t => t.id === tabId)?.label ?? 'page'}...`);

    const start = performance.now();
    const duration = 550;

    const tick = (now) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
      setLoadingProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setActiveTab(tabId);
        setIsLoading(false);
        setStatusText('Done');
        setLoadingProgress(0);
        // Update history
        setTabHistory(prev => {
          const next = prev.slice(0, historyIndex + 1);
          next.push(tabId);
          return next;
        });
        setHistoryIndex(prev => prev + 1);
        // Scroll content pane to top
        if (contentRef.current) contentRef.current.scrollTop = 0;
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [activeTab, isLoading, historyIndex]);

  const goBack = useCallback(() => {
    if (historyIndex <= 0) return;
    const newIndex = historyIndex - 1;
    const tabId = tabHistory[newIndex];
    if (tabId && tabId !== activeTab) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setIsLoading(true);
      setLoadingProgress(0);
      setStatusText('Going back...');
      const start = performance.now();
      const duration = 400;
      const tick = (now) => {
        const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
        setLoadingProgress(pct);
        if (pct < 100) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setActiveTab(tabId);
          setHistoryIndex(newIndex);
          setIsLoading(false);
          setStatusText('Done');
          setLoadingProgress(0);
          if (contentRef.current) contentRef.current.scrollTop = 0;
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [historyIndex, tabHistory, activeTab]);

  const goForward = useCallback(() => {
    if (historyIndex >= tabHistory.length - 1) return;
    const newIndex = historyIndex + 1;
    const tabId = tabHistory[newIndex];
    if (tabId && tabId !== activeTab) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setIsLoading(true);
      setLoadingProgress(0);
      setStatusText('Going forward...');
      const start = performance.now();
      const duration = 400;
      const tick = (now) => {
        const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
        setLoadingProgress(pct);
        if (pct < 100) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setActiveTab(tabId);
          setHistoryIndex(newIndex);
          setIsLoading(false);
          setStatusText('Done');
          setLoadingProgress(0);
          if (contentRef.current) contentRef.current.scrollTop = 0;
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [historyIndex, tabHistory, activeTab]);

  const handleToolbarNav = (action) => {
    if (action === 'back')    return goBack();
    if (action === 'forward') return goForward();
    // 'about' = home
    navigateTo(action);
  };

  const activeTabData = TABS.find(t => t.id === activeTab);
  const canGoBack    = historyIndex > 0;
  const canGoForward = historyIndex < tabHistory.length - 1;

  return (
    <div className="ie-window-frame">
      <IETitleBar activeTabLabel={activeTabData?.label} />
      <IEToolbar
        onNavigate={handleToolbarNav}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        isLoading={isLoading}
        onStop={() => {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          setIsLoading(false);
          setStatusText('Done');
        }}
        onRefresh={() => {
          window.location.reload();
        }}
      />
      <IEAddressBar url={activeTabData?.url ?? ''} />
      <IETabStrip
        tabs={TABS}
        activeTab={activeTab}
        onTabClick={navigateTo}
      />
      <IELoadingBar progress={loadingProgress} visible={isLoading} />
      <IEContentPane
        activeTab={activeTab}
        contentRef={contentRef}
        refreshNonce={refreshNonce}
      />
      <IEStatusBar
        text={statusText}
        hoveredUrl={hoveredUrl}
      />
    </div>
  );
}
