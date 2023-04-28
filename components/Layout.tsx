import React from 'react';
import { Stack } from '@chakra-ui/react';
import Header from './Header';
import BasicHead from './BasicHead';

interface LayoutProps {
  children: React.ReactNode
  profileUrl?: string
  home?: boolean
  noHeader?: boolean
}

const Layout = ({
  children, profileUrl, home, noHeader,
}: LayoutProps) => (
  <div className="container pb-10 pt-8 lg:pt-16 mb-10 mx-auto px-4 lg:px-20">
    <BasicHead />

    <Stack>
      {!noHeader
        ? <Header home={home} profileUrl={profileUrl} />
        : ''}

      <main>
        <div className="flex flex-col space-y-2">
          {children}
        </div>
      </main>
    </Stack>

  </div>
);

export default Layout;
