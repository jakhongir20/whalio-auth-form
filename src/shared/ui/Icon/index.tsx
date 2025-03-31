import { FC, ReactNode, Suspense } from "react";
import { cn } from "@/shared/utils";
import { ICON_ELEMENTS } from "@/shared/ui/Icon/iconElements";
import { IconType } from "@/shared/types";

export interface IconProps {
  name?: IconType;
  size?: string | number;
  height?: string | number;
  width?: string | number;
  color?: string;
  className?: string;
  children?: ReactNode;
}

export const Icon: FC<IconProps> = ({
  name,
  size = 16,
  height = "100%",
  width = 20,
  color = "text-gray",
  className,
  children,
  ...rest
}) => {
  if (children) {
    return (
      <i
        className={cn("base-Index", color, "block")}
        style={{ fontSize: size }}
        {...rest}
      >
        {children}
      </i>
    );
  }

  if (!name) return null;

  const IconComponent = ICON_ELEMENTS(height, width)[
    name as keyof typeof ICON_ELEMENTS
  ];

  return (
    <i
      className={cn("base-index", color, className)}
      style={{ fontSize: size }}
      {...rest}
    >
      <Suspense fallback={null}>{IconComponent}</Suspense>
    </i>
  );
};
