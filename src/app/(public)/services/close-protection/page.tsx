import { Metadata } from "next";
import CloseProtection from "@/screens/services/close-protection";

export const metadata: Metadata = {
  title: "Close protection officer  | Centurionafrica security group",
  description: "Trusted by business | powered by expertise.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.png",
  },
};

export default function ServicesPage() {
  return <CloseProtection />;
}
