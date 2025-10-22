import React from 'react'
import { whyChoose } from '../data/data.js'


export default function WhyChooseUs(){
return (
<section className="section bg-gray-50">
<div className="container">
<div className="section-title">
<p className="kicker">Vì sao chọn CamLanh?</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
{whyChoose.map((item, idx)=> (
<div key={idx} className="card p-6">
<div className="text-3xl">{item.icon}</div>
<h4 className="text-lg mt-3">{item.title}</h4>
<p className="text-gray-600 text-sm mt-1">{item.desc}</p>
</div>
))}
</div>
</div>
</section>
)
}