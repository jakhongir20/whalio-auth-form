import { MutationFunction, useMutation } from "@tanstack/react-query";
import {
  AuthService,
  LoginCredentials,
  LoginMutationOptions,
  LoginResponse,
} from "@/features/auth";

const LOGIN_KEY = "LOGIN_USER";

export function useLogin(options?: LoginMutationOptions) {
  const mutationFn: MutationFunction<LoginResponse, LoginCredentials> = async (
    loginData: LoginCredentials,
  ) => await AuthService.login(loginData);

  return useMutation({
    mutationKey: [LOGIN_KEY],
    mutationFn,
    ...options,
  });
}
