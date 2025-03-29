import classNames from "classnames";
import Link from "next/link";
import type { Work } from "~/types/Work";
import { WorkCardBody } from "./components/WorkCardBody";

export type WorkCardProps = {
  work: Work;
};

export const WorkCard = ({ work }: WorkCardProps) => {
  const baseClassName = "card card-sm h-full w-full bg-base-300";

  if (work.hasDetailPage) {
    return (
      <Link href={`/work/${work.id}`}>
        <button
          type="button"
          className={classNames(
            baseClassName,
            "link hover:-translate-y-1 no-underline transition-transform",
          )}
        >
          <WorkCardBody work={work} />
        </button>
      </Link>
    );
  }

  return (
    <div className={baseClassName}>
      <WorkCardBody work={work} />
    </div>
  );
};
