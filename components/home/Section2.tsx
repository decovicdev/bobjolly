import { Box } from '@chakra-ui/react';

import Container from '../shared/Container';
import Image from '../shared/Image';
import Stack from '../shared/Stack';
import { Body1, SubHeading, Title } from '../shared/typography';
import BookingForm, { HandleSubmit } from './BookingForm';

interface Section2Props {}

const Section2: React.FC<Section2Props> = (props) => {
  return (
    <Box
      bgImage='url("/images/gift-top.png"),url("/images/gift-pattern.jpg")'
      bgRepeat='no-repeat, repeat'
      id='booknow'
      minH='800px'
    >
      <Container color='white' py='12'>
        <Box my='8'>
          <Body1 textAlign='center'>Funny Birthday Music Video</Body1>
          <Title textAlign='center'>
            It's just $11.95. Delivery within 24 hours!
          </Title>
        </Box>
        <Stack w='full' justify='space-between'>
          <Box
            w='full'
            maxW='550px'
            p='4'
            borderRadius='2xl'
            boxShadow='inset 0 0 2000px rgba(255,255, 255, .2), 0 0 2px rgba(255,255, 255, .4)'
            backdropFilter={{
              base: '',
              lg: 'blur(10px)',
            }}
            color='#000'
          >
            <SubHeading color='#fff' textAlign='center' my='4'>
              Place your order now.
            </SubHeading>

            {<BookingForm />}
          </Box>
          <Image src='/images/gift-img.png' alt='gift image' />
        </Stack>
      </Container>
    </Box>
  );
};

export default Section2;
