import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Promo from './components/Promo.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import BestSellers from './components/BestSellers.jsx'
import Testimonial from './components/Testimonial.jsx'
import Team from './components/Team.jsx'
import Blog from './components/Blog.jsx'
import Partners from './components/Partners.jsx'
import Footer from './components/Footer.jsx'


export default function App(){
return (
<div className="min-h-screen bg-white">
<Navbar />
<Hero />
<Promo />
<WhyChooseUs />
<BestSellers />
<Testimonial />
<Team />
<Blog />
<Partners />
<Footer />
</div>
)
}