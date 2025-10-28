// Products.jsx
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import SectionTitle from "./SectionTitle";
import RevealOnView from "./RevealOnView";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import ContactModal from "./ContactModal";
import { dishes } from "../data/data";

export default function Products() {
  const [selected, setSelected] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  // Thông tin liên hệ dùng chung cho ContactModal
  const EMAIL = {
    address: "thinhtdse182756@fpt.edu.vn", // hiển thị & gửi đến cùng địa chỉ
    subject: "Đặt hàng Cam Lành",
    bodyLines: [
      "Chào Shop Cam Lành,",
      "",
      "Tôi muốn đặt hàng:",
      "- Mứt vỏ cam 100g x __",
      "- Trà cam sấy 100g x __",
      "- Túi treo đuổi côn trùng 30g x __",
      "",
      "Thông tin nhận hàng:",
      "- Họ tên:",
      "- SĐT:",
      "- Địa chỉ:",
      "- Ghi chú:",
      "",
      "Xin cảm ơn!",
    ],
  };

  const LINKS = {
    messenger: "https://m.me/thinh.tran.218677",
    zalo: "https://zalo.me/0967469298",
    sms: "sms:+84967469298?body=Chao%20Cam%20Lanh%2C%20toi%20muon%20dat%20hang",
    tel: "tel:+84967469298",
    hotline: "0967 469 298",

    //  cung cấp thông tin để ContactModal tự build Gmail compose/deep link
    emailAddress: EMAIL.address,
    emailSubject: EMAIL.subject,
    emailBodyLines: EMAIL.bodyLines,
    emailText: EMAIL.address, // hiển thị cùng địa chỉ
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openContact = () => {
    setContactOpen(true);
    toast.success("Đã mở kênh liên hệ — chọn Messenger/Zalo/SMS để đặt hàng", {
      duration: 2000,
      icon: "🍊",
    });
  };

  return (
    <section id="products" className="py-16 sm:py-20 dark:bg-gray-900/90">
      <Toaster position="top-center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Bộ Sản Phẩm Đặc Biệt"
          title={
            <>
              Tinh Hoa Từ{" "}
              <span className="text-orange-600 dark:text-orange-400">
                Quả Cam
              </span>
            </>
          }
          subtitle="Mỗi sản phẩm là hành trình từ vườn cam đến tay bạn, qua quy trình chế biến thủ công với tâm huyết."
          titleClassName="text-[2.1rem] leading-tight md:text-5xl lg:text-5xl"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((p, i) => (
            <RevealOnView key={p.id} type={i % 2 ? "slideLeft" : "slideRight"}>
              <ProductCard
                product={p}
                onDetails={() => setSelected(p)}
                onOrder={openContact}
              />
            </RevealOnView>
          ))}
        </div>
      </div>

      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
          onOrder={openContact}
        />
      )}

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        LINKS={LINKS}
      />
    </section>
  );
}
