import React from 'react';
import { HStack, Link, ListIcon, useColorMode } from '@chakra-ui/react';
import NLink from 'next/link';
import { primary } from '../../lib/colors';
import { FiArrowRight } from 'react-icons/fi';

const MyLink = ({ href, showArrow, ...props}: any) => {
  const { colorMode } = useColorMode();

  const link = (
    <NLink href={href} passHref>
      <Link {...props} color={primary(colorMode)}/>
    </NLink>
  );

  if (showArrow) {
    return (
      <HStack color={primary(colorMode)}>
        <ListIcon as={FiArrowRight} />
        {link}
      </HStack>
    )
  }

  return link;
};

export default MyLink;