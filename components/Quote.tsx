import React from 'react';
import { Text, Box } from '@chakra-ui/react';

const Quote = ({...props}: any) => {
  return (
    <Box bg="gray.700" borderWidth="1px" borderRadius="md" px={3} py={1} {...props}/>
  );
};

export default Quote;