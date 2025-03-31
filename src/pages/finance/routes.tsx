import { AppRouteObject } from "@/shared/types";
import { withLazyLoad } from "@/shared/hocs";

const PATH = "finance";

const routes: AppRouteObject[] = [
  {
    path: PATH,
    element: withLazyLoad(() => import("@/pages/finance/index.tsx")),
  },
];

export default routes;
