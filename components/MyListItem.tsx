import { ListItem, Stack, Text } from '@chakra-ui/react';
import MyLink from './base/MyLink';

interface MyListItemProps {
  title: React.ReactNode,
  description?: string,
  href: string
}

const MyListItem = ({ title, description, href }: MyListItemProps) => {
  return (
    <ListItem>
      <Stack spacing={0}>
        <MyLink href={href} showArrow>
          {title}
        </MyLink>

        {description && <Text>{description}</Text>}
      </Stack>

    </ListItem>
  )
}

export default MyListItem;