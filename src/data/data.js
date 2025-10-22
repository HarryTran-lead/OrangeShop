import { Award, Package, Clock, Shield } from "lucide-react";
export const features = [
  {
    icon: "🍊",
    title: "Cam tươi VietGAP",
    desc: "Nguồn cam chuẩn chất lượng, truy xuất được nông trại.",
  },
  {
    icon: "🧼",
    title: "Đóng gói sạch",
    desc: "Rửa – sấy – đóng gói tiêu chuẩn, an toàn cho gia đình.",
  },
];

export const dishes = [
  {
    id: 1,
    name: "Cam tươi loại 1 (1kg)",
    price: 45000,
    rating: 4.8,
    img: "/images/cam-tuoi.jpg",
    description:
      "Cam tươi VietGAP loại 1 được tuyển chọn theo lô tại vườn, độ chín 80–90% để đảm bảo vị ngọt thanh và hàm lượng vitamin C tối ưu. Vỏ dày vừa phải, tép cam mọng nước, cân bằng giữa vị chua nhẹ và hậu ngọt dễ chịu. Phù hợp ăn tươi, ép lạnh, làm salad trái cây hoặc ướp sốt cam cho các món nướng.",
    videoUrl: "https://www.youtube.com/embed/k55yQv8c8r0",
    process: [
      "Thu hái chọn lọc theo tiêu chuẩn VietGAP, loại bỏ quả trầy xước hoặc dập cơ học.",
      "Sơ chế tại trạm: phân cỡ, rửa bằng nước ozon, làm ráo, kiểm tra vỏ.",
      "Đóng gói khay thoáng khí, dán tem truy xuất nguồn gốc lô – vườn – ngày hái.",
      "Bảo quản mát 8–12°C trong quá trình vận chuyển để giữ độ tươi.",
    ],
    steps: [
      "Rửa nhanh dưới vòi nước trước khi ăn/ép, không ngâm lâu để tránh thất thoát vitamin.",
      "Ép lạnh 100% hoặc pha 70% nước cam + 30% soda, thêm vài lá bạc hà cho vị tươi.",
      "Làm salad: trộn tép cam, xà lách, hạnh nhân rang, sốt chua ngọt nhẹ.",
    ],
    tips: [
      "Bảo quản nơi thoáng mát 18–22°C; nếu tủ mát, để ngăn rau 7–10 ngày.",
      "Tránh để chung quá lâu với chuối/táo (phát ethylene làm cam nhanh chín).",
      "Nếu cần ướp sốt, dùng cả vỏ cam bào mịn (zest) để tăng mùi tinh dầu tự nhiên.",
    ],
  },
  {
    id: 2,
    name: "Mứt vỏ cam 100g",
    price: 52000,
    rating: 4.7,
    img: "/images/mut-vo-cam.jpg",
    description:
      "Mứt vỏ cam thủ công giữ trọn hương tinh dầu tự nhiên: dẻo mềm, ngọt vừa, the nhẹ ở cuối vị. Sên nhiệt thấp để bảo toàn mùi thơm đặc trưng, hoàn hảo cho trà ấm, bánh mì bơ, yogurt hoặc làm topping bánh ngọt.",
    videoUrl: "https://www.youtube.com/embed/xnL2nI0ZWMQ",
    process: [
      "Bào vỏ cam, loại bỏ phần cùi trắng đắng; chần – xả nhiều lần để dịu vị.",
      "Sên với đường mía và một ít mạch nha ở nhiệt thấp 45–55 phút.",
      "Sấy thoáng 50–55°C để ổn định độ ẩm và độ bóng tự nhiên.",
      "Đóng gói cùng gói hút ẩm thực phẩm, dán nhãn ngày sản xuất.",
    ],
    steps: [
      "Dùng trực tiếp với trà nóng: mỗi ly 1–2 lát mứt, khuấy nhẹ cho thơm.",
      "Phết mứt + bơ lạt lên bánh mì nướng, thêm hạt óc chó rang giòn.",
      "Làm nhân/ topping bánh: cắt hạt lựu, trộn cùng kem phô mai hoặc yogurt.",
    ],
    tips: [
      "Đậy kín ngay sau khi mở; ngon nhất trong 10–14 ngày.",
      "Tránh nơi ẩm/ánh nắng trực tiếp; không dùng muỗng ướt khi lấy mứt.",
      "Nếu muốn ít ngọt hơn, rửa nhanh lát mứt qua nước ấm rồi thấm khô trước khi pha trà.",
    ],
  },
  {
    id: 3,
    name: "Trà cam sấy 100g",
    price: 59000,
    rating: 4.6,
    img: "/images/tra-cam-say.jpg",
    description:
      "Trà cam sấy nguyên lát, màu vàng hổ phách đẹp mắt, hương cam ấm dịu. Công nghệ sấy lạnh giúp giữ lại flavonoid và vitamin một cách tối ưu. Dễ pha, hợp khẩu vị cả nóng lẫn lạnh, đặc biệt khi phối cùng quế – mật ong – gừng.",
    videoUrl: "https://www.youtube.com/embed/3p0k5m5e3dE",
    process: [
      "Rửa – thái lát 2–3mm, ngâm nước muối loãng 5–7 phút rồi để ráo.",
      "Sấy lạnh 45–50°C trong 10–14 giờ để giữ màu và hương.",
      "Khử ẩm lần cuối, đóng túi zip kèm gói hút ẩm thực phẩm.",
    ],
    steps: [
      "Pha nóng: 1–2 lát/250–300ml nước 85–90°C, ủ 3–5 phút.",
      "Pha lạnh: 1–2 lát + mật ong + đá + soda cho vị tươi mát.",
      "Phối vị: thêm thanh quế, vài lát gừng để tăng ấm cơ thể.",
    ],
    tips: [
      "Luôn đóng kín túi sau khi dùng; tránh ẩm để lát cam không mềm lại.",
      "Không ngâm nước sôi 100°C quá lâu vì dễ làm đắng phần vỏ.",
      "Có thể bẻ nhỏ lát cam khi cần hãm nhanh trong bình giữ nhiệt.",
    ],
  },
  {
    id: 4,
    name: "Túi treo đuổi muỗi 30g",
    price: 39000,
    rating: 4.5,
    img: "/images/tui_treo.jpg",
    description:
      "Túi treo từ vỏ cam sấy khô phối thảo mộc (sả, quế), tỏa hương dịu nhẹ và hỗ trợ xua đuổi côn trùng. An toàn cho gia đình có trẻ nhỏ và thú cưng, phù hợp tủ quần áo, bếp, giày dép hoặc góc làm việc.",
    videoUrl: "https://www.youtube.com/embed/6tZ9z7YJfWE",
    process: [
      "Tách vỏ cam, phơi/sấy khô đến độ ẩm ổn định.",
      "Trộn bột vỏ cam cùng sả/quế; bổ sung lượng nhỏ tinh dầu cam chưng cất.",
      "Đóng túi lưới cotton thoáng khí, test thời gian khuếch tán mùi.",
    ],
    steps: [
      "Treo 1 túi cho diện tích 1–2m² (tủ, kệ giày, ngăn kéo).",
      "Sau 1–2 tuần, nhỏ 1–2 giọt tinh dầu cam để làm mới hương.",
      "Thay túi mới sau 6–8 tuần để hiệu quả ổn định.",
    ],
    tips: [
      "Tránh đặt sát bề mặt sơn PU bóng hoặc vật liệu nhạy cảm với tinh dầu.",
      "Bảo quản gói chưa dùng ở nơi khô, kín, tránh ánh nắng trực tiếp.",
      "Nếu mùi quá mạnh với không gian nhỏ, mở túi giảm bớt lượng trong vài ngày đầu.",
    ],
  },
  {
    id: 5,
    name: "Marmalade cam (hũ 200g)",
    price: 79000,
    rating: 4.7,
    img: "/images/marmalade.jpg",
    description:
      "Marmalade cam vị ngọt thanh, chút the nhẹ từ vỏ cam, kết cấu sệt vừa có tép vỏ rõ ràng. Rất hợp phết bánh mì – scone, làm sốt salad trái cây, sốt cam cho thịt nướng hoặc pha trà cam mật nhanh chóng.",
    videoUrl: "https://www.youtube.com/embed/9rXg8mYlZ0I",
    process: [
      "Nấu theo tỉ lệ đường thấp, tận dụng pectin tự nhiên từ vỏ cam.",
      "Khử bọt kỹ, chiết rót nóng và thanh trùng nhẹ để ổn định.",
      "Đóng hũ thuỷ tinh, dán tem date/lot, kiểm soát Brix & pH theo mẻ.",
    ],
    steps: [
      "Phết trực tiếp lên bánh mì/scone, thêm bơ lạt để cân vị.",
      "Làm sốt salad: marmalade + dầu olive + muối tiêu + giấm táo.",
      "Pha nhanh: 1 muỗng marmalade + 150ml nước ấm, khuấy đều.",
    ],
    tips: [
      "Bảo quản mát sau khi mở, dùng trong 20–30 ngày.",
      "Luôn dùng muỗng khô, sạch để tránh nhiễm ẩm và mốc.",
      "Nếu muốn loãng hơn, có thể khuấy với chút nước ấm ngay trong hũ.",
    ],
  },
  {
    id: 6,
    name: "Combo trà cam + mứt",
    price: 109000,
    rating: 4.9,
    img: "/images/combo-tra-mut.jpg",
    description:
      "Combo tiết kiệm gồm trà cam sấy nguyên lát và mứt vỏ cam thủ công – đa dụng cho gia đình, văn phòng và làm quà tặng. Dễ pha chế nhiều kiểu: trà nóng, trà lạnh, soda cam mật; dùng kèm bánh mì, bánh ngọt, yogurt.",
    videoUrl: "https://www.youtube.com/embed/4m0c9s5bE1M",
    process: [
      "Lát cam sấy lạnh đến độ ẩm ≤10% để bảo toàn hương và màu.",
      "Mứt vỏ cam sên nhiệt thấp, đóng gói chống ẩm riêng từng loại.",
      "Đóng combo hộp giấy kraft, tem niêm, tờ hướng dẫn pha – dùng.",
    ],
    steps: [
      "Trà nóng: 1–2 lát cam + 200–250ml nước 90°C + 1 thìa mứt, ủ 3–5 phút.",
      "Đồ lạnh: thêm đá và soda cho vị tươi; trang trí lát cam mỏng.",
      "Bữa sáng: bánh mì bơ + mứt; tráng miệng với yogurt + mứt cắt sợi.",
    ],
    tips: [
      "Bảo quản nơi khô ráo; luôn đóng kín túi trà và hũ mứt sau khi dùng.",
      "Tránh ẩm cao để lát cam không mềm lại; dùng gói hút ẩm kèm theo.",
      "Combo phù hợp làm quà Tết/sinh nhật/housewarming – có thể kèm thiệp.",
    ],
  },
];

