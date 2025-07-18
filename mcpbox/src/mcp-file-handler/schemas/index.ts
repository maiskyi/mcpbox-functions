import { z } from 'zod';

const settingSchema = z.object({
  name: z.string().nonoptional(),
  secured: z.boolean().nonoptional(),
  required: z.boolean().nonoptional(),
  description: z.string().optional(),
});

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
  logo: z.string().optional(),
  isOfficial: z.boolean().nonoptional(),
  title: z.string().nonoptional(),
  githubUrl: z.url().nonoptional(),
  description: z.string().nonoptional(),
  tools: z.array(toolSchema).nonoptional(),
  settings: z.array(settingSchema).nonoptional(),
});
