import React, { createElement, Fragment, useEffect, useState } from 'react';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { Heading, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react';
import HeadingH2 from '../components/base/HeadingH2';
import HeadingH1 from '../components/base/HeadingH1';
import HeadingH3 from '../components/base/HeadingH3';
import Quote from '../components/Quote';
import MyLink from '../components/base/MyLink';

export const useProcessor = (html: string) => {
  const [Content, setContent] = useState(<></>);

  useEffect(() => {
    unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, {
        createElement: React.createElement,
        components: {
          h1: HeadingH1,
          h2: HeadingH2,
          h3: HeadingH3,
          p: Text,
          blockquote: Quote,

          a: MyLink,

          ul: UnorderedList,
          ol: OrderedList,
          li: ListItem,
        },
        Fragment
      })
      .process(html)
      .then(file => setContent(file.result))
  }, [html]);

  return Content;

}
