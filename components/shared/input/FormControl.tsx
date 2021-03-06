import {
  FormLabel,
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
} from '@chakra-ui/react';
import FormErrorMessage from './FormErrorMessage';

export interface FormControlProps extends ChakraFormControlProps {
  formLabel?: string;
  htmlFor?: string;
  labelColor?: string;
  errorMessage?: string;
}

const FormControl: React.FC<FormControlProps> = (props) => {
  const {
    formLabel,
    htmlFor,
    labelColor,
    children,
    isInvalid,
    errorMessage,
    ...rest
  } = props;

  return (
    <ChakraFormControl isInvalid={isInvalid} {...rest}>
      <FormLabel htmlFor={htmlFor} color={labelColor || 'white'}>
        {formLabel}
      </FormLabel>
      {children}
      {isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </ChakraFormControl>
  );
};
export default FormControl;
