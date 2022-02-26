import Head from 'next/head'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import ProjectList from '../components/ProjectList'
import { siteTitle } from '../lib/constants'
import { Box, Center, Heading, List, Stack } from '@chakra-ui/react';
import { getAllProjectsMeta, getHomeLinks, getIndexInfo } from '../lib/api';
import { PortableText } from '@portabletext/react';
import React from 'react';
import HomeLink from '../components/HomeLink';

interface HomeProps {
  projectsMeta: ProjectMeta[],
  indexInfo: any,
  homeLinks: IHomeLink[]
}

const Home = ({ projectsMeta, indexInfo, homeLinks }: HomeProps) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Center>
        <Box style={{ textAlign: "center" }}>
          <PortableText value={indexInfo} />
        </Box>
      </Center>

      <Stack spacing={8}>
        <Stack>
          <Heading as="h2" color="primary" pb={2}>Links</Heading>

          <List>
            {homeLinks.map((link, i) => <HomeLink link={link} key={i} />)}
          </List>
        </Stack>

        <Stack>
          <Heading as="h2" pb={2}>Projects</Heading>
          <ProjectList projectsMeta={projectsMeta} />
        </Stack>
      </Stack>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projectsMeta = await getAllProjectsMeta();
  const indexInfo = await getIndexInfo();
  const homeLinks = await getHomeLinks();

  return {
    props: {
      projectsMeta, indexInfo, homeLinks
    },
    revalidate: 1
  }
}

export default Home;
