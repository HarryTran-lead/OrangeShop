import React from 'react'


export default function Testimonial(){
return (
<section className="section bg-gray-50">
<div className="container grid md:grid-cols-2 gap-10 items-center">
<div>
<h3 className="text-2xl md:text-3xl">Khách hàng nói gì về <span className="text-brand">CamLanh</span></h3>
<p className="mt-4 text-gray-600">“Mứt vỏ cam dẻo thơm, không quá ngọt; trà cam sấy dễ uống, ấm bụng. Đặt sáng là chiều có, đóng gói rất sạch.”</p>
<div className="mt-6 flex items-center gap-3">
<img className="h-10 w-10 rounded-full object-cover" src="/images/cam/avatar-1.jpg" onError={(e)=>{e.currentTarget.src='https://picsum.photos/seed/avatar/80/80'}}/>
<div>
<div className="font-semibold">Lan Anh</div>
<div className="text-sm text-gray-500">Nhân viên văn phòng</div>
</div>
</div>
</div>
<div className="relative">
<img className="w-full max-w-md md:max-w-lg mx-auto rounded-3xl" src="/images/gio-cam.jpg" alt="Giỏ cam" onError={(e)=>{e.currentTarget.src='https://placehold.co/1000x700/f97316/ffffff?text=Gio+cam'}}/>
</div>
</div>
</section>
)
}