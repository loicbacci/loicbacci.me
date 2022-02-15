import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';
import MyListItem from './MyListItem';

const GitHubLink = () => {
  return (
    <MyListItem
      title={(
        <HStack>
          <FiGithub />
          <Text>GitHub</Text>
        </HStack>
      )}
      href="https://github.com/loicbacciga"
    />
  );
};

export default GitHubLink;