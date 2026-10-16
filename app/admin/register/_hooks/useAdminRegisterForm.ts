"use client";

import { useRegisterAdmin } from "@/lib/api/auth";
import {
  type AdminRegisterInput,
  AdminRegisterSchema,
} from "@/lib/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AdminRegisterErrorMapper } from "../../_lib/adminAuthErrorMapper";

export function useAdminRegisterForm() {
  const form = useForm<AdminRegisterInput>({
    resolver: zodResolver(AdminRegisterSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      invite_code: "",
    },
  });

  const { setError } = form;
  const registerAdmin = useRegisterAdmin();
  const router = useRouter();

  const onSubmit = (data: AdminRegisterInput) => {
    registerAdmin.mutate(data, {
      onSuccess: () => {
        router.replace("/admin/login");
      },
      onError: (error) => {
        if (error.status === 409) {
          setError("email", { type: "server" });
        }
        if (error.status === 403) {
          setError("invite_code", { type: "server" });
        }
      },
    });
  };

  return {
    form,
    onSubmit,
    isPending: registerAdmin.isPending,
    errorMsg: registerAdmin.isError
      ? AdminRegisterErrorMapper(registerAdmin.error)
      : undefined,
  };
}
