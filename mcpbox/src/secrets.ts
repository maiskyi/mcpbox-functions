import { defineSecret } from 'firebase-functions/params';

export const strapiApiToken = defineSecret('STRAPI_API_TOKEN');
export const strapiSchemaUrl = defineSecret('STRAPI_SCHEMA_URL');
