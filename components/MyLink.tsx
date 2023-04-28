import React from 'react';
import {
  HStack, Link, ListIcon, useColorMode,
} from '@chakra-ui/react';
import NLink from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { primary } from '../lib/colors';

const MyLink = ({ href, showArrow, ...props }: any) => {
  const { colorMode } = useColorMode();

  const link = (
    <NLink href={href} passHref>
      <Link {...props} color={primary(colorMode)} />
    </NLink>
  );

  if (showArrow) {
    return (
      <HStack color={primary(colorMode)}>
        <ListIcon as={FiArrowRight} />
        {link}
      </HStack>
    );
  }

  return link;
};

export default MyLink;
