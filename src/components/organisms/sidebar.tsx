"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Repeat,
  Users,
  Building,
  CreditCard,
  UserCog,
  Car,
  Bell,
  User,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CompanyLogo } from "../atoms/logo";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Quotations", icon: FileText, href: "/quotations" },
  { name: "Subscriptions", icon: Repeat, href: "/subscriptions/list" },
  { name: "Accounts", icon: Users, href: "/accounts/list" },
  { name: "Insurers", icon: Building, href: "/insurers/list" },
  { name: "Transactions", icon: CreditCard, href: "/transactions" },
  { name: "Users", icon: UserCog, href: "/users/list" },
  { name: "Vehicles", icon: Car, href: "/vehicles/list" },
  { name: "Notifications", icon: Bell, href: "/notifications" },
  { name: "My Profile", icon: User, href: "/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-white border-r border-gray-100 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between py-4">
        {!isCollapsed && (
          <div className="flex-1">
            <CompanyLogo />
          </div>
        )}
        <div className="mx-auto">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-2 space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center  px-3.5  transition-colors",
                  pathname === item.href
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100",
                  isCollapsed ? "justify-center py-3.5" : "py-2"
                )}
              >
                <item.icon
                  className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-3")}
                />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
