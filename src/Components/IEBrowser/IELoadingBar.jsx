export default function IELoadingBar({ progress, visible }) {
  if (!visible) return null;
  return (
    <div className="ie-loadingbar-wrap">
      <div
        className="ie-loadingbar-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
