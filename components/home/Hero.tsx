import { Box, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { lazy, Suspense } from "react";

import { useModalContext } from "../../hooks/useContext";
import ButtonPrimary from "../shared/button/ButtonPrimary";
import Container from "../shared/Container";
import Stack from "../shared/Stack";
import { Heading, SubHeading } from "../shared/typography";

const HeroIframe = dynamic(() => import("../shared/iframe/HeroIframe"));

interface HeroProps {}

const Hero: React.FC<HeroProps> = (props) => {
  const router = useRouter();

  const { onSampleVideoModalOpen } = useModalContext();

  return (
    <VStack align="stretch" minH="80vh" justify="center">
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
              <ButtonPrimary onClick={onSampleVideoModalOpen}>
                Sample Video
              </ButtonPrimary>
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
            <HeroIframe />
          </Box>
        </Stack>
      </Container>
    </VStack>
  );
};
export default Hero;
