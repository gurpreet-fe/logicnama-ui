import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const fallacy = defineCollection({
  loader: glob({ base: "./src/content/fallacies", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { fallacy };
