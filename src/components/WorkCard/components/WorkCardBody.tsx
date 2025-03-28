import Image from "next/image";
import type { Work } from "~/types/Work";

export type WorkCardBodyProps = {
  work: Work;
};

export const WorkCardBody = ({ work }: WorkCardBodyProps) => {
  return (
    <>
      <figure className="relative h-48 w-full">
        {work.coverImage && (
          <Image
            src={work.coverImage}
            alt={work.name}
            className="object-cover hover:object-contain"
            fill
          />
        )}
      </figure>
      <div className="card-body items-center gap-2">
        <span className="text-lg">{work.name}</span>
        <span className="text-base">{work.explain}</span>
      </div>
    </>
  );
};
