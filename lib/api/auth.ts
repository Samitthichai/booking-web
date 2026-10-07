import { LoginInput, RegisterInput } from "@/lib/schemas/auth";
import { AuthResponse } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";
import { http } from "./client";

export const authApi = {
  login: async (input: LoginInput) => {
    const { data } = await http.post<AuthResponse>("/api/auth/login", input);
    return data;
  },

  register: async (input: RegisterInput) => {
    const { data } = await http.post<AuthResponse>("/api/auth/register", input);
    return data;
  },
};

export function useLogin() {
  return useMutation({ mutationFn: authApi.login });
}

export function useRegister() {
  return useMutation({ mutationFn: authApi.register });
}
