import { Metadata } from "next";
import { MainLayout } from "@/layouts/";
import LandingScreen from "@/screens/landing";

export const metadata: Metadata = {
  title: "Welcome to Alliance Insurance Brokers | We ensure you are insured!",
  description: "Your dedicated insurance partner, today & tomorrow.",
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
