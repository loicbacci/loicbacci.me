import NLink from 'next/link';
import NImage from 'next/image';
import { VStack } from '@chakra-ui/react';
import React from 'react';
import { name } from '../lib/constants';

interface HeaderProps {
  profileUrl?: string
  home?: boolean
}

const Header = ({ profileUrl, home }: HeaderProps) => {
  const title = (
    <h1 className="text-4xl lg:text-5xl font-bold">
      {name}
    </h1>
  );

  return (
    <VStack spacing={4}>
      <div className="w-40 lg:w-48 h-40 lg:h-48 relative">
        {profileUrl && <NImage className="rounded-full" src={profileUrl} layout="fill" objectFit="cover" />}
      </div>

      {home
        ? title
        : (
          <NLink href="/" passHref>
            <div className="icon-link">
              <h1 className="text-4xl lg:text-5xl font-bold primary-text">
                {name}
              </h1>
            </div>

          </NLink>
        )}
    </VStack>
  );
};

export default Header;
