import Head from 'next/head';
import { GetStaticProps } from 'next';
import {
  Box, Center, Tooltip, VStack,
} from '@chakra-ui/react';
import { PortableText } from '@portabletext/react';
import React from 'react';
import * as Icons from 'react-icons/fi';
import Link from 'next/link';
import { getAllProjectsMeta, getIndexInfo } from '../lib/api';
import ProjectList from '../components/ProjectList';
import { siteTitle } from '../lib/constants';
import Layout from '../components/Layout';

interface HomeProps {
  projectsMeta: ProjectMeta[];
  indexInfo: IndexInfo;
}

function Home({ projectsMeta, indexInfo }: HomeProps) {
  const headerLinks = indexInfo.links.filter((l) => l.inHeader);
  const notHeaderLinks = indexInfo.links.filter((l) => !l.inHeader);

  return (
    <Layout home profileUrl={`${indexInfo.profileUrl}?h=500`}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Center>
        <VStack spacing={4}>
          <Box style={{ textAlign: 'center' }}>
            <PortableText value={indexInfo.content} />
          </Box>
          <div className="flex gap-6 flex-wrap">
            {headerLinks.map((l) => {
              // @ts-ignore
              const Icon = l.icon && Icons[l.icon.name];
              return (
                <Tooltip label={l.text} hasArrow>
                  <div>
                    <Link href={l.url} key={l.url}>
                      <div className="icon-link">
                        {l.icon && <Icon className="m-auto" />}
                      </div>
                    </Link>
                  </div>

                </Tooltip>
              );
            })}
          </div>
        </VStack>
      </Center>

      <div className="flex flex-col space-y-10 pt-4">
        <section className="flex flex-col space-y-2">
          <h2 className="pb-2">Projects</h2>
          <ProjectList projectsMeta={projectsMeta} />
        </section>

        {notHeaderLinks.length > 0 && (
          <section className="flex flex-col space-y-2">
            <h2>Links</h2>

            <div className="flex gap-6 flex-wrap">
              {notHeaderLinks.map((l) => {
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
          </section>
        )}
      </div>
      
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projectsMeta = await getAllProjectsMeta();
  const indexInfo = await getIndexInfo();

  return {
    props: {
      projectsMeta,
      indexInfo,
    },
    revalidate: 1,
  };
};

export default Home;
