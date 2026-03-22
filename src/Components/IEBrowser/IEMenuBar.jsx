import { useState, useRef, useEffect } from 'react';

const MENUS = {
  File: ['New Window', 'Open...', '─', 'Save', 'Save As...', '─', 'Page Setup...', 'Print...', '─', 'Close'],
  Edit: ['Cut', 'Copy', 'Paste', '─', 'Select All', '─', 'Find (on This Page)...'],
  View: ['Toolbars', 'Status Bar', 'Explorer Bar', '─', 'Go To', '─', 'Stop', 'Refresh', '─', 'Text Size', '─', 'Source', '─', 'Full Screen'],
  Favorites: ['Add to Favorites...', 'Organize Favorites...', '─', 'Links', 'Media'],
  Tools: ['Mail and News', '─', 'Windows Update', '─', 'Internet Options...'],
  Help: ['Contents and Index', 'Tip of the Day', '─', 'For Netscape Users', '─', 'About Internet Explorer'],
};

export default function IEMenuBar() {
  const [openMenu, setOpenMenu] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="ie-menubar" ref={ref}>
      {Object.keys(MENUS).map((menu) => (
        <div key={menu} style={{ position: 'relative' }}>
          <div
            className="ie-menu-item"
            onClick={() => setOpenMenu(openMenu === menu ? null : menu)}
            style={openMenu === menu ? { background: '#000080', color: '#FFFFFF' } : {}}
          >
            {menu}
          </div>
          {openMenu === menu && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              background: '#D4D0C8',
              borderTop:    '2px solid #FFFFFF',
              borderLeft:   '2px solid #FFFFFF',
              borderRight:  '2px solid #404040',
              borderBottom: '2px solid #404040',
              zIndex: 9999,
              minWidth: 160,
              boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}>
              {MENUS[menu].map((item, i) =>
                item === '─' ? (
                  <div key={i} style={{ height: 1, background: '#808080', margin: '2px 4px' }} />
                ) : (
                  <div
                    key={i}
                    style={{
                      padding: '3px 20px 3px 20px',
                      fontFamily: 'Tahoma, Verdana, Arial, sans-serif',
                      fontSize: 12,
                      whiteSpace: 'nowrap',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#000080';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#000000';
                    }}
                    onClick={() => setOpenMenu(null)}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
