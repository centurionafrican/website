import { Metadata } from "next";
import PhysicalSecurity from "@/screens/services/physical-security";

export const metadata: Metadata = {
  title: "Physical security  | Centurionafrica security group",
  description: "Trusted by business | powered by expertise.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.png",
  },
};

export default function ServicesPage() {
  return <PhysicalSecurity />;
}
