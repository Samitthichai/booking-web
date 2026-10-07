"use client";

import { useRegister } from "@/lib/api/auth";
import { RegisterInput, RegisterSchema } from "@/lib/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AuthErrorMessageMapper } from "../../_lib/authErrorMessageMapper";

export function useRegisterForm() {
  const form = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const register = useRegister();
  const router = useRouter();

  const { setError } = form;

  const onSubmit = (data: RegisterInput) => {
    register.mutate(data, {
      onSuccess() {
        router.replace("/login");
      },
      onError: (error) => {
        if (error.status === 409) {
          setError("email", { type: "server" });
        }
      },
    });
  };

  return {
    form,
    onSubmit,
    isPending: register.isPending,

    errorMsg: register.isError
      ? AuthErrorMessageMapper(register.error)
      : undefined,
  };
}
