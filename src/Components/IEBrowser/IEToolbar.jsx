import {
  FaArrowLeft, FaArrowRight, FaStop, FaSync, FaHome,
} from 'react-icons/fa';

function ToolBtn({ icon: Icon, label, onClick, disabled }) {
  return (
    <button
      className={`ie-toolbar-btn${disabled ? ' ie-toolbar-btn-disabled' : ''}`}
      onClick={disabled ? undefined : onClick}
      title={label}
    >
      <span className="ie-toolbar-icon">
        <Icon size={16} />
      </span>
      <span className="ie-toolbar-label">{label}</span>
    </button>
  );
}

export default function IEToolbar({ onNavigate, canGoBack, canGoForward, isLoading, onStop, onRefresh }) {
  return (
    <div className="ie-toolbar">
      <ToolBtn icon={FaArrowLeft}  label="Back"    onClick={() => onNavigate?.('back')}    disabled={!canGoBack} />
      <ToolBtn icon={FaArrowRight} label="Forward" onClick={() => onNavigate?.('forward')} disabled={!canGoForward} />
      <ToolBtn icon={FaStop}       label="Stop"    onClick={onStop}    disabled={!isLoading} />
      <ToolBtn icon={FaSync}       label="Refresh" onClick={onRefresh} disabled={isLoading} />
      <ToolBtn icon={FaHome}       label="Home"    onClick={() => onNavigate?.('about')} />
    </div>
  );
}
