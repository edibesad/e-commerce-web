export default function PresentationButton({
  text,
  onClick,
  enabled,
}: {
  onClick?: () => void;
  text: string;
  enabled: boolean;
}) {
  return (
    <button
      className="basis-1/2 relative py-2 border-b-[1px] border-[#e5e5e5]"
      onClick={onClick}
    >
      <div>
        <div style={enabled ? { color: "#212121" } : { color: "#e8e8e8" }}>
          {text}
        </div>

        {enabled ? (
          <div className="absolute bottom-0 w-full h-[3px] bg-[var(--primary)]" />
        ) : null}
      </div>
    </button>
  );
}
