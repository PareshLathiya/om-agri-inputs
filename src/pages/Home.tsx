import SEO from '@/components/common/SEO';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import VisionMission from '@/components/sections/VisionMission';
import Products from '@/components/sections/Products';
import ProductBenefits from '@/components/sections/ProductBenefits';
import Gallery from '@/components/sections/Gallery';
import Statistics from '@/components/sections/Statistics';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <SEO
        title="OM AGRI INPUTS | Premium Fertilizers & Crop Nutrition"
        description="Genuine agricultural fertilizers and soil health products trusted by 5000+ farmers. Higher yield, better soil health."
      />
      <Hero />
      <About />
      <WhyChooseUs />
      <VisionMission />
      <Products />
      <ProductBenefits />
      <Gallery />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}