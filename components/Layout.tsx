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
    <div className="container py-6 mb-10 mx-auto px-4">
      <BasicHead />

      <Stack>
        {!noHeader ?
          home ? <Header home  /> : <Header  /> :
          ''
        }

        <main className="pt-4">
          <div className="flex flex-col space-y-2">
            {children}
          </div>
        </main>
      </Stack>

    </div>
  )
}

export default Layout