import { z } from "zod";

export const serviceSchema = z.object({
  id: z.string().min(10).max(72),
  name: z.string(),
  description: z.string().nullable(),
  categoryId: z.string().nullable(),
  displayOrder: z.number().default(1000),
});

export type Service = z.infer<typeof serviceSchema>;
