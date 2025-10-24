import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Download } from "lucide-react";

export default function BrandQR({
  url = "https://docs.google.com/forms/d/e/1FAIpQLSexkFnACWAgd6u3appdQL1GuGVD0zHBETKDmwc0krfCz2dSgg/viewform",
  size = 220,
  logoSrc = "/images/bgslice.jpg",
  fileName = "camlanh-qr.png",
}) {
  const ref = useRef(null);

  const onDownload = () => {
    const canvas = ref.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = fileName;
    link.click();
  };

  // Logo chiếm ~22% cạnh QR → an toàn quét; excavate=true để “đục” nền trắng phía sau logo
  const logoSize = Math.round(size * 0.22);

  return (
    <div className="inline-flex flex-col items-center gap-3">
      <div
        ref={ref}
        className="rounded-2xl p-3 bg-white shadow-lg ring-1 ring-black/5"
        aria-label="QR Form Khảo sát"
      >
        <QRCodeCanvas
          value={url}
          size={size}
          level="M" // M: cân bằng giữa sửa lỗi & mật độ
          includeMargin
          bgColor="#ffffff"
          fgColor="#111827" // gray-900 để tương phản mạnh trên nền trắng
          imageSettings={{
            src: logoSrc,
            height: logoSize,
            width: logoSize,
            excavate: true, // tạo “ô trắng” dưới logo để dễ quét
          }}
        />
      </div>

      <button
        onClick={onDownload}
        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-amber-500 text-white px-3 py-2 text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition"
      >
        <Download className="w-4 h-4" />
        Tải QR (PNG)
      </button>

      <p className="text-xs text-gray-500">Quét để mở khảo sát Cam Lành 🍊</p>
    </div>
  );
}
