import Head from 'next/head'
import Layout from '../components/Layout'
import { getProjectsFrontMatter } from '../lib/projects'
import { getIndexData } from '../lib/index'
import NLink from 'next/link'
import { GetStaticProps } from 'next'
import ProjectList from '../components/ProjectList'
import { siteTitle } from '../lib/constants'
import { Box, Center, Flex, Heading, HStack, Link, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react';
import { FiArrowRight, FiGithub } from 'react-icons/fi';
import { useProcessor } from '../lib/useProcessor';
import MyListItem from '../components/MyListItem';
import GitHubLink from '../components/GitHubLink';

interface HomeProps {
  allProjectsFront: FrontMatter[],
  indexData: {
    contentHtml: string
  }
}

const Home = ({ allProjectsFront, indexData }: HomeProps) => {
  const Content = useProcessor(indexData.contentHtml);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <Center>
        <Box style={{ textAlign: "center" }}>
          {Content}
        </Box>
      </Center>

      <Stack spacing={8}>
        <Stack>
          <Heading as="h2" color="primary" pb={2}>Links</Heading>

          <List>
            <GitHubLink />
          </List>
        </Stack>

        <Stack>
          <Heading as="h2" pb={2}>Projects</Heading>
          <ProjectList allProjectsFront={allProjectsFront} />
        </Stack>
      </Stack>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allProjectsFront = getProjectsFrontMatter()
  const indexData = await getIndexData()
  return {
    props: {
      allProjectsFront,
      indexData
    }
  }
}

export default Home
