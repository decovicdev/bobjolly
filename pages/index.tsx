import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { lazy, Suspense } from "react";

import Hero from "../components/home/Hero";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import { useModalContext } from "../hooks/useContext";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const DisclaimerModal = lazy(() => import("../components/DisclaimerModal"));
const SampleVideoModal = lazy(() => import("../components/SampleVideoModal"));

const Home: NextPage = (props) => {
  const {
    isDisclaimerModalOpen,
    onDisclaimerModalClose,
    isSampleVideoModalOpen,
    onSampleVideoModalClose,
  } = useModalContext();

  return (
    <Box w="full" pos="relative">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <Hero />
      <Section1 />
      <Section2 />
      <FloatingWhatsApp />
    </Box>
  );
};
export default Home;
