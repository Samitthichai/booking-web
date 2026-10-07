"use client";

import { useFormContext, useFormState, type FieldPath, type FieldValues } from "react-hook-form";

/**
 * Maps RHF state for one field to the props our presentational fields expect:
 * name, onChange, onBlur, ref (from register) and the error message.
 * Must be used inside <Form>.
 */
export function useField<T extends FieldValues = FieldValues>(name: FieldPath<T>) {
  const { register, getFieldState } = useFormContext<T>();
  // Subscribe to this field only, so typing in one field doesn't re-render the others.
  const formState = useFormState<T>({ name });
  const { error, invalid } = getFieldState(name, formState);

  // error can be true with no message, e.g. a server error highlighting several fields at once.
  return { ...register(name), error: invalid, errorMsg: error?.message || undefined };
}
