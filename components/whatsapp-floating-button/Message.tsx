import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';

export interface MessageProps {
  time: string;
  name: string;
}

const Message: React.FC<MessageProps> = (props) => {
  const { time: initialTime, name } = props;

  return (
    <Box p="4" pb="2" maxW="200px" bg="white" borderRadius="md" pos="relative">
      <Box
        top={0}
        h="0"
        w="0"
        borderColor="transparent #fff transparent transparent"
        left="-10px"
        borderWidth="0 20px 20px 0"
        pos="absolute"
      />
      <Heading mb="1" color="blackAlpha.500" size="xs">
        {name}
      </Heading>
      <Text fontSize="sm">Hello there! 🤝</Text>
      <Text fontSize="sm">How can we help?</Text>
      <HStack justify="flex-end" spacing={1}>
        <Text fontSize="xs" textAlign="right" color="gray">
          {initialTime}
        </Text>
        <svg viewBox="0 0 16 15" width="16" height="15">
          <path
            fill="lightgray"
            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
          />
        </svg>
      </HStack>
    </Box>
  );
};
export default Message;
