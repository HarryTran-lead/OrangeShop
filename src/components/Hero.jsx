import { Leaf, ShoppingBag, BookOpen } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import RevealOnView from "./RevealOnView";

export default function Hero() {
  const controls = useAnimationControls();
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 md:pt-14 lg:pt-14 pb-16 lg:pb-20"
    >
      {/* background softly */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 opacity-50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-300 dark:bg-orange-900 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left */}
        <RevealOnView type="slideRight">
          <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium">
            🍊 Từ Thiên Nhiên Đến Triết Lý
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mt-4">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Cam Lành
            </span>
            <br />
            <span>Hài Hòa & Bền Vững</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4 sm:mt-6 max-w-xl">
            Nơi mỗi quả cam không chỉ mang hương vị thiên nhiên thuần khiết, mà
            còn chứa đựng triết lý sống hài hòa và bền vững — hướng con người
            đến một cuộc sống tươi mới, an lành và đầy cảm hứng từ tự nhiên.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-4 mt-6 sm:mt-8">
            {/* CTA chính */}
            <a
              href="#products"
              className="
                group relative flex items-center gap-2 px-3 sm:px-8 py-3 sm:py-4 
                bg-gradient-to-r from-orange-600 to-orange-500 
                text-white rounded-xl font-semibold shadow-lg 
                hover:shadow-orange-500/40 
                hover:-translate-y-0.5 active:scale-95 
                transition-all duration-300
                overflow-hidden
              "
            >
              <span
                className="
    absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
    opacity-0 group-hover:opacity-100
    translate-x-[150%]
    animate-[shine-reverse_0.8s_ease-in-out_forwards]
    group-hover:animate-[shine_0.8s_ease-in-out_forwards]
    pointer-events-none
  "
              />

              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>Khám Phá Ngay</span>
            </a>

            {/* CTA phụ */}
            <a
              href="#philosophy"
              className="
                flex items-center gap-2 px-3 sm:px-8 py-3 sm:py-4 
                bg-white dark:bg-gray-800 
                border-2 border-gray-200 dark:border-gray-700 
                rounded-xl font-semibold text-gray-800 dark:text-gray-200
                hover:border-orange-500 dark:hover:border-orange-400
                hover:text-orange-600 dark:hover:text-orange-400
                shadow-sm hover:shadow-md
                hover:-translate-y-0.5 active:scale-95
                transition-all duration-300
              "
            >
              <BookOpen className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
              <span>Tìm Hiểu Triết Lý</span>
            </a>
          </div>
          <div
            className="
    flex flex-wrap gap-4 sm:gap-8
    justify-center sm:justify-start
    pt-8 mt-4 sm:mt-8
    border-t border-gray-200 dark:border-gray-700
    text-center sm:text-left
  "
          >
            {[
              { n: "1000+", l: "Khách hàng hài lòng" },
              { n: "100%", l: "Nguyên liệu tự nhiên" },
              { n: "3", l: "Dòng sản phẩm" },
            ].map((x) => (
              <div key={x.l}>
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400">
                  {x.n}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {x.l}
                </div>
              </div>
            ))}
          </div>
        </RevealOnView>

        {/* Right (Image + angled background) */}
        <RevealOnView type="slideLeft">
          <div className="relative group">
            {/* NỀN NGHIÊNG (phía sau) */}
            <div className=" absolute inset-[-1px] /* nới rộng ra khỏi khung ảnh để thấy rõ */ -rotate-6 z-0 rounded-[2rem] bg-gradient-to-tr from-teal-400/35 via-purple-400/30 to-blue-400/30 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.35)] pointer-events-none " />
            {/* glow nhẹ */}
            <div className="absolute inset-[-2px] -z-30 rounded-[2.2rem] bg-orange-400/15 blur-2xl pointer-events-none" />
            {/* brand blur */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-400 to-amber-400 rounded-3xl blur-2xl opacity-15 pointer-events-none" />

            {/* Ảnh chính */}
            <img
              src="/images/cam-tuoi.jpg"
              alt="Cam tươi"
              className="
        relative z-10 rounded-3xl shadow-2xl w-[93%] mx-auto
        rotate-1 transition-transform duration-500 ease-out
        group-hover:rotate-0
      "
              loading="eager"
            />

            {/* Ảnh trang trí: GÓC TRÊN-PHẢI (đè trước ảnh chính) */}
            <img
              src="/images/slice-1.jpg"
              alt="Lát cam trang trí"
              className="
        pointer-events-none select-none
        absolute -top-5 right-2 sm:-top-6 sm:-right-2
        w-16 sm:w-20 md:w-20
        rounded-xl
        z-20
        
        drop-shadow-xl
        -rotate-6 transition-transform duration-500 ease-out will-change-transform
        group-hover:rotate-0 group-hover:-translate-y-0.5
      "
              loading="lazy"
            />

            {/* Ảnh trang trí: GÓC DƯỚI-TRÁI (đè trước ảnh chính) */}
            <img
              src="/images/slice-2.jpg"
              alt="Lát cam trang trí"
              className="
        pointer-events-none select-none
        absolute -bottom-6 left-2 sm:-bottom-7 sm:-left-2
        w-20 sm:w-20 md:w-20
        rounded-xl
        z-20
        
        drop-shadow-2xl
        -rotate-6 transition-transform duration-500 ease-out will-change-transform
        group-hover:rotate-0 group-hover:translate-y-0.5
      "
              loading="lazy"
            />
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
