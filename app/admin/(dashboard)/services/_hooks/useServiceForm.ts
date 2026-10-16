"use client";

import {
  type ServiceFormInput,
  type ServiceFormValues,
  serviceFormSchema,
} from "@/lib/schemas/service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const emptyDefaults: ServiceFormInput = {
  service_name: "",
  description: "",
  duration_minutes: 30,
  price: 0,
  is_active: true,
};

export function useServiceForm(defaults?: Partial<ServiceFormInput>) {
  return useForm<ServiceFormValues, unknown, ServiceFormInput>({
    resolver: zodResolver(serviceFormSchema),
    mode: "onTouched",
    defaultValues: { ...emptyDefaults, ...defaults },
  });
}
