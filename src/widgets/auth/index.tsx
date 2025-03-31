import { FC, ReactNode } from "react";
import { cn } from "@/shared/utils";
import { Logo } from "@/shared/ui";

interface Props {
  className?: string;
  title?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

export const AuthForm: FC<Props> = ({ className, title, children, footer }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-lg bg-white p-8 shadow-md",
        className,
      )}
    >
      <Logo className="mb-6" />
      {title && (
        <h1 className="mb-6 text-2xl font-bold text-gray-800">{title}</h1>
      )}
      {children}
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};
