import Hero from "@/components/screens/landing/Hero";
import Contact from "@/components/screens/landing/Contact";
import ServicesHero from "@/components/screens/services/Hero";
import ServiceMainSection from "@/components/screens/services/Services";
import RiskManagement from "@/components/screens/services/RiskManagement";
import ClaimsManagement from "@/components/screens/services/Claims";
import ManagementContract from "@/components/screens/services/Management";
import HealthCare from "@/components/screens/services/HealthCare";
import Pension from "@/components/screens/services/Pension";

export default function ServicesScreen() {
  return (
    <div className='flex flex-1 min-h-screen flex-col items-center justify-center landing_font '>
      <ServicesHero />
      <ServiceMainSection />
      <RiskManagement />
      <ClaimsManagement />
      <ManagementContract />
      <HealthCare />
      <Pension />
      <Contact />
    </div>
  );
}
