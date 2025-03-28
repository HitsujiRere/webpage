import Link from "next/link";
import type { Work } from "~/types/Work";
import { WorkCardBody } from "./components/WorkCardBody";

export type WorkCardProps = {
  work: Work;
};

export const WorkCard = ({ work }: WorkCardProps) => {
  if (work.hasDetailPage) {
    return (
      <Link href={`/work/${work.id}`}>
        <button
          type="button"
          className="card card-sm link h-full w-full bg-base-300 no-underline"
        >
          <WorkCardBody work={work} />
        </button>
      </Link>
    );
  }

  return (
    <div className="card card-sm h-full w-full bg-base-300">
      <WorkCardBody work={work} />
    </div>
  );
};
