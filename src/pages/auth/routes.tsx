import { AppRouteObject } from "@/shared/types";
import { withLazyLoad } from "@/shared/hocs";

const routes: AppRouteObject[] = [
  {
    path: "/auth/sign-in",
    element: withLazyLoad(() => import("@/pages/auth/sign-in")),
  },
  // {
  //   path: "/sign-up",
  //   element: <SignUpPage />,
  // },
  // {
  //   path: "/confirm-code",
  //   element: <ConfirmCodePage />,
  // },
  // {
  //   path: "/confirm-code-2fa",
  //   element: <ConfirmCode2FAPage />,
  // },
  // {
  //   path: "/confirm-email",
  //   element: <ConfirmEmailPage />,
  // },
  // {
  //   path: "/confirm-password",
  //   element: <ConfirmPasswordPage />,
  // }
];

export default routes;
