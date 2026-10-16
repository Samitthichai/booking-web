import { z } from "zod";

export const serviceFormSchema = z.object({
  service_name: z.string().trim().min(1, { error: "Enter a service name" }),
  description: z.string().trim().max(500, {
    error: "Description is too long",
  }),
  duration_minutes: z.coerce
    .number({ error: "Enter the duration in minutes" })
    .int({ error: "Duration must be a whole number" })
    .positive({ error: "Duration must be greater than 0" }),
  price: z.coerce
    .number({ error: "Enter a price" })
    .min(0, { error: "Price can't be negative" }),
  is_active: z.boolean(),
});

// Number fields are coerced, so the raw form values differ from the parsed output.
export type ServiceFormValues = z.input<typeof serviceFormSchema>;
export type ServiceFormInput = z.output<typeof serviceFormSchema>;
