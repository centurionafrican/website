import { Metadata } from "next";
import { MainLayout } from "@/layouts/";
import AboutScreen from "@/screens/about";

export const metadata: Metadata = {
  title: "About us | Centurionafrica security group",
  description: "Trusted by business | powered by expertise.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.png",
  },
};

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutScreen />
    </MainLayout>
  );
}
