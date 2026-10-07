import { ApiError, NETWORK_ERROR } from "@/lib/api/client";

export const INVALID_CREDENTIALS = "Email or password is incorrect.";

export function loginErrorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    if (error.status === 401) return INVALID_CREDENTIALS;
    if (error.status === 400)
      return "Check your email and password, then try again.";
    if (error.status === NETWORK_ERROR)
      return "Can't reach the server. Check your connection and try again.";
  }
  return "Something went wrong on our side. Please try again.";
}
