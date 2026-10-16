import { ApiError, NETWORK_ERROR } from "@/lib/api/client";

export function AdminErrorMessageMapper(error: ApiError): string {
  switch (error.status) {
    case 400:
      return "Check the service name, duration and price, then try again.";
    case 401:
      return "Your session has expired. Please log in again.";
    case 403:
      return "You don't have admin access.";
    case NETWORK_ERROR:
      return "Can't reach the server. Check your connection and try again.";
    default:
      return "Something went wrong on our side. Please try again.";
  }
}
