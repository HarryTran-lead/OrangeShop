import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Products from "./components/Products";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />
      <Hero />
      <Products />
      <Philosophy />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
