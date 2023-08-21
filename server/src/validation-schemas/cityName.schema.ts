import z from 'zod';

const citySchema = z.object({
  query: z.object({
    city: z.string().min(3).max(50).trim().optional()
  })
});

export { citySchema };
