import { z } from "zod";

export type AdditionFormSchemaT = z.infer<typeof additionFormSchema>;

export const additionFormSchema = z.object({
  firstNumber: z.string().refine((value) => value.trim() !== "", {
    message: "Please enter a number",
  }),
  secondNumber: z.string().refine((value) => value.trim() !== "", {
    message: "Please enter a number",
  }),
});
