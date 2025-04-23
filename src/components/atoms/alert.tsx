import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg text-xs border px-4 py-2",
  {
    variants: {
      variant: {
        default: "bg-blue-100/50 text-blue-600 border-blue-100",
        warning: "bg-orange-100/50 text-orange-600 border-orange-100",
        success: "bg-green-100/50 text-green-600 border-green-100",
        danger: "bg-red-100/50 text-red-600 border-red-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

export default Alert;
