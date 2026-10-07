import { LoginInput } from "@/lib/schemas/auth";
import { LoginResponse } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";
import { http } from "./client";

export const authApi = {
  login: async (input: LoginInput) => {
    const { data } = await http.post<LoginResponse>("/api/auth/login", input);
    return data;
  },
};

export function useLogin() {
  return useMutation({ mutationFn: authApi.login });
}
