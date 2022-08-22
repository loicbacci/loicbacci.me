import { List } from '@chakra-ui/react';
import Link from 'next/link';
import MyListItem from './MyListItem';

interface ProjectListProps {
  projectsMeta: ProjectMeta[]
}

const ProjectList = ({ projectsMeta }: ProjectListProps) => {
  return (
    <div className="grid gap-2 lg:gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {projectsMeta.map(({ slug, title, description }, i) => {
        const href = `/projects/${slug}`;

        // return (
        //   <MyListItem
        //     href={href}
        //     title={title}
        //     description={description}
        //     key={slug}
        //   />
        // )
        return (
          <Link key={i} href={href} passHref>
            <div className="flex flex-col card cursor-pointer">
              <p className="primary-text" key={i}>{title}</p>
              <p className="description">{description}</p>
            </div>
            
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList
