export default function PresentationButton({
  text,
  onClick,
  enabled,
  className,
}: {
  onClick?: () => void;
  text: string;
  enabled: boolean;
  className?: string;
}) {
  return (
    <button
      className={"relative py-2 border-b-[1px] border-[#e5e5e5] " + className}
      onClick={onClick}
    >
      <div>
        <div
          style={
            enabled
              ? { color: "#212121", fontWeight: "600" }
              : { color: "#666", fontWeight: "400" }
          }
        >
          {text}
        </div>

        {enabled ? (
          <div className="absolute bottom-0 w-full h-[3px] bg-[var(--primary)]" />
        ) : null}
      </div>
    </button>
  );
}
