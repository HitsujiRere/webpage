import type { ReactNode } from "react";
import { Stars } from "./Stars";

export type SkillCardBodyProps = {
  name: string | ReactNode;
  stars?: number;
  icon?: ReactNode;
  href?: string;
  children?: ReactNode;
};

export const SkillCardBody = ({
  name,
  stars,
  icon,
  children,
}: SkillCardBodyProps) => {
  return (
    <div className="card-body items-center justify-between gap-2">
      {icon}
      {typeof name === "string" ? (
        <span className="text-base">{name}</span>
      ) : (
        name
      )}
      {stars !== undefined && <Stars stars={stars} />}
      {children}
    </div>
  );
};
