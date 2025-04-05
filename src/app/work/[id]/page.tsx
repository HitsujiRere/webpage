import Image from "next/image";
import { notFound } from "next/navigation";
import { PiGithubLogo, PiLink } from "react-icons/pi";
import works from "~/assets/works.json";
import { Carousel } from "~/components/Carousel";

type HomeParams = {
  id: string;
};

export default async function Home({
  params,
}: { params: Promise<HomeParams> }) {
  const { id } = await params;

  const work = works.find((work) => work.id === id);
  if (work === undefined || work.details === undefined) {
    notFound();
  }

  return (
    <main className="mx-auto grid max-w-5xl gap-4 p-4 lg:p-8">
      <div className="card card-lg card-border border-base-300 bg-base-100">
        <div className="card-body @container gap-4">
          <h1 className="flex items-baseline gap-2">
            <span className="font-bold text-2xl">#</span>
            <span className="font-bold text-2xl">{work.name}</span>
          </h1>

          {work.details.explains.map((explain) => (
            <p key={explain} className="text-lg">
              {explain}
            </p>
          ))}

          {work.details.technologies && (
            <div className="flex gap-2">
              <span>Tech Stack</span>
              {work.details.technologies.map((technology) => (
                <span key={technology} className="badge badge-neutral">
                  {technology}
                </span>
              ))}
            </div>
            // <p>Tech Stack: {work.details.technologies.join(", ")}</p>
          )}

          <div className="flex gap-4">
            {work.details.linkForWork && (
              <a
                href={work.details.linkForWork}
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="btn">
                  <PiLink />
                  Website
                </button>
              </a>
            )}
            {work.details.linkForRepository && (
              <a
                href={work.details.linkForRepository}
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="btn">
                  <PiGithubLogo />
                  GitHub
                </button>
              </a>
            )}
          </div>

          {work.details.images && (
            <Carousel options={{ loop: true }}>
              {work.details.images.map((image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt={`Image ${index}`}
                  fill
                  className="object-contain"
                />
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams(): Promise<HomeParams[]> {
  return works.filter((work) => work.details).map((work) => ({ id: work.id }));
}
