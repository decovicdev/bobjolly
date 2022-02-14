import React from 'react';
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

export interface InputProps extends ChakraInputProps {
  leftIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = (props) => {
  const { leftIcon, ...rest } = props;
  return (
    <InputGroup>
      {leftIcon && (
        <InputLeftElement mt='1' pointerEvents='none'>
          {leftIcon}
        </InputLeftElement>
      )}
      <ChakraInput
        variant='filled'
        bg='white'
        _focus={{
          bg: 'gray.100',
        }}
        {...rest}
      />
      ;
    </InputGroup>
  );
};
export default Input;
