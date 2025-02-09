import RatingStar from "./rating-star";

export function RatingStars({
  percentage,
  size = 10,
}: {
  percentage: number;
  size?: number;
}) {
  return (
    <div className="flex w-fit h-fit">
      <RatingStar variant={getVariant(percentage, 1)} size={size} />
      <RatingStar variant={getVariant(percentage, 2)} size={size} />
      <RatingStar variant={getVariant(percentage, 3)} size={size} />
      <RatingStar variant={getVariant(percentage, 4)} size={size} />
      <RatingStar variant={getVariant(percentage, 5)} size={size} />
    </div>
  );
}

function getVariant(percentage: number, index: number) {
  if (percentage >= index * 20) {
    return "full";
  } else if (percentage > index * 20 - 10) {
    return "half";
  } else {
    return "empty";
  }
}
