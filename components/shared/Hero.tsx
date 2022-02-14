import { Box, HStack, useDisclosure, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import ButtonPrimary from "./button/ButtonPrimary";
import Container from "./Container";
import Modal from "./Modal";
import Stack from "./Stack";
import { Heading, SubHeading, Title } from "./typography";

interface HeroProps {}

const Hero: React.FC<HeroProps> = (props) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack align="stretch" minH="80vh" justify="center">
      {isOpen && <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />}
      <Container>
        <Stack justify="space-between">
          <VStack
            maxW="600px"
            align={{
              base: "center",
              lg: "flex-start",
            }}
          >
            <Heading>Send someone a</Heading>
            <Heading color="primary">
              Personalized Birthday Music Video @ Just $11.95
            </Heading>
            <Stack pt="8">
              <Heading>AND GET ONE</Heading>
              <Heading color="primary">FREE!</Heading>
            </Stack>
            <SubHeading color="secondary">Delivery within 24 hours</SubHeading>
            <Stack>
              <ButtonPrimary onClick={onOpen}>Sample Video</ButtonPrimary>
              <ButtonPrimary
                bg="secondary"
                onClick={() => router.push("/#booknow")}
              >
                Book Now
              </ButtonPrimary>
            </Stack>
          </VStack>
          <Box
            borderRadius="2xl"
            w={["100%", "510px", "510px"]}
            h="340px"
            overflow="hidden"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1Wwu1nD4uzs?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={false}
            />
          </Box>
        </Stack>
      </Container>
    </VStack>
  );
};
export default Hero;
