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
  if (work === undefined) {
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

          <p className="text-lg">{work.explain}</p>

          <p className="text-lg">{work.feeling}</p>

          {work.charge && <p>担当: {work.charge}</p>}
          {work.language && <p>Languages: {work.language}</p>}
          {work.framework && <p>Libraries: {work.framework}</p>}

          <div className="flex gap-4">
            {work.linkWork && (
              <a href={work.linkGitHub} target="_blank" rel="noreferrer">
                <button type="button" className="btn">
                  <PiLink />
                  Website
                </button>
              </a>
            )}
            {work.linkGitHub && (
              <a href={work.linkGitHub} target="_blank" rel="noreferrer">
                <button type="button" className="btn">
                  <PiGithubLogo />
                  GitHub
                </button>
              </a>
            )}
          </div>

          {work.images && (
            <Carousel options={{ loop: true }}>
              {work.images.map((image, index) => (
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
  return works.map((work) => ({ id: work.id }));
}
