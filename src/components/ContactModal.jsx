import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Phone, Mail } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdTextsms } from "react-icons/md";
import { useIsMobileCallDevice } from "../hooks/useIsMobileCallDevice";

export default function ContactModal({ open, onClose, LINKS }) {
  const overlayRef = useRef(null);
  const isMobileCallDevice = useIsMobileCallDevice();

  // Khóa scroll khi mở modal
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => (document.documentElement.style.overflow = prev);
  }, [open]);

  const v = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 250 },
    },
    exit: { y: 12, opacity: 0, transition: { duration: 0.2 } },
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1300] bg-black/50 backdrop-blur-[2px] grid place-items-center"
        onClick={(e) => {
          if (e.target === overlayRef.current) onClose?.();
        }}
      >
        {/* Modal */}
        <motion.div
          variants={v}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          className="
            w-[min(92vw,44rem)]
            max-h-[70vh]
            flex flex-col overflow-hidden
            rounded-2xl border border-gray-200 bg-white shadow-2xl
            dark:border-gray-800 dark:bg-gray-900
          "
        >
          {/* Header */}
          <div className="relative flex items-center justify-between border-b border-gray-100 px-4 py-3 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <Send className="h-5 w-5 text-orange-600" />
              <h3 className="text-lg font-semibold">Liên hệ đặt hàng ngay</h3>
            </div>
            <motion.button
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}
              className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={onClose}
              aria-label="Đóng"
            >
              <X className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Body */}
          <div className="px-4 py-4 sm:px-5 sm:py-5 overflow-y-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Chọn kênh bạn thích, đội ngũ phản hồi trong vài phút.
            </p>

            {/* Buttons grid */}
            <div
              className={`
                grid gap-3 sm:gap-4
                ${
                  isMobileCallDevice
                    ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3"
                    : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-3"
                }
              `}
            >
              {/* Messenger */}
              <a
                href={LINKS.messenger}
                target="_blank"
                rel="noreferrer"
                className="
                  group inline-flex items-center justify-center gap-2
                  rounded-2xl px-5 py-4 text-base font-semibold
                  bg-white/90 dark:bg-gray-800/70
                  ring-1 ring-orange-200/60 dark:ring-gray-600
                  hover:bg-[#0084FF] hover:text-white transition
                  shadow-sm hover:shadow-md dark:hover:bg-blue-500
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0084FF]
                  focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900
                "
              >
                <FaFacebookMessenger className="h-5 w-5 text-[#0084FF] group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
                Messenger
              </a>

              {/* Zalo */}
              <a
                href={LINKS.zalo}
                target="_blank"
                rel="noreferrer"
                className="
                  group inline-flex items-center justify-center gap-2
                  rounded-2xl px-5 py-4 text-base font-semibold
                  bg-white/90 dark:bg-gray-800/70
                  ring-1 ring-orange-200/60 dark:ring-gray-600 dark:hover:bg-blue-50
                  hover:ring-0 hover:border-transparent
                  hover:bg-blue-50 hover:text-gray-700 transition-all duration-300
                  shadow-sm hover:shadow-md
                "
              >
                <img
                  src="/images/zalo_icon.png"
                  alt="Zalo"
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                />
                Zalo
              </a>

              {/* Email */}
              <a
                href={LINKS.email}
                className="
                  group inline-flex items-center justify-center gap-2
                  rounded-2xl px-5 py-4 text-base font-semibold
                  bg-white/90 dark:bg-gray-800/70
                  ring-1 ring-orange-200/60 dark:ring-gray-600
                  hover:bg-indigo-600 hover:text-white transition
                  shadow-sm hover:shadow-md dark:hover:bg-indigo-500
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600
                  focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900
                "
                aria-label={`Email ${LINKS.emailText}`}
              >
                <Mail className="h-5 w-5 text-indigo-600 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
                Email
              </a>

              {/* SMS (only mobile) */}
              {isMobileCallDevice && (
                <a
                  href={LINKS.sms}
                  className="
                    group inline-flex items-center justify-center gap-2
                    rounded-2xl px-5 py-4 text-base font-semibold
                    bg-white/90 dark:bg-gray-800/70
                    ring-1 ring-orange-200/60 dark:ring-gray-600
                    hover:bg-[#34C759] hover:text-white transition
                    shadow-sm hover:shadow-md dark:hover:bg-green-600
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34C759]
                    focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900
                  "
                >
                  <MdTextsms className="h-5 w-5 text-[#34C759] group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
                  SMS
                </a>
              )}

              {/* Gọi ngay (only mobile) */}
              {isMobileCallDevice && (
                <a
                  href={LINKS.tel}
                  className="
                    group inline-flex items-center justify-center gap-2
                    rounded-2xl px-5 py-4 text-base font-semibold
                    bg-white/90 dark:bg-gray-800/70
                    ring-1 ring-orange-200/60 dark:ring-gray-600
                    hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500
                    hover:text-white transition
                    shadow-sm hover:shadow-md
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
                    focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900
                  "
                >
                  <Phone className="h-5 w-5 text-orange-500 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
                  Gọi ngay
                </a>
              )}
            </div>

            {/* Hotline + email text */}
            <div className="mt-5 text-center text-sm text-gray-600 dark:text-gray-300">
              Hotline:{" "}
              <a
                href={LINKS.tel}
                className="font-semibold text-orange-600 dark:text-orange-300 hover:underline underline-offset-4"
              >
                {LINKS.hotline}
              </a>
              <span className="mx-2 text-gray-400">•</span>
              Email:{" "}
              <a
                href={LINKS.email}
                className="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline underline-offset-4"
              >
                {LINKS.emailText}
              </a>
            </div>

            <div className="mt-1 text-center text-xs text-gray-500 dark:text-gray-400">
              Hoạt động: 8:00–22:00 • Quận 10, TP.HCM
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
