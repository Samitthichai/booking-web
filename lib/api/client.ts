import axios, { isAxiosError } from "axios";

export const http = axios.create({
  withCredentials: true,
  timeout: 10_000,
  headers: { "Content-Type": "application/json" },
});

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const NETWORK_ERROR = 0;

http.interceptors.response.use(
  (res) => res,
  (err: unknown) => {
    if (isAxiosError(err) && err.response) {
      const body = err.response.data as
        | { error?: unknown; message?: unknown }
        | undefined;
      const message =
        (typeof body?.error === "string" && body.error) ||
        (typeof body?.message === "string" && body.message) ||
        err.response.statusText ||
        "Request failed";
      return Promise.reject(new ApiError(err.response.status, message));
    }
    return Promise.reject(new ApiError(NETWORK_ERROR, "Network error"));
  },
);

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: ApiError;
  }
}
