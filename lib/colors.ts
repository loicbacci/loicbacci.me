import { ColorMode } from '@chakra-ui/react';

// eslint-disable-next-line import/prefer-default-export
export const primary = (colorMode: ColorMode) => (colorMode === 'dark' ? 'primary_dark' : 'primary_light');
