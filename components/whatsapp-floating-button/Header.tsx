import {
  HStack,
  Avatar,
  AvatarBadge,
  VStack,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";

export interface HeaderProps {
  handleClose: () => void;
  avatar: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { handleClose, avatar } = props;

  return (
    <HStack
      justify="space-between"
      px="4"
      minH="65px"
      w="100%"
      bg="#075e54"
      color="white"
    >
      <HStack spacing="4">
        <Avatar src={avatar}>
          <AvatarBadge bg="green.400" boxSize=".8rem" borderWidth="1px" />
        </Avatar>

        <VStack align="flex-start" spacing="0">
          <Heading as="h1" size="sm">
            WhatsApp
          </Heading>
          <Text fontSize="xs">Typically replies within 1 hour</Text>
        </VStack>
      </HStack>

      <Button
        variant="unstyled"
        size="sm"
        fontSize={"xl"}
        onClick={handleClose}
      >
        ✕
      </Button>
    </HStack>
  );
};
export default Header;
