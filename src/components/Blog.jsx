import React from 'react'
import { posts } from '../data/data.js'


function Post({img, title, date}){
return (
<article className="card overflow-hidden">
<img src={img} alt={title} className="h-44 w-full object-cover"/>
<div className="p-5">
<div className="text-xs text-gray-500">{date}</div>
<h4 className="mt-1 font-semibold">{title}</h4>
<div className="mt-3">
<a className="text-brand hover:underline" href="#">Đọc tiếp</a>
</div>
</div>
</article>
)
}


export default function Blog(){
return (
<section className="section bg-gray-50">
<div className="container">
<div className="text-center mb-10">
<h3 className="text-2xl md:text-3xl">Tin & Blog về cam</h3>
</div>
<div className="grid md:grid-cols-3 gap-6">
{posts.map(p => (<Post key={p.id} {...p} />))}
</div>
</div>
</section>
)
}