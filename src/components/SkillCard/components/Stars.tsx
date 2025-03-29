import { PiStar, PiStarFill } from "react-icons/pi";

export const Stars = ({ stars }: { stars: number }) => {
  return (
    <div className="flex justify-center">
      {[1, 2, 3, 4, 5].map((star) =>
        star <= stars ? (
          <PiStarFill key={star} className="fill-primary text-sm" />
        ) : (
          <PiStar key={star} className="fill-base-content text-sm" />
        ),
      )}
    </div>
  );
};
