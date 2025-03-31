import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { AuthService, type UserInfo } from "@/features/auth";

const USER_INFO_KEY = "USER_INFO";

export function useGetUserInfo(): UseQueryResult<UserInfo> {
  return useQuery({
    queryKey: [USER_INFO_KEY],
    queryFn: () => AuthService.getUserInfo(),
  });
}
