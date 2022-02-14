import { chakra, Text as ChekraText } from '@chakra-ui/react';

const Text = chakra(ChekraText, {
  baseStyle: {
    textAlign: ['center', 'center', 'center', 'left'],
  },
});

const Heading = chakra(Text, {
  baseStyle: {
    fontSize: {
      base: '30px',
      lg: '46px',
    },
    fontWeight: '800',
    lineHeight: '1.1',
  },
});

const SubHeading = chakra(Text, {
  baseStyle: {
    fontSize: '30px',
    fontWeight: '600',
  },
});

const Title = chakra(Text, {
  baseStyle: {
    fontSize: '20px',
  },
});

const Body1 = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
  },
});

export { Heading, SubHeading, Title, Body1 };
