import { ApiError, NETWORK_ERROR } from "@/lib/api/client";

export const INVALID_CREDENTIALS = "Email or password is incorrect.";

export function AuthErrorMessageMapper(error: ApiError): string {
  switch (error.status) {
    case 401:
      return INVALID_CREDENTIALS;
    case 400:
      return "Check your email and password, then try again.";
    case 409:
      return "This email is already registered.";
    case NETWORK_ERROR:
      return "Can't reach the server. Check your connection and try again.";
    default:
      return "Something went wrong on our side. Please try again.";
  }
}
