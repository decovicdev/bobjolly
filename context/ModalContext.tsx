import { useDisclosure } from '@chakra-ui/react';
import React, { createContext } from 'react';

interface Context {
  isDisclaimerModalOpen: boolean;
  onDisclaimerModalClose: () => void;
  onDisclaimerModalOpen: () => void;
  isSampleVideoModalOpen: boolean;
  onSampleVideoModalClose: () => void;
  onSampleVideoModalOpen: () => void;
}

const ModalContext = createContext<Context>({} as Context);

const ModalProvider: React.FC = ({ children }) => {
  const {
    isOpen: isDisclaimerModalOpen,
    onOpen: onDisclaimerModalOpen,
    onClose: onDisclaimerModalClose,
  } = useDisclosure();

  const {
    isOpen: isSampleVideoModalOpen,
    onOpen: onSampleVideoModalOpen,
    onClose: onSampleVideoModalClose,
  } = useDisclosure();

  return (
    <ModalContext.Provider
      value={{
        isDisclaimerModalOpen,
        onDisclaimerModalClose,
        onDisclaimerModalOpen,
        isSampleVideoModalOpen,
        onSampleVideoModalClose,
        onSampleVideoModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
