import { List } from '@chakra-ui/react';
import MyListItem from './MyListItem';

interface ProjectListProps {
  projectsMeta: ProjectMeta[]
}

const ProjectList = ({ projectsMeta }: ProjectListProps) => {
  return (
    <List spacing={3}>
      {projectsMeta.map(({ slug, title, description }) => {
        const href = `/projects/${slug}`;

        return (
          <MyListItem
            href={href}
            title={title}
            description={description}
            key={slug}
          />
        )
      })}
    </List>
  )
}

export default ProjectList
