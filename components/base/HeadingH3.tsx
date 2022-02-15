import React from 'react';
import { Heading } from '@chakra-ui/react';

const HeadingH3 = ({...props}) => {
  return <Heading as="h3" size="md" {...props} />
};

export default HeadingH3;