import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "gradient";
  size?: "default" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all",
          {
            "bg-gray-900 text-white hover:bg-gray-800": variant === "default",
            "border-2 border-gray-200 hover:border-gray-900": variant === "outline",
            "bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:shadow-lg": variant === "gradient",
            "px-4 py-2 text-sm": size === "default",
            "px-8 py-4 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
