import Layout from "../../components/Layout";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { Stack } from "@chakra-ui/react";
import { getAllPostsWithSlug, getProfileUrl, getProject } from "../../lib/api";
import { PortableText } from "@portabletext/react";
import HeadingH1 from "../../components/base/HeadingH1";
import * as Icons from "react-icons/fi";
import Link from "next/link";

interface ProjectProps {
  projectData: ProjectData
}

const Project = ({ projectData}: ProjectProps) => {
  return (
    <Layout >
      <Head>
        <title>{projectData?.title}</title>
      </Head>

      <article className="flex flex-col space-y-3 pt-4">
        <h1 className="pb-4">{projectData?.title}</h1>

        <div className="flex flex-col space-y-1">
          <PortableText value={projectData?.body} />
        </div>

        <div className="flex gap-6 flex-wrap">
          {projectData.links && projectData.links.map((l, i) => {
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
      </article>
    </Layout>
  );
};

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
  const slug = params?.slug || "";
  const data = await getProject(slug);

  return {
    props: {
      projectData: data
    },
    revalidate: 1,
  };
};

export default Project;
