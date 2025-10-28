import { Award, Package, Clock, Shield } from "lucide-react";
export const features = [
  {
    icon: "🍊",
    title: "Cam tươi chọn lọc",
    desc: "Nguồn cam đạt chuẩn chất lượng, truy xuất rõ nông trại.",
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
    name: "Mứt vỏ cam 100g",
    price: 35000,
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
    id: 2,
    name: "Trà cam sấy 100g",
    price: 25000,
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
    id: 3,
    name: "Tinh dầu cam thiên nhiên 20ml",
    price: 39000,
    rating: 4.7,
    img: "/images/tinh-dau-cam.jpg",
    description:
      "Tinh dầu cam ép lạnh 100% từ vỏ cam tươi, hương thơm ngọt dịu giúp thư giãn, khử mùi và đuổi côn trùng nhẹ tự nhiên. Phù hợp cho máy khuếch tán, xông phòng, nhỏ vào túi thơm hoặc pha loãng để lau sàn.",
    videoUrl: "https://www.youtube.com/embed/6tZ9z7YJfWE",
    process: [
      "Thu gom vỏ cam tươi, rửa sạch và phơi ráo nhẹ.",
      "Ép lạnh để giữ nguyên mùi hương và hoạt chất tự nhiên (limonene).",
      "Lọc tinh dầu, kiểm tra độ tinh khiết và đóng lọ thủy tinh tối màu 10ml.",
    ],
    steps: [
      "Nhỏ 3–5 giọt vào máy khuếch tán hoặc đèn xông tinh dầu.",
      "Pha 2–3 giọt với 100ml nước lau sàn để khử mùi, đuổi muỗi.",
      "Thấm 1–2 giọt lên bông gòn, đặt trong tủ hoặc xe hơi để giữ hương.",
    ],
    tips: [
      "Tránh để tinh dầu tiếp xúc trực tiếp với da chưa pha loãng.",
      "Bảo quản nơi thoáng mát, tránh ánh nắng trực tiếp.",
      "Đậy kín nắp sau khi dùng để hạn chế bay hơi tinh dầu.",
    ],
  },

  {
    id: 4,
    name: "Combo trà cam + mứt",
    price: 49000,
    rating: 4.9,
    img: "/images/combo-tra-mut.jpg",
    description:
      "Combo tiết kiệm gồm trà cam sấy nguyên lát và mứt vỏ cam thủ công – đa dụng cho gia đình, văn phòng và làm quà tặng. Giá ưu đãi hơn 10–15% so với mua lẻ từng món.",
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
  {
  id: 5,
  name: "Combo Trà Cam + Tinh Dầu",
  price: 64000,
  rating: 4.8,
  img: "/images/combo-tra-tinhdau.jpg",
  description:
    "Sự kết hợp hài hòa giữa Trà vỏ cam sấy thanh mát và Tinh dầu cam nguyên chất thư giãn. Combo giúp thanh lọc cơ thể, cải thiện giấc ngủ và lan tỏa hương thơm tự nhiên cho không gian sống.",
  videoUrl: "https://www.youtube.com/embed/1v82yJzE5zE",
  process: [
    "Chọn cam tươi sạch, rửa kỹ, tách vỏ và sấy lạnh giữ nguyên tinh chất.",
    "Chiết ép tinh dầu từ vỏ cam tươi bằng phương pháp chưng cất hơi nước.",
    "Đóng gói trong lọ thủy tinh và túi trà bảo quản kín, đảm bảo chất lượng hương vị.",
  ],
  steps: [
    "Pha 1–2 lát trà cam với nước ấm 80–90°C, ủ trong 3–5 phút.",
    "Khuếch tán 3–5 giọt tinh dầu cam trong máy xông hoặc đèn aroma.",
    "Sử dụng mỗi ngày để cơ thể và tâm trí được thư giãn, tinh thần sảng khoái.",
  ],
  tips: [
    "Dùng trà cam buổi sáng giúp thanh lọc và tỉnh táo nhẹ nhàng.",
    "Kết hợp tinh dầu cam vào buổi tối giúp dễ ngủ và giảm căng thẳng.",
    "Bảo quản sản phẩm nơi khô ráo, tránh ánh nắng trực tiếp.",
  ],
},

  {
    id: 6,
    name: "Combo Trà + Mứt + Tinh Dầu",
    price: 89000,
    rating: 5.0,
    img: "/images/combo-3.jpg",
    description:
      "Bộ quà tặng 3 trong 1 từ cam tự nhiên gồm: Trà vỏ cam sấy, Mứt cam dẻo vị thanh, và Tinh dầu cam nguyên chất. Mỗi sản phẩm đều được chế biến thủ công, lưu giữ hương vị và năng lượng tươi mới từ cam Việt.",
    videoUrl: "https://www.youtube.com/embed/rsvRzYwM8fE",
    process: [
      "Chọn cam tươi, tách vỏ – sấy lạnh bảo toàn hương và màu.",
      "Nấu mứt cam dẻo kết hợp mật ong và một chút gừng để cân vị.",
      "Ép lạnh vỏ cam tươi để chắt lọc tinh dầu nguyên chất, đóng lọ thủy tinh nhỏ.",
    ],
    steps: [
      "Dùng trà cam mỗi sáng để thanh lọc cơ thể, tăng vitamin C tự nhiên.",
      "Thưởng thức mứt cam kèm trà nóng, hoặc dùng làm topping bánh, yogurt.",
      "Khuếch tán vài giọt tinh dầu cam giúp thư giãn và khử mùi không gian.",
    ],
    tips: [
      "Phù hợp làm quà biếu tinh tế cho bạn bè, thầy cô hoặc đối tác.",
      "Bảo quản trà và mứt nơi khô ráo; tránh ánh nắng trực tiếp.",
      "Đậy kín lọ tinh dầu sau khi dùng để hương không bay hơi.",
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
    icon: "Star",
    title: "Chất Lượng Tuyển Chọn",
    desc: "Nguyên liệu cam được chọn từ những vườn đạt chuẩn, đảm bảo độ chín, hương vị và độ ngọt tự nhiên cao nhất.",
  },
  {
    icon: "Package",
    title: "Chế Biến Sạch",
    desc: "Quy trình khép kín, không phẩm màu tổng hợp, giữ trọn hương vị tự nhiên và dinh dưỡng của vỏ cam.",
  },
  {
    icon: "Clock",
    title: "Giao Trong Ngày",
    desc: "Đặt buổi sáng – nhận buổi chiều tại TP.HCM, bảo đảm tươi mới với quy trình đóng gói giữ chất lượng.",
  },
  {
    icon: "Shield",
    title: "Cam Kết 100%",
    desc: "Hoàn tiền nếu không hài lòng về chất lượng, đổi trả nhanh gọn, hỗ trợ tận tâm.",
  },
  {
    icon: "Leaf",
    title: "Minh Bạch Nguồn Gốc",
    desc: "Truy xuất nông trại, ngày hái và lô sản xuất rõ ràng, minh bạch từ trang trại tới bàn ăn.",
  },
  {
    icon: "Recycle",
    title: "Bao Bì Xanh",
    desc: "Ưu tiên vật liệu tái chế/dễ phân hủy, giảm thiểu nhựa dùng một lần, thân thiện môi trường.",
  },
  {
    icon: "Truck",
    title: "Giao Liên Tỉnh",
    desc: "Đóng gói tiêu chuẩn lạnh/khô phù hợp, gửi nhanh đến các tỉnh lân cận, hạn chế dập nát.",
  },
  {
    icon: "Users",
    title: "Hỗ Trợ Tận Tâm",
    desc: "Tư vấn khẩu vị – combo phù hợp, hỗ trợ đổi/trả trong 24–48 giờ với quy trình đơn giản.",
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
