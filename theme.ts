import { extendTheme } from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },

  colors: {
    primary_light: '#ac1c1e',
    primary_dark: '#ec8385',
  },

  styles: {
    global: (props: any) => ({
      body: {
        fontSize: ['md', 'xl'],
      },
      a: {
        color: mode('primary_light', 'primary_dark')(props),
      },
    }),
  },
});

export default theme;
