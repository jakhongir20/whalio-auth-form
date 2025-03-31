import { ApiService } from "@/shared/lib/services";
import {
  LoginCredentials,
  LoginResponse,
  type UserInfo,
} from "@/features/auth";

export class AuthService {
  static async login(loginData: LoginCredentials): Promise<LoginResponse> {
    return await ApiService.$post<LoginResponse>("/auth/login/", loginData);
  }

  static async getUserInfo(): Promise<UserInfo> {
    return await ApiService.$get<UserInfo>("/auth/user/");
  }
}
