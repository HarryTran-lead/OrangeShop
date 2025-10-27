import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Clock,
  Phone,
  Mail,
} from "lucide-react";

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path
        d="M30 9c2.2 3.1 4.9 5 9 5v6c-3.7 0-7.1-1.3-9-3v13.2c0 6.4-5.2 11.6-11.6 11.6S6 36.6 6 30.2c0-6.4 5.2-11.6 11.6-11.6 1 0 2 .1 3 .4v6.5a6 6 0 0 0-3-.9 5.6 5.6 0 1 0 5.6 5.6V6h6.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const socials = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "X (Twitter)", icon: Twitter, href: "#" },
    { name: "TikTok", icon: TikTokIcon, href: "#" },
  ];

  const LinkItem = ({ href, children }) => (
    <a
      href={href}
      className="inline-flex items-center text-sm text-slate-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400 transition-colors"
    >
      {children}
    </a>
  );

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-orange-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-slate-700 dark:text-gray-300 pt-12 pb-6"
    >
      {/* background orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* GRID: mobile 1, sm 2, lg 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-40 mb-8 sm:mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white shadow-lg shadow-orange-500/20 font-bold text-xl">
                CL
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">
                  Cam Lành
                </div>
                <div className="text-xs font-medium text-orange-600 dark:text-orange-400">
                  Triết lý sống xanh
                </div>
              </div>
            </div>

            <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-600 dark:text-gray-400">
              Sản phẩm từ cam – tươi, sạch, bền vững. Nơi quả cam trở thành biểu
              tượng của sự hài hòa giữa thiên nhiên, khoa học và triết lý nhân
              sinh.
            </p>

            <div className="flex flex-wrap gap-3">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="group grid h-10 w-10 place-items-center rounded-xl bg-white/70 ring-1 ring-slate-200 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:ring-orange-500/40 dark:bg-white/5 dark:ring-white/10 transition-all duration-300"
                >
                  <Icon className="h-5 w-5 text-slate-500 group-hover:text-white dark:text-gray-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Khám phá + Hỗ trợ (2 cột con) */}
          <div className="grid grid-cols-2 gap-8 sm:gap-32">
            {/* Khám phá */}
            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Khám Phá
              </h4>
              <ul className="space-y-3">
                <li>
                  <LinkItem href="#hero">Trang Chủ</LinkItem>
                </li>
                <li>
                  <LinkItem href="#products">Sản Phẩm</LinkItem>
                </li>
                <li>
                  <LinkItem href="#philosophy">Triết Lý</LinkItem>
                </li>
                <li>
                  <LinkItem href="#testimonials">Đánh Giá</LinkItem>
                </li>
              </ul>
            </div>

            {/* Hỗ trợ */}
            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Hỗ Trợ
              </h4>
              <ul className="space-y-3">
                <li>
                  <LinkItem href="#">Chính Sách</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Điều Khoản</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Vận Chuyển</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">FAQ</LinkItem>
                </li>
              </ul>
            </div>
          </div>

          {/* Liên hệ */}
          <div className="sm:ml-10">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Liên Hệ
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="group flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span className="text-slate-600 dark:text-gray-400 group-hover:text-slate-800 dark:group-hover:text-gray-300 transition-colors">
                  Quận 9, TP.HCM
                </span>
              </li>
              <li className="group flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span className="text-slate-600 dark:text-gray-400 group-hover:text-slate-800 dark:group-hover:text-gray-300 transition-colors">
                  8:00 - 22:00 hàng ngày
                </span>
              </li>
              <li className="group flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-orange-600 dark:text-orange-400" />
                <a
                  href="tel:0900000000"
                  className="text-slate-600 dark:text-gray-400 group-hover:text-slate-800 dark:group-hover:text-gray-300 transition-colors"
                >
                  090 000 0000
                </a>
              </li>
              <li className="group flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-orange-600 dark:text-orange-400" />
                <a
                  href="mailto:hello@camlanh.vn"
                  className="text-slate-600 dark:text-gray-400 group-hover:text-slate-800 dark:group-hover:text-gray-300 transition-colors"
                >
                  hello@camlanh.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 dark:border-white/10 pt-4 text-sm text-slate-500 dark:text-gray-500 md:flex-row">
          <div>
            © 2025{" "}
            <span className="font-medium text-orange-600 dark:text-orange-400">
              Cam Lành
            </span>
            . Crafted with love in Vietnam 🇻🇳
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Chính Sách Bảo Mật
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href="#"
              className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              Điều Khoản Sử Dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
