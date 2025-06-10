import { Metadata } from "next";
import { MainLayout } from "@/layouts/";
import LandingScreen from "@/screens/landing";

export const metadata: Metadata = {
  title: "Trusted by business | powered by expertise",
  description: "Partner with a security provider that understands the demands of corporate environments and compliance.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.png",
  },
};

export default function LandingPage() {
  return (
    <MainLayout>
      <LandingScreen />
    </MainLayout>
  );
}
