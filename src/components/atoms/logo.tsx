"use client";
import Image from "next/image";
import Primary from "@/assets/images/aib_logo.svg";
import LogoWhite from "@/assets/images/aib_logo_white.svg";

export function CompanyLogo({
  theme = "primary",
  width = 120,
}: {
  theme?: "primary" | "white";
  width?: number;
}) {
  return (
    <div className="relative w-[120px] sm:w-[160px] md:w-[200px] lg:w-[280px] h-auto">
      <Image
        src={theme === "primary" ? Primary : LogoWhite}
        alt="centurion"
        className="w-full h-auto object-contain"
        priority
        width={width}
      />
    </div>
  );
}
