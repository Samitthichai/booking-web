import { ServiceFormInput } from "@/lib/schemas/service";
import {
  MessageResponse,
  Service,
  ServiceResponse,
  ServicesListResponse,
} from "@/lib/types/service";
import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { http } from "./client";

export const servicesKeys = {
  all: ["services"] as const,
  admin: ["services", "admin"] as const,
  detail: (id: number) => ["services", "admin", id] as const,
};

export const servicesApi = {
  // Public: active services only.
  list: async () => {
    const { data } = await http.get<ServicesListResponse>("/api/services");
    return data.data;
  },

  // Admin: all services, including hidden ones.
  adminList: async () => {
    const { data } =
      await http.get<ServicesListResponse>("/api/admin/services");
    return data.data;
  },

  create: async (input: ServiceFormInput) => {
    const { data } = await http.post<MessageResponse>("/api/admin/services", {
      service_name: input.service_name,
      description: input.description,
      duration_minutes: input.duration_minutes,
      price: input.price,
    });
    return data;
  },

  update: async (id: number, input: ServiceFormInput) => {
    const { data } = await http.patch<ServiceResponse>(
      `/api/admin/services/${id}`,
      input,
    );
    return data.data;
  },

  remove: async (id: number) => {
    const { data } = await http.delete<MessageResponse>(
      `/api/admin/services/${id}`,
    );
    return data;
  },
};

export function useServices() {
  return useQuery({ queryKey: servicesKeys.all, queryFn: servicesApi.list });
}

export function useServicesSuspense() {
  return useSuspenseQuery({
    queryKey: servicesKeys.all,
    queryFn: servicesApi.list,
  });
}

export function useAdminServices() {
  return useQuery({
    queryKey: servicesKeys.admin,
    queryFn: servicesApi.adminList,
  });
}

export function useCreateService() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: servicesApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: servicesKeys.all });
    },
  });
}

export function useUpdateService(id: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: ServiceFormInput) => servicesApi.update(id, input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: servicesKeys.all });
    },
  });
}

export function useDeleteService() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => servicesApi.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: servicesKeys.all });
    },
  });
}

export type { Service };
