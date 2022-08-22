import Head from 'next/head'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import ProjectList from '../components/ProjectList'
import { siteTitle } from '../lib/constants'
import { Box, Center, Heading, List, Stack } from '@chakra-ui/react';
import { getAllProjectsMeta, getHomeLinks, getIndexInfo } from '../lib/api';
import { PortableText } from '@portabletext/react';
import React from 'react';
import { FiGithub } from "react-icons/fi";
import HomeLink from '../components/HomeLink';
import Link from 'next/link'
import * as Icons from "react-icons/fi";

interface HomeProps {
  projectsMeta: ProjectMeta[],
  indexInfo: IndexInfo
}

const Home = ({ projectsMeta, indexInfo }: HomeProps) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Center>
        <Box style={{ textAlign: "center" }}>
          <PortableText value={indexInfo.content} />
        </Box>
      </Center>

      <div className="flex flex-col space-y-8 pt-4">
        <section className="flex flex-col space-y-2">
          <h2 className="pb-2">Projects</h2>
          <ProjectList projectsMeta={projectsMeta} />
        </section>

        <section className="flex flex-col space-y-2">
          <h2>Links</h2>



          <div className="flex gap-6 flex-wrap">
            {indexInfo.links && indexInfo.links.map((l, i) => {
              // @ts-ignore
              const Icon = l.icon && Icons[l.icon.name]
              console.log(Icon)
              return (
                <Link href={l.url} key={i}>
                  <a className="icon-link">
                    {l.icon && <Icon className="m-auto"/>}
                    <span>{l.text}</span>
                  </a>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projectsMeta = await getAllProjectsMeta();
  const indexInfo = await getIndexInfo();

  return {
    props: {
      projectsMeta, indexInfo
    },
    revalidate: 1
  }
}

export default Home;
