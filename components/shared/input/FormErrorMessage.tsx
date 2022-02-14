import {
  FormErrorMessage as ChakraFormErrorMessage,
  FormErrorIcon,
} from '@chakra-ui/react';

const FormErrorMessage: React.FC = ({ children }) => {
  return (
    <ChakraFormErrorMessage bg='red.100' color='red.500' p='2' borderRadius='4'>
      <FormErrorIcon />
      {children}
    </ChakraFormErrorMessage>
  );
};
export default FormErrorMessage;
