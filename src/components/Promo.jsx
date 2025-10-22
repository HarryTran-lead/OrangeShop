import React from 'react'
import { features } from '../data/data.js'


export default function Promo(){
return (
<section className="section">
<div className="container grid md:grid-cols-2 gap-10 items-start">
<div className="space-y-4">
<p className="kicker">Hành trình vị cam</p>
<h2 className="text-3xl md:text-4xl">Bắt đầu hôm nay!</h2>
<p className="text-gray-600">Từ nông trại tới bàn ăn – CamLanh mang đến các sản phẩm từ cam tươi, chế biến sạch, tốt cho sức khoẻ và tiện lợi.</p>
<div className="grid grid-cols-2 gap-4">
{features.map((f,i)=> (
<div key={i} className="card p-5">
<div className="text-2xl">{f.icon}</div>
<h4 className="mt-2 font-semibold">{f.title}</h4>
<p className="text-sm text-gray-600 mt-1">{f.desc}</p>
</div>
))}
</div>
</div>
<div className="space-y-4">
<p className="kicker">Về CamLanh</p>
<h3 className="text-2xl md:text-3xl">Cam – nguồn vitamin C tự nhiên</h3>
<p className="text-gray-600">Bổ sung năng lượng, tăng đề kháng. Chúng tôi ưu tiên nguyên liệu tự nhiên, nói không với phẩm màu.</p>
<div className="flex gap-3">
<button className="btn-primary">Xem thêm</button>
<button className="btn-outline">Vì sao chọn cam?</button>
</div>
</div>
</div>
</section>
)
}