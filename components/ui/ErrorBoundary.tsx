"use client";

import { ApiError } from "@/lib/api/client";
import { Component, type ReactNode } from "react";
import { InfoBox } from "./InfoBox";

type ErrorBoundaryProps = {
  /** A fixed message, or a mapper from the caught error to a message. */
  fallback?: string | ((error: unknown) => string);
  children: ReactNode;
};

type ErrorBoundaryState = {
  error: unknown;
};

const DEFAULT_MESSAGE = "Something went wrong. Please try again.";

/**
 * Catches render errors from its subtree — including the throw from
 * useSuspenseQuery on a failed request — and shows a message. When no fallback
 * is given, an ApiError (e.g. the "Network error" from the http client) shows
 * its own message.
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return { error };
  }

  render() {
    const { error } = this.state;
    if (error === null) return this.props.children;

    const { fallback } = this.props;
    const message =
      typeof fallback === "function"
        ? fallback(error)
        : (fallback ??
          (error instanceof ApiError ? error.message : DEFAULT_MESSAGE));

    return <InfoBox description={message} />;
  }
}
