import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import Hero from '../components/shared/Hero';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';

const B: NextPage = (props) => {
  return (
    <Box w='full'>
      <Hero />
      <Section1 />
      <Section2 />
    </Box>
  );
};
export default B;
