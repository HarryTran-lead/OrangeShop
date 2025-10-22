import { useEffect, useRef, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Tooltip from "@mui/material/Tooltip";

import useScrollSpy from "../hooks/useScrollSpy";
import useTheme from "../hooks/useTheme";
import useScrollToId from "../hooks/useScrollToId";

const NAVS = [
  { id: "#hero", label: "Giới Thiệu" },
  { id: "#products", label: "Sản Phẩm" },
  { id: "#philosophy", label: "Triết Lý" },
  { id: "#why", label: "Vì Sao Chọn" },
  { id: "#testimonials", label: "Đánh Giá" },
  { id: "#contact", label: "Liên Hệ" },
];

export default function Navbar() {
  const { toggle } = useTheme();
  const scrollTo = useScrollToId(84);
  const active = useScrollSpy(
    NAVS.map((n) => n.id),
    120
  );

  // Theme state (để đổi nhãn tooltip)
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);
  const onToggleTheme = () => {
    toggle();
    setIsDark((d) => !d);
  };

  // Shadow on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // Khóa scroll khi mở menu
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  // Đóng khi nhấn ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Variants cho menu
  const panelVariants = {
    hidden: { y: "-10%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 280, damping: 26 },
    },
    exit: { y: "-8%", opacity: 0, transition: { duration: 0.2 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    // đợi panel đóng 1 nhịp để scroll mượt
    setTimeout(() => scrollTo(id)(e), 10);
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-all duration-300
        ${
          scrolled
            ? "shadow-md bg-white/95 dark:bg-gray-800/95"
            : "bg-white/90 dark:bg-gray-800/90"
        }
        border-gray-200 dark:border-gray-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={scrollTo("#hero")}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl grid place-items-center text-white font-bold shadow-sm shadow-orange-200/50 dark:shadow-none">
              CL
            </div>
            <div>
              <div className="font-bold text-lg text-gray-900 dark:text-white">
                Cam Lành
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Triết lý sống xanh
              </div>
            </div>
          </a>

          {/* Nav items (Desktop) */}
          <nav className="hidden md:flex items-center gap-6">
            {NAVS.map((n) => (
              <a
                key={n.id}
                href={n.id}
                onClick={scrollTo(n.id)}
                className={`text-sm font-medium transition-colors hover:text-orange-600 dark:hover:text-orange-400 ${
                  active === n.id
                    ? "text-orange-600 dark:text-orange-400"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Theme toggle (desktop + tooltip) */}
            <div className="hidden md:block">
              <Tooltip
                arrow
                title={
                  isDark ? "Chuyển sang Light mode" : "Chuyển sang Dark mode"
                }
              >
                <button
                  onClick={onToggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  <Sun className="w-5 h-5 text-yellow-400 hidden dark:block" />
                  <Moon className="w-5 h-5 block dark:hidden text-gray-800" />
                </button>
              </Tooltip>
            </div>

            {/* Theme toggle (mobile) */}
            <button
              onClick={onToggleTheme}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <Sun className="w-5 h-5 text-yellow-400 hidden dark:block" />
              <Moon className="w-5 h-5 block dark:hidden text-gray-800" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls="mobile-menu-panel"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Overlay + Panel) via PORTAL */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <>
              {/* Overlay: tách khỏi header để không bị clip/che */}
              <motion.div
                key="overlay"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={overlayVariants}
                className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-[2px]"
                onClick={() => setOpen(false)}
                aria-hidden="true"
              />

              {/* Panel nổi phía trên */}
              <motion.div
                key="panel"
                id="mobile-menu-panel"
                role="dialog"
                aria-modal="true"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={panelVariants}
                ref={panelRef}
                className="
    fixed
    top-[calc(env(safe-area-inset-top,0px)+8px)]
    inset-x-4 sm:inset-x-6
    z-[1010]
    w-auto max-w-sm mx-auto
    rounded-2xl
    bg-white/95 dark:bg-gray-900/95
    border border-gray-200 dark:border-gray-700
    shadow-2xl p-4
    max-h-[calc(100dvh-32px)] overflow-auto  
  "
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg grid place-items-center text-white font-bold">
                      CL
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Cam Lành
                    </span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-2 divide-y divide-gray-100 dark:divide-gray-800">
                  {NAVS.map((n) => (
                    <a
                      key={n.id}
                      href={n.id}
                      onClick={handleNavClick(n.id)}
                      className={`
                        flex items-center justify-between
                        py-3.5 px-2
                        text-base font-medium
                        transition-colors
                        ${
                          active === n.id
                            ? "text-orange-600 dark:text-orange-400"
                            : "text-gray-800 dark:text-gray-100"
                        }
                        hover:text-orange-600 dark:hover:text-orange-400
                      `}
                    >
                      <span>{n.label}</span>
                      <span
                        className={`h-2 w-2 rounded-full ${
                          active === n.id
                            ? "bg-orange-500"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                    </a>
                  ))}
                </nav>

                {/* Quick actions */}
                <div className="mt-4 flex gap-3">
                  <a
                    href="#products"
                    onClick={handleNavClick("#products")}
                    className="flex-1 inline-flex justify-center items-center px-4 py-3 rounded-lg
                               bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold
                               shadow hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all"
                  >
                    Xem Sản Phẩm
                  </a>
                  <a
                    href="#contact"
                    onClick={handleNavClick("#contact")}
                    className="flex-1 inline-flex justify-center items-center px-4 py-3 rounded-lg
                               bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                               text-gray-800 dark:text-gray-200 font-semibold
                               hover:border-orange-500 dark:hover:border-orange-400
                               hover:text-orange-600 dark:hover:text-orange-400
                               shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all"
                  >
                    Liên Hệ
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}
