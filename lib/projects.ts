import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { projectsDirectory } from './constants'
import { markdownToHtml } from './parsing';


export const getProjectsFrontMatter = () => {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory)

  const allProjectsFront: FrontMatter[] = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      slug,
      ...(matterResult.data as FileFrontMatter)
    }
  })

  return allProjectsFront
}


export const getAllProjectsSlugs = () => {
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    }
  })
}


export const getProjectData = async (slug: string) => {
  const fullPath = path.join(projectsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const contentHtml = await markdownToHtml(matterResult.content);

  // Combine the data with the id and contentHtml
  const data: Data = {
    slug,
    contentHtml,
    ...(matterResult.data as FileFrontMatter)
  }

  return data;
}
