export default function IEAddressBar({ url }) {
  return (
    <div className="ie-addressbar">
      <span className="ie-addressbar-label">Address</span>
      {/* Globe favicon */}
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="7" fill="#1084D0" stroke="#808080" strokeWidth="0.5"/>
          <ellipse cx="8" cy="8" rx="3" ry="7" fill="none" stroke="#FFFFFF" strokeWidth="0.8"/>
          <line x1="1" y1="8" x2="15" y2="8" stroke="#FFFFFF" strokeWidth="0.8"/>
        </svg>
      </div>
      <input
        className="ie-addressbar-input"
        type="text"
        value={url}
        readOnly
        spellCheck={false}
        aria-label="Address bar"
      />
      <button className="ie-go-btn">Go</button>
    </div>
  );
}
