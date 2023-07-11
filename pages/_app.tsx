import type { AppProps } from 'next/app';
import {
  ChakraProvider, Image, ThemeConfig, extendTheme,
} from '@chakra-ui/react';
import { PortableTextComponentsProvider } from '@portabletext/react';
import React from 'react';
import { getImageUrlFromRef } from '../lib/api';
import '../styles/globals.css';

const D = () => <div className="py-1" />;

const comps = {
  marks: {
    br: D,
  },
  types: {
    image: ({ value }: any) => {
      // eslint-disable-next-line no-underscore-dangle
      const url = getImageUrlFromRef(value?.asset._ref);
      return <Image src={url} objectFit="contain" />;
    },
  },
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const styles = {
  global: () => ({
    body: {
      bg: '',
    },
  }),
};

const theme = extendTheme({ config, styles });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PortableTextComponentsProvider components={comps}>
      <ChakraProvider resetCSS={false} theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ChakraProvider>
    </PortableTextComponentsProvider>
  );
}

export default MyApp;
