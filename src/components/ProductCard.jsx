import React from 'react'


const formatVND = (n) => new Intl.NumberFormat('vi-VN').format(n)


export default function ProductCard({img, name, price, rating}){
const full = Math.round(rating)
const empty = 5 - full
const onErr = (e) => { e.currentTarget.src = 'https://placehold.co/600x400/f97316/ffffff?text=CamLanh' }
return (
<div className="card overflow-hidden">
<img src={img} alt={name} className="h-44 w-full object-cover" onError={onErr}/>
<div className="p-5">
<h5 className="font-semibold">{name}</h5>
<div className="mt-1 text-amber-500">{'★'.repeat(full)}<span className="text-gray-300">{'★'.repeat(empty)}</span></div>
<div className="mt-3 flex items-center justify-between">
<span className="text-lg font-semibold">{formatVND(price)}₫</span>
<button className="btn-primary text-sm px-4 py-2">Mua ngay</button>
</div>
</div>
</div>
)
}