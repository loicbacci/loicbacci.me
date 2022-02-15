import React from 'react';
import { Heading } from '@chakra-ui/react';

const HeadingH1 = ({...props}) => {
  return <Heading as="h1" size="xl" {...props} />
};

export default HeadingH1;