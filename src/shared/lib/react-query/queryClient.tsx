import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { showGlobalToast } from "@/shared/hooks";

interface CustomError extends Error {
  response?: {
    data?: {
      detail?: string[];
    };
  };
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      // retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 3000), // Exponential backoff up to 3s
    },
    mutations: {
      retry: 1,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      globalErrorHandler(error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, _, __, mutation) => {
      if (typeof mutation.options.onError === "function") {
        return;
      }

      globalErrorHandler(error);
    },
  }),
});

export function globalErrorHandler(error: unknown) {
  if (error instanceof Error) {
    const customError = error as CustomError;
    const details = customError?.response?.data?.detail;
    if (details && Array.isArray(details)) {
      details.forEach((detail) => {
        showGlobalToast(detail, "error");
      });
    } else {
      showGlobalToast(details || error.message, "error");
    }
  } else {
    showGlobalToast("An unknown error occurred", "error");
  }
}
