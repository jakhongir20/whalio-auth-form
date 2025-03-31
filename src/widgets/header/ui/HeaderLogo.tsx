import { FC } from "react";
import { cn } from "@/shared/utils";

interface Props {
  className?: string;
}

export const HeaderLogo: FC<Props> = ({ className }) => {
  return <div className={cn(className)}>Logo</div>;
};
