import { z } from 'zod';

import { fileSchema } from '../schemas';

export type FileSchema = z.infer<typeof fileSchema>;
