import Contact from "@/components/screens/landing/Contact";
import ProductHero from "@/components/screens/products/Hero";
import MotorSection from "@/components/screens/products/Motor";
import Financial from "@/components/screens/products/Fiancial";
import Building from "@/components/screens/products/Building";
import PowerEnergy from "@/components/screens/products/Power";
import Marine from "@/components/screens/products/Marine";
import NGOs from "@/components/screens/products/NGO";
import Liability from "@/components/screens/products/Liability";
import Aviation from "@/components/screens/products/Aviation";
import HealthLife from "@/components/screens/products/HealthLife";
import AssetManagement from "@/components/screens/products/Assets";
import ICT from "@/components/screens/products/Ict";
import Bankers from "@/components/screens/products/Bankers";
import Crop from "@/components/screens/products/Crop";
import Property from "@/components/screens/products/Property";
import Travel from "@/components/screens/products/Travel";
import Theft from "@/components/screens/products/Theft";

export default function ProductScreen() {
  return (
    <div className="flex flex-1 min-h-screen flex-col items-center justify-center landing_font ">
      <ProductHero />
      <MotorSection />
      <Financial />
      <Building />
      <PowerEnergy />
      <Marine />
      <NGOs />
      <Liability />
      <Aviation />
      <HealthLife />
      <ICT />
      <AssetManagement />
      <Bankers />
      <Property />
      <Travel />
      <Crop />
      <Theft />
      <Contact />
    </div>
  );
}
