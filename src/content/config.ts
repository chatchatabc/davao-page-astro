import { defineCollection, z } from "astro:content";

export const collections = {
  misc: defineCollection({
    schema: z.object({
      title: z.string(),
    }),
  }),
  news: defineCollection({
    schema: z.object({
      title: z.string(),
      excerpt: z.string(),
      type: z.string(),
      author: z.string(),
      date: z.date(),
      tags: z.string().array(),
    }),
  }),
};