export const team = [
  { name: "Minh Anh", role: "Sản xuất", img: "/images/cam/team-1.jpg" },
  { name: "Hoàng Long", role: "Pha chế", img: "/images/cam/team-2.jpg" },
  { name: "Thảo Nhi", role: "Chất lượng", img: "/images/cam/team-3.jpg" },
  { name: "Bảo Nam", role: "Vận hành", img: "/images/cam/team-4.jpg" },
];

export const posts = [
  {
    id: 1,
    title: "Cách làm mứt vỏ cam dẻo, ít ngọt",
    date: "02 Jan 2025",
    img: "/images/cam/blog-1.jpg",
  },
  {
    id: 2,
    title: "Pha trà cam sấy thơm ấm ngày mưa",
    date: "22 Dec 2024",
    img: "/images/cam/blog-2.jpg",
  },
  {
    id: 3,
    title: "Tinh dầu cam đuổi muỗi dùng ra sao?",
    date: "10 Dec 2024",
    img: "/images/cam/blog-3.jpg",
  },
];

// (Giữ products nếu bạn còn dùng ở chỗ khác)
export const products = [
  {
    id: 1,
    name: "Mứt Vỏ Cam Thủ Công",
    price: 85000,
    rating: 5,
    img: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=600&h=400&fit=crop",
    desc: "Tinh túy từ vỏ cam tươi, chế biến thủ công",
  },
  {
    id: 2,
    name: "Trà Cam Sấy Khô",
    price: 120000,
    rating: 5,
    img: "https://images.unsplash.com/photo-1597318112647-f0b2f3d0f6db?w=600&h=400&fit=crop",
    desc: "Hương vị thuần khiết, giàu vitamin C",
  },
  {
    id: 3,
    name: "Túi Treo Đuổi Côn Trùng",
    price: 45000,
    rating: 5,
    img: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=600&h=400&fit=crop",
    desc: "Thân thiện môi trường, hiệu quả bền vững",
  },
];

