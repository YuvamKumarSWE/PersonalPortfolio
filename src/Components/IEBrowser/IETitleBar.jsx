export default function IETitleBar({ activeTabLabel }) {
  return (
    <div className="ie-titlebar">
      {/* IE logo icon */}
      <div className="ie-titlebar-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="7" fill="#1084D0" stroke="#FFFFFF" strokeWidth="0.5"/>
          <ellipse cx="8" cy="8" rx="3" ry="7" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
          <line x1="1" y1="8" x2="15" y2="8" stroke="#FFFFFF" strokeWidth="1"/>
          <line x1="2" y1="4" x2="14" y2="4" stroke="#FFFFFF" strokeWidth="0.5"/>
          <line x1="2" y1="12" x2="14" y2="12" stroke="#FFFFFF" strokeWidth="0.5"/>
        </svg>
      </div>
      <span className="ie-titlebar-text">
        {activeTabLabel
          ? `${activeTabLabel} - Yuvam Kumar - Microsoft Internet Explorer`
          : 'Yuvam Kumar - Microsoft Internet Explorer'}
      </span>
      <div className="ie-titlebar-controls">
        <button className="ie-titlebar-btn" title="Minimize" aria-label="Minimize">─</button>
        <button className="ie-titlebar-btn" title="Maximize" aria-label="Maximize">◻</button>
        <button
          className="ie-titlebar-btn"
          title="Close"
          aria-label="Close"
          style={{ fontWeight: 'bold' }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
