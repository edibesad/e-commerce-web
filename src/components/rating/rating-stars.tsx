import RatingStar from "./rating-star";

export function RatingStars({ percentage }: { percentage: number }) {
  return (
    <div className="flex w-fit h-full">
      <RatingStar variant={getVariant(percentage, 1)} size={10} />
      <RatingStar variant={getVariant(percentage, 2)} size={10} />
      <RatingStar variant={getVariant(percentage, 3)} size={10} />
      <RatingStar variant={getVariant(percentage, 4)} size={10} />
      <RatingStar variant={getVariant(percentage, 5)} size={10} />
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
