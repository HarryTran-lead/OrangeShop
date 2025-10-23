import { Leaf, Heart, Recycle } from "lucide-react";
import SectionTitle from "./SectionTitle";
import RevealOnView from "./RevealOnView";
import { philosophyValues } from "../data/data";

const iconMap = { Leaf, Heart, Recycle };

export default function Philosophy() {
  // vị trí ba card theo bố cục tam giác (md+)
  const positions = [
    { top: "0%", left: "50%", transform: "translate(-50%, 0)" }, // đỉnh
    { top: "65%", left: "10%", transform: "translate(0, 0)" }, // trái
    { top: "65%", right: "10%", transform: "translate(0, 0)" }, // phải
  ];

  return (
    <section
      id="philosophy"
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-800 dark:to-gray-850 relative overflow-hidden"
    >
      {/* background décor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          kicker="Triết Lý Cam Lành"
          title={
            <>
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Biện Chứng
              </span>{" "}
              Giữa Con Người & Tự Nhiên
            </>
          }
          subtitle="Lấy cảm hứng từ triết học Mác - Lênin về mối quan hệ người - tự nhiên - lao động, khẳng định tư duy tái tạo và phát triển bền vững."
        />

        {/* MOBILE/TABLET: grid thường */}
        <div className="grid gap-8 md:hidden">
          {philosophyValues.map((item, idx) => {
            const Icon = iconMap[item.icon] || Leaf;
            return (
              <RevealOnView
                key={idx}
                type="scaleIn"
                className="group bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100/40 dark:border-orange-900/30 overflow-hidden"
              >
                <div className="relative mb-3 flex justify-center">
                  <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl grid place-items-center text-white shadow-lg">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                  {item.desc}
                </p>
              </RevealOnView>
            );
          })}
        </div>

        {/* DESKTOP: bố cục tam giác */}
        <div className="relative max-w-7xl mx-auto mb-16 hidden md:block">
          {/* Lines: nâng z-index lên z-10 để không bị lấp */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <defs>
              <linearGradient
                id="lineGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Trên ↔ Trái */}
            <line
              x1="50%"
              y1="15%"
              x2="20%"
              y2="75%"
              stroke="url(#lineGradient1)"
              strokeWidth="2"
              strokeDasharray="8 4"
              strokeLinecap="round"
              className="animate-pulse"
            />
            {/* Trên ↔ Phải */}
            <line
              x1="50%"
              y1="15%"
              x2="80%"
              y2="75%"
              stroke="url(#lineGradient1)"
              strokeWidth="2"
              strokeDasharray="8 4"
              strokeLinecap="round"
              className="animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            {/* Đáy trái ↔ đáy phải (nâng cao hơn để hiện rõ) */}
            <line
              x1="30%"
              y1="94.999%"
              x2="70%"
              y2="95%"
              stroke="url(#lineGradient1)"
              strokeWidth="2"
              strokeDasharray="8 4"
              strokeLinecap="round"
              className="animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />
          </svg>
          

          {/* Cards: đặt z-20 để luôn nổi trên các line */}
          <div className="relative h-[500px] z-20">
            {philosophyValues.map((item, idx) => {
              const Icon = iconMap[item.icon] || Leaf;
              const pos = positions[idx] || positions[0];

              return (
                <div
                  key={idx}
                  className="absolute z-30"
                  style={{ ...pos, width: 320 }}
                >
                  <RevealOnView
                    type="scaleIn"
                    className="group relative bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-500 border-2 border-transparent hover:border-orange-200 dark:hover:border-orange-800 overflow-hidden"
                  >
                    <div className="relative mb-3 flex justify-center">
                      <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full grid place-items-center text-white shadow-lg group-hover:rotate-[360deg] transition-transform duration-500">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>

                    {/* progress trong card – fill đầy, không tràn/không hở */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-transparent hidden:sm-block">
                      <div className="h-full w-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-b-3xl transition-[width] duration-700 ease-out group-hover:w-full" />
                    </div>
                  </RevealOnView>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom explanation */}
        <RevealOnView type="fadeIn">
          <div className="max-w-3xl mx-auto text-center mt-10 sm:mt-40">
            <div
              className="
        bg-white dark:bg-gray-700
        backdrop-blur-sm
        rounded-2xl p-8
        border border-orange-100 dark:border-orange-800
        shadow-md
        transition-all duration-300 hover:-translate-y-1
      "
            >
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ba giá trị cốt lõi tạo thành một{" "}
                <span className="font-semibold text-orange-600">
                  tam giác biện chứng
                </span>
                , trong đó mỗi yếu tố vừa độc lập vừa gắn kết chặt chẽ, tạo nên
                một hệ sinh thái{" "}
                <span className="font-semibold text-amber-600">
                  bền vững và hài hòa
                </span>
                .
              </p>
            </div>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
