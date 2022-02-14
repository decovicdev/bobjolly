import { chakra, Button as ChakraButton } from '@chakra-ui/react';

const Button = chakra(ChakraButton, {
  baseStyle: {
    fontSize: '20px',
    fontWeight: '700',
    px: '4',
    py: '5',
  },
});

export default Button;
