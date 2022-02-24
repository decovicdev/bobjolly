import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";

import Hero from "../components/home/Hero";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import { useModalContext } from "../hooks/useContext";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import dynamic from "next/dynamic";

const DisclaimerModal = dynamic(() => import("../components/DisclaimerModal"));
const SampleVideoModal = dynamic(
  () => import("../components/SampleVideoModal")
);

const Home: NextPage = (props) => {
  const {
    isDisclaimerModalOpen,
    onDisclaimerModalClose,
    isSampleVideoModalOpen,
    onSampleVideoModalClose,
  } = useModalContext();

  return (
    <Box w="full" pos="relative">
      {isSampleVideoModalOpen && (
        <SampleVideoModal
          isOpen={isSampleVideoModalOpen}
          onClose={onSampleVideoModalClose}
        />
      )}
      {isDisclaimerModalOpen && (
        <DisclaimerModal
          isOpen={isDisclaimerModalOpen}
          onClose={onDisclaimerModalClose}
        />
      )}
      <Hero />
      <Section1 />
      <Section2 />
      <FloatingWhatsApp />
    </Box>
  );
};
export default Home;
