import React from 'react'
import { dishes } from '../data/data.js'
import ProductCard from './ProductCard.jsx'


export default function BestSellers(){
return (
<section id="menu" className="section">
<div className="container">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl">Sản phẩm bán chạy <span>🍊</span></h2>
<p className="mt-2 text-gray-600">Chọn nhanh những món từ cam được yêu thích nhất.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{dishes.map(d => (<ProductCard key={d.id} {...d} />))}
</div>
</div>
</section>
)
}