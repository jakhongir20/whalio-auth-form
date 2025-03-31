import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "@/shared/lib/services";

interface Props {
  roles: string[];
}

export default function ProtectedRoute({ children }: PropsWithChildren<Props>) {
  const navigate = useNavigate();
  const isLoading = false; // Simulating loading state, replace with actual loading logic

  // TODO: need to check for token expiration
  const isTokenExpired = getCookie("isTokenExpired") === "true";

  if (!isTokenExpired) {
    navigate("/auth/sign-in", { replace: true });
  }

  if (isLoading) {
    return <div className="full-page">LOADING...</div>;
  }

  return children;
}
