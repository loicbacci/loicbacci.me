import Layout from '../../components/Layout'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Stack } from '@chakra-ui/react';
import { getAllPostsWithSlug, getProject } from '../../lib/api';
import { PortableText } from '@portabletext/react';
import HeadingH1 from '../../components/base/HeadingH1';

interface ProjectProps {
  projectData: ProjectData
}

const Project = ({ projectData }: ProjectProps) => {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>

      <article>
        <Stack spacing={6} pt={6}>
          <HeadingH1>{projectData.title}</HeadingH1>

          <Stack spacing={1.5}>
            <PortableText value={projectData.body} />
          </Stack>
        </Stack>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post: any) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug || "";
  const data = await getProject(slug);
  return {
    props: {
      projectData: data,
    },
    revalidate: 1
  }
}

export default Project;
