"use client";

import { useLogin } from "@/lib/api/auth";
import { type LoginInput, loginSchema } from "@/lib/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AdminLoginErrorMapper } from "../../_lib/adminAuthErrorMapper";

export function useAdminLoginForm() {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: { email: "", password: "" },
  });

  const { clearErrors, setError } = form;
  const login = useLogin();
  const router = useRouter();

  const onSubmit = (data: LoginInput) => {
    login.mutate(data, {
      onSuccess: () => {
        clearErrors();
        router.replace("/admin/services");
      },
      onError: (error) => {
        if (error.status === 401) {
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
    errorMsg: login.isError ? AdminLoginErrorMapper(login.error) : undefined,
  };
}
