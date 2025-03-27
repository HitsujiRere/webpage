import { PiCertificate } from "react-icons/pi";

export const Awards = () => {
  return (
    <div className="card card-lg card-border border-base-300 bg-base-100">
      <div className="card-body @container gap-4">
        <h2 className="flex items-center gap-2">
          <PiCertificate className="text-2xl" />
          <span className="font-bold text-2xl">Awards</span>
        </h2>

        <ul className="list-disc space-y-2 pl-5">
          <li>第2回全国高等専門学校 ディープラーニングコンテスト2021：7位</li>
          <li>Hokuriku Innovation Trial-2020：ICTまちづくり賞</li>
          <li>パソコン甲子園2020 プログラミング部門：本選出場</li>
          <li>
            全国高専プログラミングコンテスト 第31回苫小牧大会(2020)
            自由部門：特別賞 パテント審査部門：奨励賞
          </li>
        </ul>
      </div>
    </div>
  );
};
