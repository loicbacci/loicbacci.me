import Header from './Header'
import BasicHead from './BasicHead'
import { Container, Stack } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode
  home?: boolean
  noHeader?: boolean
}

const Layout = ({ children, home, noHeader }: LayoutProps) => {
  return (
    <Container py={6} mb={10}>
      <BasicHead />

      <Stack>
        {!noHeader ?
          home ? <Header home /> : <Header /> :
          ''
        }

        <main>
          <Stack>
            {children}
          </Stack>
        </main>
      </Stack>

    </Container>
  )
}

export default Layout