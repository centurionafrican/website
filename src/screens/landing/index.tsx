import Hero from "@/components/screens/landing/Hero";
import Services from "@/components/screens/landing/Services";
import AboutSection from "@/components/screens/landing/ChooseUs";
import WhyUs from "@/components/screens/landing/WhyUs";
import WorkWithUs from "@/components/screens/landing/WorkWithUs";
import Partners from "@/components/screens/landing/Partners";
import HistorySection from "@/components/screens/landing/History";
import SecuritySection from "@/components/screens/landing/Security";
import Industries from "@/components/screens/landing/Industries";

export default function LandingScreen() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center landing_font '>
      <Hero
        path={'/guards_II.jpg'}
        title="Trusted by Businesses."
        spanTitle="Powered by Expertise. "
        description="Partner with a security provider that understands the demands of 
            corporate environments and compliance."/>
      <AboutSection />
      <HistorySection />
      <SecuritySection />
      <Industries />
      <Services />
      <WhyUs />
      <Partners />
      <WorkWithUs />
    </div>
  );
}