export const philosophyValues = [
  {
    icon: "Leaf",
    title: "Hài Hòa Tự Nhiên",
    desc: "Tôn trọng quy luật của tự nhiên, khai thác nguồn cam một cách bền vững và nhân văn. Mỗi bước trong quy trình đều hướng đến sự cân bằng giữa con người và môi trường sinh thái.",
  },
  {
    icon: "Heart",
    title: "Lao Động Chân Chính",
    desc: "Mỗi sản phẩm là kết tinh của bàn tay, khối óc và trái tim người làm cam. Chúng tôi đề cao giá trị của lao động sáng tạo, trung thực và tận tâm trong từng công đoạn sản xuất.",
  },
  {
    icon: "Recycle",
    title: "Tái Tạo Giá Trị",
    desc: "Biến phế phẩm thành tài nguyên mới, khơi dậy tư duy biện chứng về vòng đời sản phẩm. Mỗi phần của quả cam đều được tái sử dụng, mang đến giá trị mới cho con người và thiên nhiên.",
  },
];

export const whyChoose = [
  {
    icon: "Award",
    title: "VietGAP Chứng Nhận",
    desc: "Cam tươi đạt chuẩn an toàn thực phẩm quốc gia",
  },
  {
    icon: "Package",
    title: "Chế Biến Sạch",
    desc: "Quy trình khép kín, không phẩm màu tổng hợp",
  },
  {
    icon: "Clock",
    title: "Giao Trong Ngày",
    desc: "Đặt hàng sáng, nhận hàng chiều tại TP.HCM",
  },
  {
    icon: "Shield",
    title: "Cam Kết 100%",
    desc: "Hoàn tiền nếu không hài lòng về chất lượng",
  },
];
export const testimonials = [
  {
    name: "Lan Anh",
    role: "Nhân viên văn phòng",
    text: "Mứt vỏ cam dẻo thơm, không quá ngọt. Trà cam sấy dễ uống, ấm bụng. Đặt sáng là chiều có, đóng gói rất sạch.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Minh Đức",
    role: "Kiến trúc sư",
    text: "Túi treo đuổi côn trùng thực sự hiệu quả. Không độc hại, an toàn cho trẻ nhỏ. Ủng hộ triết lý xanh của Cam Lành!",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
];
