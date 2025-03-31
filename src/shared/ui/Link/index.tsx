import { type AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/shared/utils";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "text-blue-500 hover:text-blue-700 hover:underline",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = "Link";
