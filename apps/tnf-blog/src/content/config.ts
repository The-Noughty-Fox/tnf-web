import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    cover: z.string(),
    title: z.string(),
    subTitle: z.string(),
    pubDate: z.coerce.date(),
    author: z.object({
      name: z.string(),
      avatar: z.string(),
      role: z.string(),
    }),
  }),
});

export const collections = { blog };
