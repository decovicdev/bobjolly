import React from 'react';
import { HStack } from '@chakra-ui/react';

import Container from './Container';
import Image from './Image';
import { Body1 } from './typography';
import Stack from './Stack';
import Link from './Link';

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <Container mt='4' p='4'>
      <Stack justify='space-between'>
        <Body1 color='gray'>
          Copyright © 2022 Bob Jolly. All rights reserved.
          <Link ml='2' href='/privacy-policy' textDecorationLine='underline'>
            Privacy Policy
          </Link>
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
