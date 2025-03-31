import { FC } from "react";
import { cn } from "@/shared/utils";

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <img src="/logo.svg" alt="Logo" />
    </div>
  );
};
