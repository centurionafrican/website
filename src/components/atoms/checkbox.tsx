"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Icon } from "@/components/atoms";

import { cn } from "@/lib/utils";
import { Label } from "./label";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, ...props }, ref) => (
  <div className="flex items-center">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "h-4 w-4 shrink-0 rounded-sm border bg-white border-primary disabled:opacity-50 disabled:border-gray-200 data-[state=checked]:bg-primary data-[state=checked]:text-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          "flex items-center justify-center text-current text-white"
        )}
      >
        <Icon name="check" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {label && <Label className="ml-2">{label}</Label>}
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
