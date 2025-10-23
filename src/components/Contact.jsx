import { Send, Phone, CheckCircle, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdTextsms } from "react-icons/md";

export default function QuickContactSection() {
  const LINKS = {
    messenger: "https://m.me/camlanh",
    zalo: "https://zalo.me/0900000000",
    sms: "sms:+84900000000?body=Chao%20Cam%20Lanh%2C%20toi%20muon%20dat%20hang",
    tel: "tel:+84900000000",
    hotline: "0366 750 106",
    email:
      "mailto:hello@camlanh.vn?subject=%C4%90%E1%BA%B7t%20h%C3%A0ng%20Cam%20L%C3%A0nh&body=Ch%C3%A0o%20Cam%20L%C3%A0nh%2C%20t%C3%B4i%20mu%E1%BB%91n%20%C4%91%E1%BA%B7t%20h%C3%A0ng%3A%20...",
    emailText: "hello@camlanh.vn",
  };

  const [copied, setCopied] = useState(false);

  const copyHotline = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.hotline);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  return (
    <section
      id="contact"
      className="
        relative py-16 sm:py-20
        bg-gradient-to-br from-orange-50 to-amber-50
        dark:from-gray-800 dark:to-gray-800
        overflow-hidden
      "
    >
      {/* Orbs décor */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 dark:from-orange-900/20 dark:to-amber-900/20">
            <Send className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">
              Liên hệ tức thì
            </span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Cần đặt cam
            </span>{" "}
            <span className="text-gray-900 dark:text-white">
              — nhắn Cam Lành ngay
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Chọn kênh bạn thích, đội ngũ phản hồi trong vài phút.
          </p>
        </div>

        {/* Card */}
        <div
          className="
            rounded-3xl border
            border-orange-100/70 dark:border-gray-600
            bg-white/80 dark:bg-gray-700
            shadow-xl backdrop-blur
            p-5 sm:p-8
          "
        >
          {/* Buttons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {/* Messenger */}
            <a
              href={LINKS.messenger}
              target="_blank"
              rel="noreferrer"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-2xl px-5 py-4 text-base font-semibold
                bg-white/90 dark:bg-gray-800/70
                ring-1 ring-orange-200/60 dark:ring-gray-600 dark:hover:bg-blue-500
                hover:bg-[#0084FF] hover:text-white transition
                shadow-sm hover:shadow-md
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
    hover:bg-blue-50 hover:text-white transition-all duration-300
    shadow-sm hover:shadow-md
  "
            >
              <img
                src="/images/zalo_icon.png"
                alt="Zalo"
                className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="group-hover:text-gray-700">Zalo</span>
            </a>
            <a
              href={LINKS.email}
              className="
                group inline-flex items-center justify-center gap-2
                rounded-2xl px-5 py-4 text-base font-semibold
                bg-white/90 dark:bg-gray-800/70
                ring-1 ring-orange-200/60 dark:ring-gray-600
                hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition
                shadow-sm hover:shadow-md
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800
              "
              aria-label={`Email ${LINKS.emailText}`}
            >
              <Mail className="h-5 w-5 text-indigo-600 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
              Email
            </a>

            {/* SMS */}
            <a
              href={LINKS.sms}
              className="
                group inline-flex items-center justify-center gap-2
                rounded-2xl px-5 py-4 text-base font-semibold
                bg-white/90 dark:bg-gray-800/70
                ring-1 ring-orange-200/60 dark:ring-gray-600 dark:hover:bg-green-600
                hover:bg-[#34C759] hover:text-white transition
                shadow-sm hover:shadow-md
              "
            >
              <MdTextsms className="h-5 w-5 text-[#34C759] group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
              SMS
            </a>

            {/* Gọi ngay */}
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
              "
            >
              <Phone className="h-5 w-5 text-orange-500 group-hover:text-white group-hover:scale-110 transition-transform duration-300" />
              Gọi ngay
            </a>
          </div>

          {/* Hotline */}
          <div className="mt-5 sm:mt-6 flex flex-col items-center gap-2 text-sm">
            <div className="text-gray-600 dark:text-gray-300">
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
                className="font-semibold text-indigo-600 dark:text-indigo-300 hover:underline underline-offset-4"
              >
                {LINKS.emailText}
              </a>
            </div>

            <button
              onClick={copyHotline}
              className="
                relative flex items-center justify-center gap-2
                text-xs font-medium px-3 py-1.5 rounded-full
                bg-white/80 dark:bg-gray-800/60
                ring-1 ring-orange-200/60 dark:ring-orange-900/40
                hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white
                transition
              "
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-1"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Đã sao chép số!
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    Sao chép số điện thoại
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Info nhỏ */}
        <div className="mx-auto mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Hoạt động: 8:00–22:00 • Quận 10, TP.HCM
        </div>
      </div>
    </section>
  );
}
