import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { markdownToHtml } from './parsing';

const directory = path.join(process.cwd(), 'content')

export const getIndexData = async () => {
  const fullPath = path.join(directory, 'index.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const contentHtml = await markdownToHtml(matterResult.content)

  // Combine the data with the id and contentHtml
  return {
    contentHtml
  }
}


