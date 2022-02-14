import React from 'react';
import { Box, HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import Container from './Container';
import Image from './Image';
import { Body1 } from './typography';
import Stack from './Stack';

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <Container mt='4' p='4'>
      <Stack justify='space-between'>
        <Body1 color='gray'>
          Copyright © 2022 Bob Jolly. All rights reserved.
          <NextLink href='/privacy-policy'>
            <Link ml='2' textDecorationLine='underline'>
              Privacy Policy
            </Link>
          </NextLink>
        </Body1>
        <HStack color='gray.400'>
          <Link
            href='https://www.youtube.com/channel/UCFYSZWeyE6_aNfCZbTCFeGQ'
            target='_blank'
            rel='noreferrer'
          >
            <Image src='/images/youtube.png' alt='youtube' boxSize='28px' />
          </Link>
          <Link
            href='https://www.facebook.com/Bob-Jolly-1116732775008161'
            target='_blank'
            rel='noreferrer'
          >
            <Image src='/images/facebook.png' alt='facebook' boxSize='28px' />
          </Link>
          <Link
            href='https://www.instagram.com/bobdangerjolly/'
            target='_blank'
            rel='noreferrer'
          >
            <Image src='/images/instagram.png' alt='instagram' boxSize='28px' />
          </Link>
        </HStack>
      </Stack>
    </Container>
  );
};
export default Footer;
