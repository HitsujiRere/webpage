import type { ReactNode } from "react";
import { Stars } from "./Stars";

export type SkillCardBodyProps = {
  name: ReactNode;
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
    <div className="card-body items-center justify-between gap-2 text-base">
      {icon}
      {name}
      {stars !== undefined && <Stars stars={stars} />}
      {children}
    </div>
  );
};
