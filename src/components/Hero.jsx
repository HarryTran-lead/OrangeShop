import React from 'react'


export default function Hero(){
return (
<section className="section relative overflow-hidden">
<div className="absolute -right-40 -top-40 size-[500px] rounded-full bg-brand-light blur-3xl opacity-70"/>
<div className="container grid md:grid-cols-2 gap-10 items-center">
<div>
<p className="kicker">Cam tươi mỗi ngày</p>
<h1 className="text-5xl md:text-6xl leading-tight mt-2">Ngọt lành trong <br/> từng múi cam</h1>
<p className="mt-4 text-gray-600 max-w-md">Cam VietGAP, chế biến sạch – từ cam tươi đến mứt vỏ cam, trà cam sấy và túi treo đuổi côn trùng. Giao nhanh trong ngày.</p>
<div className="mt-8 flex items-center gap-4">
<a href="#menu" className="btn-primary">Mua ngay</a>
<a href="#about" className="btn-outline">Tìm hiểu</a>
</div>
</div>
<div className="relative">
<img className="w-full max-w-lg mx-auto rounded-3xl shadow-soft" src="/images/cam-tuoi.jpg" alt="Sản phẩm cam" onError={(e)=>{e.currentTarget.src='https://placehold.co/1000x700/f97316/ffffff?text=Cam+Lanh'}}/>
<img className="hidden md:block absolute -left-8 -top-8 w-24 rotate-12" src="/images/slice-1.jpg" alt="orange slice"/>
<img className="hidden md:block absolute -right-6 -bottom-8 w-28 -rotate-6" src="/images/slice-2.jpg" alt="orange slice"/>
</div>
</div>
</section>
)
}