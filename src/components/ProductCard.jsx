import { Star, Info, ShoppingCart } from "lucide-react";

const formatVND = (n) => new Intl.NumberFormat("vi-VN").format(n);

export default function ProductCard({ product, onDetails, onOrder }) {
  const full = Math.round(product.rating || 5);
  const empty = Math.max(0, 5 - full);

  return (
    <div
      className="
        group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden
        shadow-md hover:shadow-2xl
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        hover:-translate-y-1 hover:border-orange-100 dark:hover:border-orange-900/30
        border border-transparent
      "
    >
      <div className="relative overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Bán chạy
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="text-xl font-semibold text-orange-600 dark:text-orange-400 mb-3">
          {formatVND(product.price)}₫
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={onDetails}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-700
                         text-sm font-semibold hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400
                         transition-colors"
            >
              <Info className="w-4 h-4" />
              Xem chi tiết
            </button>

            <button
              onClick={onOrder}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-gradient-to-r from-orange-600 to-orange-500 text-white
                         text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              Đặt Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
