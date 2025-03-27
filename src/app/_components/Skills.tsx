import Image from "next/image";
import { PiFileCSharp, PiLaptop } from "react-icons/pi";
import {
  SiC,
  SiCplusplus,
  SiCss3,
  SiJavascript,
  SiProcessingfoundation,
  SiPython,
  SiReact,
  SiTypescript,
  SiUnity,
  SiVuedotjs,
} from "react-icons/si";
import { SkillCard } from "~/components/SkillCard";
import atcoderLogo from "~/public/logos/atcoder.png";

export const Skills = () => {
  return (
    <div className="card card-lg card-border border-base-300 bg-base-100">
      <div className="card-body @container gap-4">
        <h2 className="flex items-center gap-2">
          <PiLaptop className="text-2xl" />
          <span className="font-bold text-2xl">Skills</span>
        </h2>

        <div className="flex flex-wrap gap-2">
          <SkillCard
            name="JavaScript"
            stars={5}
            icon={<SiJavascript className="fill-accent text-3xl" />}
          />
          <SkillCard
            name="TypeScript"
            stars={5}
            icon={<SiTypescript className="fill-accent text-3xl" />}
          />
          <SkillCard
            name="C"
            stars={3}
            icon={<SiC className="fill-accent text-3xl" />}
          />
          <SkillCard
            name="C++"
            stars={4}
            icon={<SiCplusplus className="fill-accent text-3xl" />}
          />
          <SkillCard
            name="C#"
            stars={3}
            icon={<PiFileCSharp className="fill-accent text-3xl" />}
          />
          <SkillCard
            name="CSS"
            stars={3}
            icon={<SiCss3 className="fill-accent text-3xl" />}
          />
          <SkillCard
            name="Python"
            stars={3}
            icon={<SiPython className="fill-accent text-3xl" />}
          />
          <SkillCard
            name="Processing"
            stars={5}
            icon={<SiProcessingfoundation className="fill-accent text-3xl" />}
          />
          <SkillCard
            name="React"
            stars={4}
            icon={<SiReact className="fill-accent text-3xl" />}
          />
          <SkillCard
            name="Vue.js"
            stars={4}
            icon={<SiVuedotjs className="fill-accent text-3xl" />}
          />
          <SkillCard
            name="Unity"
            stars={2}
            icon={<SiUnity className="fill-accent text-3xl" />}
          />
          <SkillCard
            name="AtCoder"
            icon={<Image src={atcoderLogo} alt="AtCoder" height={30} />}
            href="https://atcoder.jp/users/Deji"
          >
            <span className="text-base">最高レート：1455</span>
          </SkillCard>
        </div>
      </div>
    </div>
  );
};
