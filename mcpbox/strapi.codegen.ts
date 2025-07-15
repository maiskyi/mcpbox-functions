import { CodegenConfig } from '@graphql-codegen/cli';
import { config as init } from 'dotenv';

init();

const config: CodegenConfig = {
  schema: [
    {
      [`${process.env.STRAPI_SCHEMA_URL}`]: {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      },
    },
  ],
  ignoreNoDocuments: true,
  generates: {
    './src/_services/strapi/__generated__/query.ts': {
      config: {
        documentVariableSuffix: 'Document',
      },
      documents: ['./src/_services/strapi/documents/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-document-nodes',
      ],
    },
  },
};

export default config;
