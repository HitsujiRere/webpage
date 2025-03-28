import { PiCube } from "react-icons/pi";
import works from "~/assets/works.json";
import { WorkCard } from "~/components/WorkCard";

export const Works = () => {
  return (
    <div className="card card-lg card-border border-base-300 bg-base-100">
      <div className="card-body @container gap-4">
        <h2 className="flex items-center gap-2">
          <PiCube className="text-2xl" />
          <span className="font-bold text-2xl">Works</span>
        </h2>

        <div className="grid @2xl:grid-cols-2 @3xl:grid-cols-3 gap-4">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};
