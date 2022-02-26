import React from 'react';
import MyListItem from './MyListItem';
import { Box, Center, Heading, HStack, List, Stack, Text } from '@chakra-ui/react';


interface HomeLinkProps {
  link: IHomeLink
}

const HomeLink = (props: HomeLinkProps) => {
  const { link } = props;

  const Title = (
    <Text>
      {link.title}
    </Text>
  )

  return (
    <MyListItem
      title={Title}
      href={link.link}
    />
  );
};

export default HomeLink;