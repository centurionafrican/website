import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-normal ring-1 ring-inset",
  {
    variants: {
      variant: {
        default: "bg-gray-50 text-gray-600 ring-gray-500/10",
        warning: "bg-yellow-50 text-yellow-600 ring-yellow-500/10",
        danger: "bg-red-50 text-red-600 ring-red-500/10",
        success: "bg-green-50 text-green-600 ring-green-500/10",
        delivered: "bg-blue-50 text-blue-600 ring-blue-500/10",
        pending: "bg-purple-50 text-purple-600 ring-purple-500/10",
        expired: "bg-pink-50 text-pink-600 ring-pink-500/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
