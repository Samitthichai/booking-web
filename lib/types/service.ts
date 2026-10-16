export type Service = {
  id: number;
  service_name: string;
  description: string;
  duration_minutes: number;
  price: number;
  is_active: boolean;
};

export type ServicesListResponse = {
  message: string;
  data: Service[];
};

export type ServiceResponse = {
  message: string;
  data: Service;
};

export type MessageResponse = {
  message: string;
};
