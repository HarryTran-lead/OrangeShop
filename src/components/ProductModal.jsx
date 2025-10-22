import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  BadgeCheck,
  UtensilsCrossed,
  Info,
  FileText,
  ShieldCheck,
  Leaf,
  Package,
  Clock,
  ShoppingCart,
} from "lucide-react";

const formatVND = (n) => new Intl.NumberFormat("vi-VN").format(n);

export default function ProductModal({ product, onClose }) {
  const overlayRef = useRef(null);

  // Khóa scroll body khi mở
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, []);

  const v = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 250 },
    },
    exit: { y: 12, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1200] bg-black/50 backdrop-blur-[2px]"
        onClick={(e) => {
          if (e.target === overlayRef.current) onClose?.();
        }}
      >
        <motion.div
          variants={v}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          className="
            fixed inset-x-4 sm:inset-x-6 md:inset-x-10 top-[2vh] bottom-[2vh] sm:top-[6vh] sm:bottom-[6vh]
            mx-auto max-w-6xl
            flex flex-col overflow-hidden
            rounded-2xl border border-gray-200 bg-white shadow-2xl
            dark:border-gray-800 dark:bg-gray-900
          "
        >
          {/* HEADER (cố định) */}
          <div className="relative flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 font-bold text-white">
                CL
              </div>
              <div>
                <div className="font-semibold">{product.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Giá: {formatVND(product.price)}₫
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={onClose}
              aria-label="Đóng"
            >
              <X className="h-5 w-5" />
            </motion.button>
          </div>

          {/* BODY WRAPPER
              - Mobile: cuộn toàn bộ nội dung (chừa đáy cho footer)
              - Desktop: bố cục 2 cột, chỉ cột phải cuộn
          */}
          <div
            className="
              flex-1 custom-scrollbar
              overflow-y-auto lg:overflow-hidden
             
            "
          >
            <div className="grid h-full lg:grid-cols-2">
              {/* LEFT: Media + Quick facts (không cuộn ở desktop nhờ sticky) */}
              <div className="bg-gray-50/60 p-4 dark:bg-gray-800/40 md:p-6">
                <div className="space-y-4 lg:sticky lg:top-6">
                  <div className="aspect-video w-full overflow-hidden rounded-xl border border-gray-200 shadow-md dark:border-gray-700">
                    {product.videoUrl ? (
                      <iframe
                        className="h-full w-full"
                        src={product.videoUrl}
                        title={product.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <img
                        src={product.img}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <BadgeCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
                    Nguyên liệu đạt chuẩn VietGAP – không phẩm màu tổng hợp.
                  </div>

                  {/* QUICK FACTS */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
                      <div className="flex items-center gap-2">
                        <Leaf className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-semibold">Nguồn cam</span>
                      </div>
                      <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        VietGAP • truy xuất vườn
                      </div>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
                      <div className="flex items-center gap-2">
                        <Package className="h-4 w-4 text-indigo-600" />
                        <span className="text-xs font-semibold">Quy cách</span>
                      </div>
                      <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        Đóng gói sạch, hút ẩm
                      </div>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-amber-600" />
                        <span className="text-xs font-semibold">Giao hàng</span>
                      </div>
                      <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        Nội thành: trong ngày
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Content (panel cuộn ở desktop) */}
              <div
                className="
                  custom-scrollbar
                  p-4 sm:p-5 md:p-6 lg:p-7
                  lg:h-full lg:overflow-y-auto dark:bg-gray-800/50
                "
              >
                {/* Mô tả */}
                <div className="last:mb-0">
                  <div className="mb-1 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-orange-500" />
                    <h3 className="text-lg font-semibold">Mô tả</h3>
                  </div>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    {product.description}
                  </p>
                </div>

                {/* Quy trình */}
                {product.process?.length > 0 && (
                  <div className="mt-6 last:mb-0">
                    <div className="mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4 text-orange-500" />
                      <h4 className="font-semibold">Quy trình sản xuất</h4>
                    </div>
                    <ul className="ml-5 space-y-1 text-base text-gray-700 dark:text-gray-300">
                      {product.process.map((s, i) => (
                        <li key={`p-${i}`} className="flex gap-2">
                          {/* bullet tròn chuẩn */}
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500/80" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Hướng dẫn sử dụng */}
                {product.steps?.length > 0 && (
                  <div className="mt-6 last:mb-0">
                    <div className="mb-2 flex items-center gap-2">
                      <UtensilsCrossed className="h-4 w-4 text-orange-500" />
                      <h4 className="font-semibold">Hướng dẫn sử dụng ngon</h4>
                    </div>
                    <ol className="ml-5 space-y-1 text-base text-gray-700 dark:text-gray-300">
                      {product.steps.map((s, i) => (
                        <li key={`s-${i}`} className="flex gap-2">
                          <span className="mt-0.5 font-semibold text-orange-600">
                            {i + 1}.
                          </span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Bảo quản & Lưu ý */}
                {product.tips?.length > 0 && (
                  <div className="mt-6 last:mb-0">
                    <div className="mb-2 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-orange-500" />
                      <h4 className="font-semibold">Bảo quản & Lưu ý</h4>
                    </div>
                    <ul className="ml-5 space-y-1 text-base text-gray-700 dark:text-gray-300">
                      {product.tips.map((s, i) => (
                        <li key={`t-${i}`} className="flex gap-2">
                          {/* bullet tròn chuẩn */}
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* FOOTER (cố định) */}
          <div
            className="
    flex items-center justify-end sm:justify-between gap-3
    border-t border-gray-200 bg-white/95 px-3 py-3 backdrop-blur-sm
    dark:border-gray-800 dark:bg-gray-900/95
    sm:px-5 md:px-6 lg:px-7 sm:py-4
    pb-[max(0.75rem,env(safe-area-inset-bottom))]
  "
          >
            {/* Ẩn giá trên mobile */}
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                Giá hiện tại:
              </span>
              <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
                {formatVND(product.price)}₫
              </span>
            </div>

            {/* Nhóm nút */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onClose}
                className="
        rounded-lg border border-gray-200 px-3 sm:px-4 py-2 font-semibold
        transition-colors hover:border-orange-500 hover:text-orange-600
        dark:border-gray-700 dark:hover:text-orange-400
      "
              >
                Đóng lại
              </button>

              <a
                href="#contact"
                className="
        inline-flex items-center justify-center gap-2
        px-3 sm:px-4 py-2 rounded-lg
        bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold
        hover:shadow-md hover:-translate-y-0.5 active:scale-95
        transition-all duration-300
      "
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Đặt Hàng Ngay</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
