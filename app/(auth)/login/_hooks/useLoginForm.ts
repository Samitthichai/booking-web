"use client";

import { useLogin } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";
import { type LoginInput, loginSchema } from "@/lib/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginErrorMessage } from "../_lib/loginErrorMessage";

export function useLoginForm() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: { email: "", password: "" },
  });

  const { clearErrors, setError } = form;
  const login = useLogin();

  const onSubmit = (data: LoginInput) => {
    login.mutate(data, {
      onSuccess: () => {
        clearErrors();
      },
      onError: (error) => {
        if (error instanceof ApiError && error.status === 401) {
          setError("email", { type: "server" });
          setError("password", { type: "server" });
        }
      },
    });
  };

  return {
    form,
    onSubmit,
    isPending: login.isPending,
    isSuccess: login.isSuccess,
    errorMsg: login.isError ? loginErrorMessage(login.error) : undefined,
  };
}
