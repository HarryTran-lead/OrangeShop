import React from 'react'


export default function Footer(){
return (
<footer id="contact" className="bg-gray-100 pt-16">
<div className="container grid md:grid-cols-4 gap-10">
<div>
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-brand text-white grid place-items-center font-bold">CL</div>
<span className="font-semibold">CamLanh</span>
</div>
<p className="mt-4 text-sm text-gray-600">Sản phẩm từ cam – tươi, sạch, giao nhanh. Đặt hàng online và nhận trong ngày.</p>
<div className="mt-4 flex gap-3 text-gray-500">
<a href="#">Facebook</a>
<a href="#">TikTok</a>
<a href="#">Instagram</a>
</div>
</div>
<div>
<h5 className="font-semibold">Liên hệ</h5>
<ul className="mt-4 space-y-2 text-sm text-gray-600">
<li>Quận 10, TP.HCM</li>
<li>Thời gian: 8:00–22:00</li>
<li>Điện thoại: 090 000 0000</li>
</ul>
</div>
<div>
<h5 className="font-semibold">Liên kết</h5>
<ul className="mt-4 space-y-2 text-sm text-gray-600">
<li><a href="#menu">Sản phẩm</a></li>
<li><a href="#services">Dịch vụ</a></li>
<li><a href="#offers">Ưu đãi</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold">Instagram Gallery</h5>
<div className="mt-4 grid grid-cols-3 gap-2">
{Array.from({length:6}).map((_,i)=> (
<img key={i} className="h-20 w-full object-cover rounded" src={`https://picsum.photos/seed/orange${i}/200/200`} />
))}
</div>
</div>
</div>
<div className="mt-10 border-t border-gray-200">
<div className="container py-6 text-sm text-gray-500 flex items-center justify-between">
<div>© 2025 CamLanh. All rights reserved.</div>
<div className="flex gap-4">
<a href="#">Chính sách bảo mật</a>
<a href="#">Điều khoản</a>
</div>
</div>
</div>
</footer>
)
}