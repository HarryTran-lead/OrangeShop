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

  // LINKS dùng chung cho ContactModal
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
      {/* Toaster cho toàn section (có thể đặt ở App root) */}
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
          subtitle="Mỗi sản phẩm là hành trình từ vườn cam VietGAP đến tay bạn, qua quy trình chế biến thủ công với tâm huyết."
          titleClassName="text-[2.1rem] leading-tight md:text-5xl lg:text-5xl"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((p, i) => (
            <RevealOnView key={p.id} type={i % 2 ? "slideLeft" : "slideRight"}>
              <ProductCard
                product={p}
                onDetails={() => setSelected(p)}
                onOrder={openContact} // <-- mở ContactModal từ card
              />
            </RevealOnView>
          ))}
        </div>
      </div>

      {/* Modal chi tiết */}
      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
          onOrder={openContact} // <-- mở ContactModal từ modal chi tiết
        />
      )}

      {/* Modal liên hệ đặt hàng */}
      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        LINKS={LINKS}
      />
    </section>
  );
}
