import NLink from 'next/link'
import { name } from '../lib/constants'
import { Heading, Image, Link, useColorMode, VStack } from '@chakra-ui/react';
import { primary } from '../lib/colors';

interface HeaderProps {
  home?: boolean
}

const Header = ({ home }: HeaderProps) => {
  const { colorMode } = useColorMode();

  const title = (
    <Heading as="h1" size="2xl" fontWeight="bold">
      {name}
    </Heading>
  );

  return (
    <VStack spacing={4}>
      <Image
        borderRadius="full"
        boxSize={{ base: "50%", sm: '30%' }}
        src="/images/profile.jpg"
        alt="Profile picture"
      />

      {home
        ? title
        : (
          <NLink href="/" passHref>
            <Link color={primary(colorMode)}>
              {title}
            </Link>
          </NLink>
        )
      }
    </VStack>
  )
}

export default Header
