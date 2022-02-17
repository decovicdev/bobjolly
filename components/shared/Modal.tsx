import {
  ModalOverlay,
  Modal as ChakraModal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalProps as ChakraModalProps,
  ModalContentProps,
} from '@chakra-ui/react';
import React from 'react';

interface ModalProps extends Omit<ChakraModalProps, 'children'> {
  body?: React.ReactNode;
  header?: React.ReactNode;
  color?: string;
  modalContentProps?: ModalContentProps;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { body, color, header, modalContentProps, ...rest } = props;
  return (
    <ChakraModal isCentered motionPreset='slideInBottom' size='3xl' {...rest}>
      <ModalOverlay />
      <ModalContent {...modalContentProps}>
        <ModalHeader color={color || 'white'}>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb='4'>{body}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
export default Modal;
