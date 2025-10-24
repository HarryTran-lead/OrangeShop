import { useState } from "react";
import {
  ChevronDown,
  MessageCircleQuestion,
  ShieldCheck,
  Truck,
} from "lucide-react";
import BrandQR from "./BrandQR";
import SectionTitle from "./SectionTitle"; // <- import component tiêu đề dùng lại

const faqs = [
  {
    icon: <MessageCircleQuestion className="w-4 h-4 text-orange-500" />,
    q: "Tại sao tôi nên điền khảo sát này? Lợi ích gì cho khách hàng thân thiết của Cam Lành?",
    a: "Khảo sát giúp Cam Lành hiểu khẩu vị và trải nghiệm của bạn để cải thiện chất lượng sản phẩm, dịch vụ và thiết kế ưu đãi cá nhân hoá (voucher, combo phù hợp).",
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-orange-500" />,
    q: "Dữ liệu khảo sát có bảo mật không?",
    a: "Chúng tôi chỉ dùng dữ liệu cho mục đích nội bộ. Khi phân tích, dữ liệu được ẩn danh và không chia sẻ cho bên thứ ba.",
  },
  {
    icon: <Truck className="w-4 h-4 text-orange-500" />,
    q: "Điền khảo sát có ưu đãi gì không?",
    a: "Bạn sẽ nhận mã ưu đãi cho đơn tiếp theo và được cập nhật sớm về sản phẩm mới/đợt cam ngon.",
  },
];

// 1 item FAQ
function FAQItem({ item, open, onToggle }) {
  return (
    <div className="rounded-xl border border-orange-100/70 dark:border-orange-900/30 bg-white/70 dark:bg-gray-700/40">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          {item.icon}
          <span className="font-semibold">{item.q}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-300">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SurveyQRSection({ id = "survey" }) {
  // cho phép mở nhiều câu: dùng Set các index đang mở
  const [openSet, setOpenSet] = useState(() => new Set());

  const toggleIndex = (idx) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <section
      id={id}
      className="
        py-16 sm:py-20
        bg-gradient-to-b
        from-white via-orange-50/40 to-orange-100/30
        dark:from-gray-900 dark:via-gray-900 dark:to-gray-800
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Tiêu đề dùng SectionTitle */}
        <SectionTitle
          // kicker bạn có thể đổi, hoặc để null nếu không muốn dòng nhỏ uppercase
          kicker="Khảo sát nhanh 1 phút"
          title={
            <>
              Khảo sát trải nghiệm{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Cam Lành
              </span>
            </>
          }
          subtitle="Quét mã để mở biểu mẫu — giúp chúng tôi phục vụ bạn tốt hơn 🍊"
          center={true}
        />

        {/* Grid 2 cột: QR trái, FAQ phải */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* LEFT: QR Card */}
          <div className="h-full">
            <div className="h-full rounded-3xl border border-orange-100/70 dark:border-orange-900/40 bg-white/80 dark:bg-gray-800/60 shadow-xl p-6 flex flex-col items-center justify-center">
              <BrandQR
                url="https://docs.google.com/forms/d/e/1FAIpQLSexkFnACWAgd6u3appdQL1GuGVD0zHBETKDmwc0krfCz2dSgg/viewform"
                size={240}
                logoSrc="/images/bgslice.jpg"
                fileName="khaosat-camlanh.png"
              />
              <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
                Gợi ý: Đặt QR ở quầy/bao bì hoặc chèn vào email xác nhận đơn
                hàng.
              </div>
            </div>
          </div>

          {/* RIGHT: FAQs */}
          <div className="h-full">
            <div className="h-full rounded-3xl border border-orange-100/70 dark:border-orange-900/40 bg-white/80 dark:bg-gray-800/60 shadow-xl p-6 flex flex-col">
              {/* Title block trong card FAQ */}
              <div className="mb-4">
                <p className="inline-flex items-center gap-2 rounded-full bg-orange-100/70 dark:bg-orange-900/20 px-3 py-1 text-xs font-semibold text-orange-700 dark:text-orange-300">
                  Câu hỏi thường gặp
                </p>
                <h4 className="mt-3 text-xl font-semibold">FAQs về khảo sát</h4>
              </div>

              {/* Vùng cuộn với chiều cao cố định */}
              <div className="custom-scrollbar -mr-1 pr-1 overflow-y-auto space-y-3 h-[260px] md:h-[320px] lg:h-[200px]">
                {faqs.map((item, i) => (
                  <FAQItem
                    key={i}
                    item={item}
                    open={openSet.has(i)}
                    onToggle={() => toggleIndex(i)}
                  />
                ))}
              </div>

              {/* CTA dưới cùng */}
              <div className="mt-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 p-[1px]">
                <div className="rounded-xl bg-white/90 dark:bg-gray-900/80 px-4 py-3 flex items-center justify-between">
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    Cần hỗ trợ thêm? Nhắn{" "}
                    <a
                      href="https://m.me/camlanh"
                      className="font-semibold hover:brightness-75 text-orange-600 dark:text-amber-300 hover:underline"
                    >
                      Messenger
                    </a>
                    .
                  </span>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSexkFnACWAgd6u3appdQL1GuGVD0zHBETKDmwc0krfCz2dSgg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold rounded-lg px-3 py-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white hover:shadow-md hover:-translate-y-0.5 transition"
                  >
                    Mở form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
