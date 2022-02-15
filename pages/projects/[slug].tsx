import Layout from '../../components/Layout'
import { getAllProjectsSlugs, getProjectData } from '../../lib/projects'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Heading, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useProcessor } from '../../lib/useProcessor';

interface ProjectProps {
  projectData: {
    id: string
    title: string
    date: string
    contentHtml: string
  }
}

const Project = ({ projectData }: ProjectProps) => {
  const { id, title, date, contentHtml } = projectData;

  const Content = useProcessor(contentHtml);

  useEffect(() => {
    const ps = document.getElementsByName("p");

    ps.forEach((elem, key) => {
      elem.textContent = "nope";
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>

      <article>
        <Stack spacing={4} pt={4}>
          <Heading as="h1">{projectData.title}</Heading>

          {Content}
        </Stack>
      </article>

    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectsSlugs()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = await getProjectData(params?.slug as string)
  return {
    props: {
      projectData
    }
  }
}

export default Project
