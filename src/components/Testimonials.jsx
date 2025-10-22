import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle";
import RevealOnView from "./RevealOnView";
import { testimonials } from "../data/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Khách Hàng Nói Gì"
          title={
            <>
              Trải Nghiệm{" "}
              <span className="text-orange-600 dark:text-orange-400">
                Thực Tế
              </span>
            </>
          }
        />
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <RevealOnView key={i} type={i % 2 ? "slideLeft" : "slideRight"}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  “{t.text}”
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
