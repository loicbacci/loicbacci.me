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