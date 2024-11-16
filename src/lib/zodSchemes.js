import { z } from 'zod'

export const signInSchema = z.object(
  {
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password is too short"})
      .max(20, { message: "Password is too long"})
  }
)

export const signUpSchema = z.object(
  {
    firstName: z.string().min(1, { message: "This field must not be empty"}),
    lastName: z.string().min(1, { message: "This field must not be empty"}),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password is too short"})
      .max(20, { message: "Password is too long"}), 
    confirmPassword: z.string()
  }
).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
})