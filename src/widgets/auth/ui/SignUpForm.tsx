import { FC } from "react";
import { cn } from "@/shared/utils";

interface Props {
  className?: string;
}

export const SignUpForm: FC<Props> = ({ className }) => {
  return <div className={cn(className)}>SignUpForm</div>;
};
