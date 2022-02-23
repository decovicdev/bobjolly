import React from 'react';
import { Button, HStack, Input } from '@chakra-ui/react';

export interface FooterProps {
  value: string;
  handleChange: (value: string) => void;
  handleSubmit: () => void;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { value, handleChange, handleSubmit } = props;

  return (
    <HStack bg="#f0f0f0" py="2" px="4">
      <Input
        placeholder="Type a message..."
        bg="white"
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        size="lg"
        borderRadius="full"
      />
      <Button
        disabled={!Boolean(value.length)}
        variant="unstyled"
        size="sm"
        fontSize={'xl'}
        onClick={handleSubmit}
      >
        <svg viewBox="0 0 24 24" fill="gray">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </Button>
    </HStack>
  );
};
export default Footer;
