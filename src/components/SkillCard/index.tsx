import classNames from "classnames";
import {
  SkillCardBody,
  type SkillCardBodyProps,
} from "./components/SkillCardBody";

export type SkillCardProps = SkillCardBodyProps & {
  href?: string;
};

export const SkillCard = ({ href, ...props }: SkillCardProps) => {
  const baseClassName = "card card-sm bg-base-300";

  if (href !== undefined) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        <button
          type="button"
          className={classNames(
            baseClassName,
            "link hover:-translate-y-1 no-underline transition-transform",
          )}
        >
          <SkillCardBody {...props} />
        </button>
      </a>
    );
  }

  return (
    <div className={baseClassName}>
      <SkillCardBody {...props} />
    </div>
  );
};
