import {
  ModalOverlay,
  Modal as ChakraModal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, onOpen } = props;
  return (
    <ChakraModal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset='slideInBottom'
      size='3xl'
    >
      <ModalOverlay />
      <ModalContent py='4' bgImage='url("/images/gift-pattern.jpg")'>
        <ModalHeader color='white'>Sample Video</ModalHeader>
        <ModalCloseButton />
        <ModalBody mb='4'>
          <iframe
            loading='lazy'
            className='youtube-video'
            width='100%'
            height='440'
            src='https://www.youtube.com/embed/FyB6oO4t2Yw?rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=ytplayer'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen={true}
          />
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
export default Modal;
