import { ApiError, NETWORK_ERROR } from "@/lib/api/client";

export function AdminLoginErrorMapper(error: ApiError): string {
  switch (error.status) {
    case 401:
      return "Email or password is incorrect.";
    case 400:
      return "Check your email and password, then try again.";
    case NETWORK_ERROR:
      return "Can't reach the server. Check your connection and try again.";
    default:
      return "Something went wrong on our side. Please try again.";
  }
}

export function AdminRegisterErrorMapper(error: ApiError): string {
  switch (error.status) {
    case 403:
      return "That invite code isn't valid.";
    case 409:
      return "This email is already registered.";
    case 400:
      return "Check the form and try again.";
    case NETWORK_ERROR:
      return "Can't reach the server. Check your connection and try again.";
    default:
      return "Something went wrong on our side. Please try again.";
  }
}
