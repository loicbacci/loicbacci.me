import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PortableText } from '@portabletext/react';
import * as Icons from 'react-icons/fi';
import Link from 'next/link';
import React from 'react';
import { getAllPostsWithSlug, getProfileUrl, getProject } from '../../lib/api';
import Layout from '../../components/Layout';

interface ProjectProps {
  projectData: ProjectData
  profileUrl: string
}

function Project({ projectData, profileUrl }: ProjectProps) {
  return (
    <Layout profileUrl={profileUrl}>
      <Head>
        <title>{projectData?.title}</title>
      </Head>

      <article className="flex flex-col space-y-3 pt-4">
        <h1 className="pb-4">{projectData?.title}</h1>

        <div className="flex flex-col space-y-1">
          <PortableText value={projectData?.body} />
        </div>

        <div className="flex gap-6 flex-wrap">
          {projectData?.links && projectData?.links.map((l) => {
            // @ts-ignore
            const Icon = l.icon && Icons[l.icon.name];
            return (
              <Link href={l.url} key={l.url}>
                <div className="icon-link">
                  {l.icon && <Icon className="m-auto" />}
                  <span>{l.text}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post: any) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug || '';
  const data = await getProject(slug);
  const profileUrl = await getProfileUrl();

  return {
    props: {
      projectData: data,
      profileUrl,
    },
    revalidate: 1,
  };
};

export default Project;
