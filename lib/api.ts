import client from './sanity';

export const getAllProjectsMeta = async () => await client.fetch(
  '*[_type == "project"] | order(_updatedAt) { \'slug\': slug.current, title, description, _updatedAt }',
) as ProjectMeta[];

export async function getAllPostsWithSlug() {
  return client.fetch('*[_type == "project"]{ \'slug\': slug.current }');
}

export async function getProject(slug: any) {
  const p = await client.fetch(
    '*[_type == "project" && slug.current == $slug]',
    { slug },
  )
    .then((res: any) => res?.[0]);

  return p as ProjectData;
}

export const getIndexInfo = async () => await client.fetch(
  '*[_type == "index-info"]{ content, links, "profileUrl": profile.asset->url }',
)
  .then((res: any) => res?.[0]) as IndexInfo;

export const getProfileUrl = async () => await client.fetch(
  '*[_type == "index-info"]{ "profileUrl": profile.asset->url }',
)
  .then((res: any) => res?.[0].profileUrl) as string;

export const getHomeLinks = async () => await client.fetch(
  '*[_type == "home-link"]{ title, link }',
) as IHomeLink[];

export const getImageUrlFromRef = (ref: string) => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';

  const newRef = ref.substring(6, ref.length - 4);

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${newRef}.png`;
};
