import { z } from "zod";

export const login = z.object({
  email: z
    .string()
    .min(3, "Email must be at least 3 characters")
    .email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
