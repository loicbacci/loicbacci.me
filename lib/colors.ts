import { ColorMode } from '@chakra-ui/react';

export const primary = (colorMode: ColorMode) => {
  return colorMode === "dark" ? "primary_dark" : "primary_light";
}