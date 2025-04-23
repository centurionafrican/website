import { Metadata } from "next";
import { MainLayout } from "@/layouts/";
import LandingScreen from "@/screens/landing";
import AboutScreen from "@/screens/about";
import ServicesScreen from "@/screens/services";
import ProductScreen from "@/screens/products";

export const metadata: Metadata = {
  title: "Products on offer | Alliance Insurance Brokers",
  description: "Your dedicated insurance partner, today & tomorrow.",
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
