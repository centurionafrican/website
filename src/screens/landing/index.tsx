import Hero from "@/components/screens/landing/Hero";
import Services from "@/components/screens/landing/Services";
import AboutSection from "@/components/screens/landing/ChooseUs";
import WhyUs from "@/components/screens/landing/WhyUs";
import WorkWithUs from "@/components/screens/landing/WorkWithUs";
import Partners from "@/components/screens/landing/Partners";
import HistorySection from "@/components/screens/landing/History";
import SecuritySection from "@/components/screens/landing/Security";
import Industries from "@/components/screens/landing/Industries";
import WhyChooseSection from "@/components/screens/landing/industries/WhyYouChoose";
import CloseProtectionOfficerSection from "@/components/screens/landing/CloseProtectionOfficer";
import CenturionAfricaSection from "@/components/screens/landing/CenturionAfrica";

export default function LandingScreen() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center landing_font'>
      <Hero
        path={'/bg_centurion.jpg'}
        title="Trusted by Businesses."
        spanTitle="Powered by Expertise. "
        description="Partner with a security provider that understands the demands of 
            corporate environments and compliance."/>
      <AboutSection />
      <HistorySection />
      <CenturionAfricaSection />
       <SecuritySection /> 
       <Industries /> 
       <Services />
       {/* <CloseProtectionOfficerSection /> */}
       <WhyUs />
       <Partners /> 
      <WorkWithUs />
    </div>
  );
}
