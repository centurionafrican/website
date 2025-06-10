import "@/styles/globals.css";
import localFont from "next/font/local";

import type { ChildrenProps } from "@/types";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/atoms";

export const metadata = {
  title: "Trusted by business, powered by expertise",
  description: "Trusted by business, powered by expertise",
  keywords: "Trusted by business, powered by expertise"
};

const givonic = localFont({
    src: [
      {
        path: "../../public/fonts/Givonic Variable.otf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../../public/fonts/Givonic-Bold.otf",
        weight: "700",
        style: "normal",
      },
      {
        path: "../../public/fonts/Givonic-SemiBold.ttf",
        weight: "600",
        style: "normal",
      }
    ],
    display: "swap",
    variable: "--font-givonic",
    adjustFontFallback: false
  });

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" className={givonic.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body
        className={`${givonic.className} h-full flex flex-col justify-between`}
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