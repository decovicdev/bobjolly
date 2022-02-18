import React from 'react';
import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import Container from '../shared/Container';
import { Body1 } from '../shared/typography';
import Image from '../shared/Image';
import Stack from '../shared/Stack';

const Carousel = dynamic(() => import('nuka-carousel'), { ssr: false });

const testimonials = [
  {
    name: 'Gil Chirurg',
    country: 'Israel',
    testimony: `Amazing! Funniest video! Great service,the product has arrived faster than expected and was exactly what I wanted it to be. Highly recommended!`,
  },
  {
    name: 'Captain America',
    country: 'Spain',
    testimony: ` Awful! Absolutely Awful! What a ghastly sence of humor. Can't believe I paid 12 bucks for this s#$%`,
  },
  {
    name: 'Erin Wade',
    country: 'United States',
    testimony: `Delivered it, same day and it was exactly what I wanted, and even threw in a second version, for free! Will be working with him in the future again.`,
  },
];

interface Section1Props {}

const Section1: React.FC<Section1Props> = (props) => {
  return (
    <Box
      bgImage='url(/images/center-bg.jpg)'
      bgRepeat='no-repeat'
      bgPos='center top'
      my='20'
    >
      <Container>
        <Stack
          justify='center'
          direction={{
            base: 'column-reverse',
            lg: 'row-reverse',
          }}
          align='center'
          minH='500px'
        >
          {Carousel && (
            <Carousel
              withoutControls
              autoplay
              wrapAround
              pauseOnHover
              style={{
                maxWidth: '660px',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Box maxW='600px' key={index} color='secondary' mx='20'>
                  <Body1 fontStyle='italic'>{testimonial.testimony}</Body1>
                  <Body1 mt='4'>
                    <strong> {testimonial.name}</strong>, {testimonial.country}
                  </Body1>
                </Box>
              ))}
            </Carousel>
          )}
          <Image
            objectFit='contain'
            src='/images/testi-quote.png'
            alt='testimonial quote'
          />
        </Stack>
      </Container>
    </Box>
  );
};
export default Section1;
