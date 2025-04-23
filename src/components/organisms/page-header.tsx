import React from "react";
import { Button } from "@/components/atoms/button";

interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div className="flex  flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-6 pt-6">
      <div>
        <h1 className="text-2xl font-normal tracking-tight">{title}</h1>
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
