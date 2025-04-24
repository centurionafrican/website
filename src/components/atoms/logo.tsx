"use client";
import Image from "next/image";
import Primary from "@/assets/images/centurion.svg";
import LogoWhite from "@/assets/images/centurion.svg";

export function CompanyLogo({
  theme = "primary",
  width = 120,
}: {
  theme?: "primary" | "white";
  width?: number;
}) {
  return (
    <div className="relative w-[80px] sm:w-[80px] md:w-[120px] lg:w-[200px] h-auto">
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
