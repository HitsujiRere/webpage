import { PiGithubLogo, PiTwitterLogo } from "react-icons/pi";
import { GridList } from "~/components/GridList";
import { Timeline } from "~/components/Timeline";

export const About = () => {
  return (
    <div className="card card-border border-base-300 bg-base-100">
      <div className="card-body @container gap-4">
        <div className="flex flex-wrap justify-between gap-2">
          <h1 className="flex items-baseline gap-2">
            <span className="font-bold text-2xl">ひつじれれ</span>
            <span className="font-bold text-xl">@hitsujirere</span>
          </h1>
          <div className="flex gap-2 text-accent text-xl xl:gap-4">
            <a
              href="https://x.com/HitsujiRere"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="btn btn-square">
                <PiTwitterLogo className="text-xl" />
              </button>
            </a>
            <a
              href="https://github.com/HitsujiRere"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="btn btn-square">
                <PiGithubLogo className="text-xl" />
              </button>
            </a>
          </div>
        </div>

        <GridList
          contents={[
            [
              "日本生まれ日本育ちの大学院1年生（2025/04現在）",
              "A first-year graduate student (as of April 2025) in Japan.",
            ],
            [
              "情報系．おおよそプログラマー",
              "Specializing in information technology, roughly a programmer.",
            ],
            [
              "アルゴリズム系の研究室でグラフに関する研究中",
              "Researching graphs in an algorithm-focused lab.",
            ],
            [
              "すきなこと：考えること．読書",
              "Favorite activities: Thinking, reading.",
            ],
            [
              "すきな言語：TypeScript, C++",
              "Favorite programming languages: TypeScript, C++.",
            ],
            ["すきな動物：ひつじ🐏", "Favorite animal: Sheep 🐏."],
          ]}
          gridClassName="@4xl:grid-cols-2"
        />

        <Timeline
          events={[
            { time: "2018/04", title: "■■工業高等専門学校 入学" },
            { time: "2023/03", title: "■■工業高等専門学校 卒業" },
            { time: "2023/04", title: "■■大学 ３年次編入学" },
            { time: "2025/03", title: "■■大学 卒業" },
            { time: "2025/04", title: "■■大学大学院 入学" },
          ]}
        />
      </div>
    </div>
  );
};
