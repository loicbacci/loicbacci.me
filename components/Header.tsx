import NLink from 'next/link'
import NImage from "next/image";
import { name } from '../lib/constants'
import { VStack } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { getProfileUrl } from "../lib/api";

interface HeaderProps {
  home?: boolean
}

const Header = ({ home }: HeaderProps) => {
  const [profileUrl, setProfileUrl] = useState(null as string | null);

  useEffect(() => {
    getProfileUrl().then(setProfileUrl)
  }, []);

  console.log(profileUrl);

  const title = (
    <h1 className="text-4xl lg:text-5xl font-bold">
      {name}
    </h1>
  );

  return (
    <VStack spacing={4}>
      <div className="w-40 lg:w-48 h-40 lg:h-48 relative">
        {profileUrl && <NImage className="rounded-full" src={profileUrl} layout="fill" objectFit="cover"/>}
      </div>

      {home
        ? title
        : (
          <NLink href="/" passHref>
            <a>
              <h1 className={"text-4xl lg:text-5xl font-bold primary-text"}>
                {name}
              </h1>
            </a>
            
          </NLink>
        )
      }
    </VStack>
  )
}

export default Header
