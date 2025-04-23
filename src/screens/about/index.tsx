import Hero from "@/components/screens/landing/Hero";
import Services from "@/components/screens/landing/Services";
import Products from "@/components/screens/landing/Products";
import Contact from "@/components/screens/landing/Contact";
import ChooseUs from "@/components/screens/landing/ChooseUs";
import Faq from "@/components/screens/landing/Faq";
import Image from "next/image";
import TrustedBy from "@/components/screens/landing/Trusted";
import HeroAbout from "@/components/screens/about/Hero";
import AboutAib from "@/components/screens/about/Services";
import ClientSection from "@/components/screens/about/ClientSection";
import OurPartners from "@/components/screens/about/OurPartners";

export default function AboutScreen() {
  return (
    <div className='flex flex-1 min-h-screen flex-col items-center justify-center landing_font '>
      <HeroAbout />
      <AboutAib />
      <ClientSection />
      <OurPartners />
      <Contact />
    </div>
  );
}
