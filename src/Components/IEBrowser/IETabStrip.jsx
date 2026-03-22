export default function IETabStrip({ tabs, activeTab, onTabClick }) {
  return (
    <div className="ie-tabstrip">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`ie-tab${activeTab === tab.id ? ' ie-tab-active' : ''}`}
          onClick={() => onTabClick(tab.id)}
          role="tab"
          aria-selected={activeTab === tab.id}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}
