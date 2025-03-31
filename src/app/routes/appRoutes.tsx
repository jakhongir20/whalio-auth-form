import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout, AuthLayout } from "@/app/layouts";
import { authRoutes, financeRoutes } from "@/pages";
import { ProtectedRoute } from "@/shared/hocs";
import { AppRouteObject } from "@/shared/types";

export const pagesRoutes: AppRouteObject[] = [
  ...financeRoutes, // TODO: it is an example of how to add a route
  // ...other routes
];

export const routes: AppRouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute roles={[]}>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/finance" replace />,
      },
      ...pagesRoutes,
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/sign-in" replace />,
      },
      ...authRoutes,
    ],
  },
];

export const router = createBrowserRouter(routes);
