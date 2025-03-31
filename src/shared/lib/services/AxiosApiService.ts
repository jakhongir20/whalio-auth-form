import axios, { type AxiosError, AxiosHeaders, AxiosInstance } from "axios";
import { router } from "@/app/routes";
import { deleteCookie, getCookie, setCookie } from "./cookieConf";

export class AxiosApiService {
  protected axiosInstance: AxiosInstance;

  constructor(apiUrl?: string) {
    const baseURL = apiUrl || (import.meta.env.VITE_API_URL as string);

    this.axiosInstance = axios.create({
      baseURL,
      withCredentials: true,
    });

    this.setupInterceptors();
  }

  public deleteCredentials() {
    router.navigate("/auth/sign-in", { replace: true });
    deleteCookie("token");
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = getCookie("token");
        const language = "en";

        if (!config.headers) {
          config.headers = new AxiosHeaders();
        }
        config.headers["Accept-Language"] = language;
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        } else {
          delete config.headers.Authorization;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const statusCode = error.response?.status;

        if ([404, 500].includes(statusCode!)) {
          return Promise.reject(error);
        }

        if ([401, 403].includes(statusCode!)) {
          const newAccessToken = getCookie("token");
          if (newAccessToken && error.config) {
            try {
              setCookie("token", newAccessToken);
              error.config.headers.Authorization = `Bearer ${newAccessToken}`;
              return this.axiosInstance.request(error.config);
            } catch (refreshError) {
              this.deleteCredentials();
              return Promise.reject(refreshError);
            }
          } else {
            this.deleteCredentials();
          }

          return Promise.reject(error);
        }

        return Promise.reject(error);
      },
    );
  }
}
