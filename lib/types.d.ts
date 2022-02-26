interface FileFrontMatter {
  title: string
  description: string
}

interface FrontMatter extends FileFrontMatter{
  slug: string
}

interface Data extends FrontMatter{
  contentHtml: string
}

interface ProjectMeta {
  title: string,
  description: string,
  slug: string
}

interface ProjectData extends ProjectMeta {
  body: any
}

interface IHomeLink {
  title: string,
  link: string
}

