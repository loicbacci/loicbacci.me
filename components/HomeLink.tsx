import React from 'react';
import { Text } from '@chakra-ui/react';
import MyListItem from './MyListItem';

interface HomeLinkProps {
  link: IHomeLink
}

const HomeLink = (props: HomeLinkProps) => {
  const { link } = props;

  const Title = (
    <Text>
      {link.title}
    </Text>
  );

  return (
    <MyListItem
      title={Title}
      href={link.link}
    />
  );
};

export default HomeLink;
