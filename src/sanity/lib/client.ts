import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN
})
