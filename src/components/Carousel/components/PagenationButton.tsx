import classNames from "classnames";
import { memo } from "react";

export type PagenationButtonProps = {
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
};

export const PagenationButton = memo(
  ({ index, isActive, onClick }: PagenationButtonProps) => {
    return (
      <button
        type="button"
        className={classNames("btn btn-circle btn-sm btn-soft", {
          "btn-active": isActive,
        })}
        onClick={() => onClick(index)}
      >
        {index + 1}
      </button>
    );
  },
);
