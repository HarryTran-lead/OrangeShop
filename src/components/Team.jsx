import React from 'react'
import { team } from '../data/data.js'


function Member({img, name, role}){
return (
<div className="card overflow-hidden">
<img src={img} alt={name} className="h-56 w-full object-cover"/>
<div className="p-4 text-center">
<div className="font-semibold">{name}</div>
<div className="text-sm text-gray-500">{role}</div>
</div>
</div>
)
}


export default function Team(){
return (
<section className="section">
<div className="container">
<div className="text-center mb-8">
<h3 className="text-2xl md:text-3xl">Đội ngũ CamLanh</h3>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
{team.map((m,idx)=>(<Member key={idx} {...m} />))}
</div>
</div>
</section>
)
}