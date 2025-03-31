import { UseMutationOptions } from "@tanstack/react-query";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface UserInfo {
  id: string;
  email: string;
  name: string;
  phone: string;
  address: string;
}

export type LoginMutationOptions = UseMutationOptions<
  LoginResponse,
  unknown,
  LoginCredentials
>;
