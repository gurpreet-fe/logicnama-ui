import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const fallacy = defineCollection({
  loader: glob({ base: "./src/content/fallacies", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      cover: image(),
      title: z.string(),
      description: z.string(),
      ogImage: image(),
    }),
});

export const collections = { fallacy };
