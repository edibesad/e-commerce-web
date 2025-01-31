export default function RatingStar({
  variant = "full",
  size = 200,
}: {
  variant?: "full" | "half" | "empty";
  size?: number;
}) {
  const fillColor =
    variant === "full"
      ? "#FFB400"
      : variant === "half"
      ? "url(#halfFill)"
      : "#CCCCCC";

  return (
    <div className="flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="halfFill" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#FFB400" />
            <stop offset="50%" stopColor="#CCCCCC" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="transparent" />
        <path
          d="M50,10 L61.5,37.5 L90,37.5 L66,52.5 L75,82.5 L50,65 L25,82.5 L34,52.5 L10,37.5 L38.5,37.5 Z"
          fill={fillColor}
          stroke="#CCCCCC"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
