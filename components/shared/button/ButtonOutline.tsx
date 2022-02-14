import { ButtonProps } from '@chakra-ui/react';
import React from 'react';
import Button from './Button';

const ButtonOutline: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      borderColor='white'
      borderWidth='2px'
      borderRadius='full'
      bg={{
        base: 'secondary',
        lg: 'transparent',
      }}
      color='white'
      variant='outline'
      _hover={{
        bg: 'white',
        color: 'primary',
      }}
      {...props}
    />
  );
};
export default ButtonOutline;
