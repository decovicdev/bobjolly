import { ButtonProps } from '@chakra-ui/react';
import React from 'react';
import Button from './Button';

const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      bg='primary'
      colorScheme='pink'
      color='white'
      borderRadius='full'
      py='6'
      px='8'
      {...props}
    />
  );
};
export default ButtonPrimary;
