import {
  InputGroup,
  InputLeftElement,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';
import FormControl from './FormControl';

interface TextareaControlProps extends TextareaProps {
  name: string;
  label?: string;
  isRequired?: boolean;
  leftIcon?: React.ReactNode;
}

const TextareaControl: React.FC<TextareaControlProps> = (props) => {
  const { leftIcon, name, label, isRequired, ...rest } = props;
  const [field, meta] = useField(name);

  return (
    <FormControl
      formLabel={label}
      htmlFor={name}
      errorMessage={meta.error}
      isInvalid={!!meta.touched && !!meta.error}
      isRequired={isRequired}
    >
      <InputGroup>
        {leftIcon && (
          <InputLeftElement pointerEvents='none'>{leftIcon}</InputLeftElement>
        )}
        <Textarea pl='10' variant='filled' bg='white' {...field} {...rest} />;
      </InputGroup>
    </FormControl>
  );
};
export default TextareaControl;
