import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/lib/react-query";

interface Props {
  children: ReactNode;
}

// NOTE: ALL providers must be implemented in this appEntry instance
export function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
