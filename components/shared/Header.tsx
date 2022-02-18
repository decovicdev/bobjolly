import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Container from './Container';
import { Title } from './typography';
import ButtonOutline from './button/ButtonOutline';
import Stack from './Stack';
import Logo from './Logo';
import Link from './Link';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const router = useRouter();

  return (
    <Container>
      <nav>
        <Stack py='8' justify='space-between'>
          <Link href='/'>
            <Logo />
          </Link>

          <Stack spacing='8' alignItems='center'>
            <Title
              color={{
                base: 'black',
                lg: 'white',
              }}
            >
              Personalized Whacky Birthday Music Videos
            </Title>
            <Wrap justify='center' spacing='4'>
              <WrapItem>
                <ButtonOutline onClick={() => router.push('/#booknow')}>
                  Book Now
                </ButtonOutline>
              </WrapItem>
              <WrapItem>
                <ButtonOutline onClick={() => router.push('/contact')}>
                  Contact
                </ButtonOutline>
              </WrapItem>
            </Wrap>
          </Stack>
        </Stack>
      </nav>
    </Container>
  );
};
export default Header;
