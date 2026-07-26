import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    link: z.string().url().optional(),
    thumbnail: image().optional(),
    status: z.enum(['live', 'in-progress', 'archived']).default('live'),
  }),
});

export const collections = { projects };
