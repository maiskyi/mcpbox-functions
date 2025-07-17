import { DynamicModule, Module } from '@nestjs/common';

import { OpenAIService } from './services/openai';
import { OpenAIModuleConfig } from './openai.types';

@Module({})
export class OpenAIModule {
  public static forRoot({ apiKey }: OpenAIModuleConfig): DynamicModule {
    return {
      global: true,
      module: OpenAIModule,
      exports: [OpenAIService],
      providers: [
        {
          provide: OpenAIService,
          useValue: new OpenAIService({
            apiKey,
          }),
        },
      ],
    };
  }
}
