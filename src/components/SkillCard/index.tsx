import classNames from "classnames";
import {
  SkillCardBody,
  type SkillCardBodyProps,
} from "./components/SkillCardBody";

export type SkillCardProps = SkillCardBodyProps & {
  href?: string;
};

export const SkillCard = ({ href, ...props }: SkillCardProps) => {
  const baseClassName = "card card-border card-sm border-base-300 bg-base-300";

  if (href !== undefined) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        <button
          type="button"
          className={classNames(baseClassName, "link no-underline")}
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
