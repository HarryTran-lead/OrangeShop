import React from 'react'


export default function Navbar(){
return (
<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
<div className="container flex items-center justify-between py-4">
<a className="flex items-center gap-2" href="#">
<div className="h-9 w-9 rounded-lg bg-brand text-white grid place-items-center font-bold">CL</div>
<span className="font-semibold">CamLanh</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a href="#menu" className="hover:text-brand">Sản phẩm</a>
<a href="#services" className="hover:text-brand">Dịch vụ</a>
<a href="#offers" className="hover:text-brand">Ưu đãi</a>
<a href="#contact" className="hover:text-brand">Liên hệ</a>
</nav>
<div className="flex items-center gap-3">
<button className="btn-outline hidden sm:inline-flex">Đăng nhập</button>
<button className="btn-primary">Đăng ký</button>
</div>
</div>
</header>
)
}