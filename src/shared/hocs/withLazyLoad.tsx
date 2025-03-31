import { ComponentType, lazy, Suspense } from "react";

export const withLazyLoad = (
  importFunc: () => Promise<{ default: ComponentType<unknown> }>,
) => {
  const LazyComponent = lazy(importFunc);

  return (
    <Suspense
      fallback={
        <div className="absolute left-0 top-[50px] flex h-full w-full items-center justify-center">
          Loading with lazy load component (spinner)...
        </div>
      }
    >
      <LazyComponent />
    </Suspense>
  );
};
