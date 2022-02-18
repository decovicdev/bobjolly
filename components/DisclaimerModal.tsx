import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

import disclaimer from '../data/diclaimer';
import Modal from './shared/Modal';
import { Body1, Title } from './shared/typography';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = (props) => {
  return (
    <Modal
      {...props}
      size='3xl'
      color='black'
      scrollBehavior='inside'
      header={disclaimer.title}
      body={
        <VStack>
          <Title>{disclaimer.title}</Title>
          <Body1>{disclaimer.description}</Body1>
          {disclaimer.sections.map((section, index) => (
            <VStack key={index} align='flex-start' mb='8'>
              <Title fontWeight='medium'>{section.title}</Title>
              <Body1>{section.description}</Body1>
            </VStack>
          ))}
        </VStack>
      }
    />
  );
};
export default DisclaimerModal;
