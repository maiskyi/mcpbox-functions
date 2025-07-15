import { z } from 'zod';

const parameterSchema = z.object({
  name: z.string().nonoptional(),
  type: z.string().nonoptional(),
  description: z.string().optional(),
});

const toolSchema = z.object({
  id: z.string().nonoptional(),
  description: z.string().optional(),
  parameters: z.array(parameterSchema).nonoptional(),
});

export const fileSchema = z.object({
  isOfficial: z.boolean().nonoptional(),
  title: z.string().nonoptional(),
  githubUrl: z.url().nonoptional(),
  description: z.string().nonoptional(),
  tools: z.array(toolSchema).nonoptional(),
});
