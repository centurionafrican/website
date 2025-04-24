import { Metadata } from "next";
import { MainLayout } from "@/layouts/";
import LandingScreen from "@/screens/landing";
import AboutScreen from "@/screens/about";
import ServicesScreen from "@/screens/services";
import ProductScreen from "@/screens/products";

export const metadata: Metadata = {
  title: "Products on offer | Centurionafrica security group",
  description: "Trusted by business | powered by expertise.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.png"
  }
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <ProductScreen />
    </MainLayout>
  );
}
