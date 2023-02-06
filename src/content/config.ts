import { defineCollection, z } from "astro:content";

export const collections = {
  misc: defineCollection({
    schema: z.object({
      title: z.string(),
    }),
  }),
};
