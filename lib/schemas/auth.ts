import { z } from "zod";
export const loginSchema = z.object({
  email: z.email({ error: "Enter a valid email address" }),
  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters" }),
});

export const RegisterSchema = z
  .object({
    email: z.email({ error: "Enter a valid email address" }),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(8, { error: "Passwords must match" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const AdminRegisterSchema = z
  .object({
    email: z.email({ error: "Enter a valid email address" }),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(8, { error: "Passwords must match" }),
    invite_code: z.string().trim().min(1, { error: "Enter the invite code" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type AdminRegisterInput = z.infer<typeof AdminRegisterSchema>;
