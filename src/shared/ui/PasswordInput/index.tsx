import { forwardRef, type InputHTMLAttributes, useState } from "react";
import { cn } from "@/shared/utils";
import { Icon } from "@/shared/ui";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="w-full">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Icon name="lock" />
          </div>
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={cn(
              "w-full rounded-md border border-gray-300 py-2 pl-10 pr-10 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
              {
                "border-red-300 focus:border-red-500 focus:ring-red-500": error,
              },
              className,
            )}
            {...props}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Icon name={"eye-close"} />
            ) : (
              <Icon name={"eye-open"} />
            )}
          </button>
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
