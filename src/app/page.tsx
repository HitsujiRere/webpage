import { About } from "./_components/About";
import { Awards } from "./_components/Awards";
import { Jobs } from "./_components/Jobs";
import { Skills } from "./_components/Skills";

export default function Home() {
  return (
    <main className="mx-auto grid max-w-5xl gap-4 p-4 lg:p-8">
      <About />

      <Awards />

      <Skills />

      <Jobs />
    </main>
  );
}
