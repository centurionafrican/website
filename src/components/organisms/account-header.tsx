"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/contexts/userContext";
import { cn } from "@/lib/utils";

const AccountHeader = ({ theme = "dark" }: { theme?: string }) => {
  const { user, logout, isAuthenticated, setUser } = useUser();
  const pathname = usePathname();
  const menuItems = [
    { name: "Policies", href: "/account" },
    { name: "Quotations", href: "/account/quotations" },
    { name: "Vehicles", href: "/account/vehicles" },
    { name: "Profile", href: "/account/profile" },
  ];
  return (
    <div
      className={`pt-20 border-b border-[#8E9AF9]/30 lg:px-0 px-4
      ${theme === "dark" ? "bg-secondary" : "bg-gray-50"}
      `}
    >
      <div
        className={`max-w-4xl mx-auto  
        ${theme === "dark" ? "text-white" : "text-base"}
        `}
      >
        <h1 className="text-2xl my-0 pt-8">{`Hello ${user?.first_name}.`}</h1>
        <div className="text-white/70 text-sm">
          Welcome to your personal dashboard, one centralized portal to manage
          your insurance policies
        </div>
        <div className="flex mt-0 md:mt-4 gap-3">
          {menuItems.map((item, id) => (
            <Link
              key={id}
              href={item.href}
              className={cn(
                "flex items-center py-2 transition-colors text-sm rounded-t-sm border-b-2",
                pathname === item.href
                  ? "rounded-t-sm border-accent"
                  : theme === "dark"
                    ? "border-secondary hover:border-white"
                    : "border-white hover:border-accent"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;
