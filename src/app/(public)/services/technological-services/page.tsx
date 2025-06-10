import { Metadata } from "next";
import TechnologicalServices from "@/screens/services/technological-services";

export const metadata: Metadata = {
  title: "Technological services  | Centurionafrica security group",
  description: "Trusted by business | powered by expertise.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.png",
  },
};

export default function ServicesPage() {
  return <TechnologicalServices />;
}
