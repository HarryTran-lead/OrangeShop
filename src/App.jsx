import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Products from "./components/Products";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import SurveyQRSection from "./components/SurveyQRSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <Products />
      <Philosophy />
      <WhyChoose />
      <Contact />
      <SurveyQRSection />
      <Footer />
    </div>
  );
}
