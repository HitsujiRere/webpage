import { memo } from "react";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

export type NavigationButtonProps = {
  navigaton: "next" | "prev";
  onClick: () => void;
};

export const NavigationButton = memo(
  ({ navigaton, onClick }: NavigationButtonProps) => {
    return (
      <button
        type="button"
        className="btn btn-square btn-sm btn-soft"
        onClick={() => onClick()}
      >
        {navigaton === "next" ? <PiCaretRight /> : <PiCaretLeft />}
      </button>
    );
  },
);
