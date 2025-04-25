import WorkWithUs from "@/components/screens/landing/WorkWithUs";
import { MainLayout } from "@/layouts/";
import { ChildrenProps } from "@/types";
import ServicesHero from "@/components/screens/services/Hero";
import AccordionLayout from "@/layouts/accordion-layout";

export default function ServicesPage({ children }: ChildrenProps) {
  return (
    <MainLayout>
      <div className="flex flex-1  flex-col items-center justify-center">
        <ServicesHero />
        <AccordionLayout>{children}</AccordionLayout>
        <WorkWithUs />
      </div>
    </MainLayout>
  );
}
