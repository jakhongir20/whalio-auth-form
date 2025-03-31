import { FC } from "react";
import { cn } from "@/shared/utils";
import { HeaderLogo } from "./ui/HeaderLogo";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <HeaderLogo />
    </div>
  );
};
