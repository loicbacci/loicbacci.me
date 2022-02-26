import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Image, Text } from '@chakra-ui/react';
import theme from '../theme';
import { PortableTextComponentsProvider } from '@portabletext/react';
import React from 'react';
import MyLink from '../components/base/MyLink';
import HeadingH1 from '../components/base/HeadingH1';
import HeadingH2 from '../components/base/HeadingH2';
import HeadingH3 from '../components/base/HeadingH3';
import { getImageUrlFromRef } from '../lib/api';

const comps = {
  marks: {
    link: ({value, children}: any) => (
      <MyLink href={value?.href}>
        {children}
      </MyLink>
    )
  },
  block: {
    h1: HeadingH1,
    h2: HeadingH2,
    h3: HeadingH3,
    normal: Text
  },
  types: {
    image: ({ value }: any) => {
      const url = getImageUrlFromRef(value?.asset._ref);
      return <Image
        src={url}
        objectFit="contain"
      />
    }
  }
}
/*
https://cdn.sanity.io/images/w3vejcsi/production/image-3692cd78f17753135c7ec8abbd7770f7547b97b8-2294x1600-png
https://cdn.sanity.io/images/w3vejcsi/production/3692cd78f17753135c7ec8abbd7770f7547b97b8-2294x1600.png
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PortableTextComponentsProvider components={comps}>
        <Component {...pageProps} />
      </PortableTextComponentsProvider>
    </ChakraProvider>
  )
}

export default MyApp
