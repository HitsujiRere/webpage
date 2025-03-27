import { PiBuildingOffice } from "react-icons/pi";

export const Jobs = () => {
  return (
    <div className="card card-lg card-border border-base-300 bg-base-100">
      <div className="card-body @container gap-4">
        <h2 className="flex items-center gap-2">
          <PiBuildingOffice className="text-2xl" />
          <span className="font-bold text-2xl">Jobs</span>
        </h2>

        <ul className="list-disc pl-5">
          <li>
            株式会社エニーアップ：2022/06 ~ 2023/03
            <br />
            主にVue.jsを用いたフロントエンドを担当
          </li>
        </ul>
      </div>
    </div>
  );
};
