import { z } from "zod";

export type TwoSumFormSchemaT = z.infer<typeof twoSumFormSchema>;

export const twoSumFormSchema = z.object({
  numArray: z.string().refine((value) => value.trim() !== "", {
    message: "Enter an array of numbers",
  }),
  targetSum: z.string().refine((value) => value.trim() !== "", {
    message: "Enter a target sum",
  }),
});
