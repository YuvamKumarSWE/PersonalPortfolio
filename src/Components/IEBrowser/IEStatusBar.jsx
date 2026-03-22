export default function IEStatusBar({ text, hoveredUrl }) {
  return (
    <div className="ie-statusbar">
      {/* Main status text */}
      <div className="ie-statusbar-panel ie-statusbar-text">
        {hoveredUrl || text || 'Done'}
      </div>

      {/* Zone indicator */}
      <div className="ie-statusbar-panel ie-statusbar-zone" style={{ minWidth: 140 }}>
        🌐 Internet
      </div>
    </div>
  );
}
