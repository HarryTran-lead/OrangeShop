import React from 'react'
import { partners } from '../data/data.js'


export default function Partners(){
return (
<section className="section">
<div className="container">
<div className="text-center mb-8">
<h3 className="text-2xl md:text-3xl">Đối tác của chúng tôi</h3>
</div>
<div className="grid grid-cols-3 md:grid-cols-7 gap-6 items-center text-center">
{partners.map((p,idx)=> (
<div key={idx} className="text-gray-500 font-semibold opacity-70 hover:opacity-100">{p}</div>
))}
</div>
</div>
</section>
)
}