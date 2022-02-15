import React from 'react';
import { Heading } from '@chakra-ui/react';

const HeadingH2 = ({...props}) => {
  return <Heading as="h2" size="lg" {...props} />
};

export default HeadingH2;