import type { ChildrenProps } from "@/types";
import { Header, Footer } from "@/components/organisms";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <div>
      <Header theme="white" topHeader/>
      <main className="flex items-center justify-center w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
