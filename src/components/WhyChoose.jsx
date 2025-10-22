import { Award, Package, Clock, Shield } from "lucide-react";
import SectionTitle from "./SectionTitle";
import RevealOnView from "./RevealOnView";
import { whyChoose } from "../data/data";

const iconMap = { Award, Package, Clock, Shield };

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="py-20 bg-gray-50 dark:from-gray-800 dark:to-gray-850"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={
            <>
              Vì Sao Chọn{" "}
              <span className="text-orange-600 dark:text-orange-400">
                Cam Lành
              </span>
              ?
            </>
          }
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <RevealOnView key={idx} type="fadeUp">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg grid place-items-center text-orange-600 dark:text-orange-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
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
