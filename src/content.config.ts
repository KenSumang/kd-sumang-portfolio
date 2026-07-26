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

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    location: z.string().optional(),
    highlights: z.array(z.string()),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certifications' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    issuer: z.string(),
    date: z.string(),
    link: z.string().url().optional(),
    logo: image().optional(),
  }),
});

export const collections = { projects, experience, certifications };