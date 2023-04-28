import { ClientConfig, createClient } from 'next-sanity';

const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  useCdn: false,
  apiVersion: '2022-01-31',
};

const client = createClient(config);
export default client;
