import React from 'react';
import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

const Link: React.FC<LinkProps> = (props) => {
  const { href, ...rest } = props;

  return (
    <NextLink
      href={{
        pathname: href,
      }}
      passHref
    >
      <ChakraLink {...rest} />
    </NextLink>
  );
};
export default Link;
