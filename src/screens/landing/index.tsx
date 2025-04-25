import Hero from "@/components/screens/landing/Hero";
import Services from "@/components/screens/landing/Services";
import Contact from "@/components/screens/landing/Contact";
import ChooseUs from "@/components/screens/landing/ChooseUs";
import AboutSection from "@/components/screens/landing/ChooseUs";
import WhyUs from "@/components/screens/landing/WhyUs";
import WorkWithUs from "@/components/screens/landing/WorkWithUs";
import Partners from "@/components/screens/landing/Partners";

export default function LandingScreen() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center landing_font '>
      <Hero />
      {/* <TrustedBy /> */}
      {/* <Services /> */}
      <AboutSection />
      <WhyUs />
      <Partners />
      <WorkWithUs />
      {/* <Contact /> */}
    </div>
  );
}
