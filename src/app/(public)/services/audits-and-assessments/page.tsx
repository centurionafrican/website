import { Metadata } from "next";
import AuditsAssessments from "@/screens/services/audits-assessments";

export const metadata: Metadata = {
  title: "Audits and assessments  | Centurionafrica security group",
  description: "Trusted by business | powered by expertise.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.png",
  },
};

export default function ServicesPage() {
  return <AuditsAssessments />;
}
