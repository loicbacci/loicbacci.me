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
  body: any,
  links: Link[]
}

interface Link {
  text: string,
  url: string,
  icon: any
}

interface IHomeLink {
  title: string,
  link: string
}

interface IndexInfo {
  content: any,
  links: Link[],
  profileUrl: string
}
