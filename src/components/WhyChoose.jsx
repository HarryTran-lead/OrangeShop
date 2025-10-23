import React, { useState } from "react";
import {
  Award,
  Package,
  Clock,
  Shield,
  Leaf,
  Recycle,
  Truck,
  Users,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import RevealOnView from "./RevealOnView";
import { whyChoose } from "../data/data";

const iconMap = { Award, Package, Clock, Shield, Leaf, Recycle, Truck, Users };

export default function WhyChoose() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="why" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <SectionTitle
            kicker="Lý do bạn sẽ thích"
            title={
              <>
                Vì Sao Chọn{" "}
                <span className="text-orange-600 dark:text-orange-400">
                  Cam Lành
                </span>
                ?
              </>
            }
            subtitle="  Sản phẩm từ cam sạch, minh bạch nguồn gốc, bao bì thân thiện môi
            trường và dịch vụ giao nhanh – tất cả để bạn yên tâm lựa chọn."
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {whyChoose.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <RevealOnView key={index} type="fadeUp">
                <div
                  className={[
                    "group p-4 sm:p-5 rounded-2xl border transition-all duration-500 cursor-pointer transform hover:scale-105",
                    "border-gray-200 dark:border-gray-700 dark:hover:border-orange-400/40 hover:border-orange-200 hover:shadow-xl",
                    activeFeature === index
                      ? "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300 dark:from-orange-900/30 dark:to-orange-800/20 dark:border-orange-400/60 dark:shadow-[0_0_10px_rgba(251,146,60,0.25)]"
                      : "bg-white dark:bg-gray-800",
                  ].join(" ")}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div
                    className={[
                      "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300",
                      activeFeature === index
                        ? "bg-orange-500 text-white"
                        : "bg-orange-100 text-orange-600 dark:bg-gray-400/30 dark:text-orange-400",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </RevealOnView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
