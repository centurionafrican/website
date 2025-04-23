import "@/styles/globals.css";
import { Inter } from "next/font/google";

import type { ChildrenProps } from "@/types";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/atoms";

export const metadata = {
  title: "Your dedicated insurance partner",
  description: "Your dedicated insurance partner",
  keywords: "Your dedicated insurance partner"
};

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false
});

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body
        className={`${inter.className} h-full flex flex-col justify-between`}
      >
        <section className="flex-1">
                <TooltipProvider>{children}</TooltipProvider>
              <Toaster
                richColors
                toastOptions={{
                  className: "shadow-none",
                }}
              />
        </section>
      </body>
    </html>
  );
}
