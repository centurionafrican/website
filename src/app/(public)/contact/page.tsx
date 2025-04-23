import { Metadata } from "next";
import { MainLayout } from "@/layouts/";
import ContactScreen from "@/screens/contacts";

export const metadata: Metadata = {
  title: "Contact us | Alliance Insurance Brokers",
  description: "Your dedicated insurance partner, today & tomorrow.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.png",
  },
};

export default function AboutPage() {
  return (
    <MainLayout>
      <ContactScreen />
    </MainLayout>
  );
}
