import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import RevealOnView from "./RevealOnView";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { dishes } from "../data/data";

export default function Products() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="products" className="py-16 sm:py-20 dark:bg-gray-900/90">
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
              <ProductCard product={p} onDetails={() => setSelected(p)} />
            </RevealOnView>
          ))}
        </div>
      </div>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
