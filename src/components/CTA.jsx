export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Bắt Đầu Hành Trình Xanh Của Bạn
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Đặt hàng ngay hôm nay và trải nghiệm triết lý sống bền vững cùng Cam
          Lành
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#products"
            className="px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            Xem Sản Phẩm
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-orange-700 text-white rounded-xl font-semibold hover:bg-orange-800 transition-all"
          >
            Liên Hệ Tư Vấn
          </a>
        </div>
      </div>
    </section>
  );
}
