import { Heading, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactConfetti from "react-confetti";

import ButtonPrimary from "../components/shared/button/ButtonPrimary";
import { Body1 } from "../components/shared/typography";
import useScreenSize from "../hooks/useScreenSize";

interface ThankyouProps {}

const Thankyou: NextPage<ThankyouProps> = (props) => {
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.track("Purchase", { value: 11.95, currency: "USD" });
      });
  }, []);

  const router = useRouter();
  const { n } = router.query;

  const { height, width } = useScreenSize();

  return (
    <VStack px="2" overflow="hidden" spacing="10" justify="center" minH="100vh">
      <ReactConfetti width={width - 8} height={height - 8} />
      <Heading
        fontStyle="italic"
        fontSize={{
          base: "2xl",
          md: "3xl",
          lg: "6xl",
        }}
        color="secondary"
      >
        Thank you {n}!
      </Heading>
      <Body1 color="gray">
        Thanks for ordering. We will get back to you shortly.
      </Body1>
      <ButtonPrimary
        shadow="xl"
        onClick={() => router.push("/")}
        bg="secondary"
        px="20"
      >
        Go Home
      </ButtonPrimary>
    </VStack>
  );
};
export default Thankyou;
