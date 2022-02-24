import { Button, Circle } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { WhatsappIcon } from "./Icons";

const variants = {
  animate: {
    boxShadow: "0 0 0 15px #25d366",
    opacity: 0,
  },
  initial: {
    boxShadow: " 0 0 0 0 #25d366",
    opacity: 1,
  },
};

const style = {
  width: 60,
  height: 60,
  borderRadius: "50%",
  position: "absolute",
} as const;

const transition = {
  duration: 1.2,
  ease: [0.4, 0, 0.2, 1],
  repeat: Infinity,
  repeatDelay: 0.5,
  repeatType: "loop",
} as const;

interface FloatingButtonProps {
  handleToggle: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = (props) => {
  const { handleToggle } = props;
  return (
    <Button
      aria-label="Whatsapp Floating Button"
      variant="unstyled"
      outline="none"
      _focus={{
        outline: "none",
      }}
      pos="absolute"
      bottom={12}
      right="20px"
      onClick={handleToggle}
    >
      <motion.div
        style={style}
        variants={variants}
        initial="initial"
        animate="animate"
        transition={transition}
      />
      <Circle
        size="60px"
        bg="#25D366"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        p=".5rem"
        boxShadow="rgb(0 0 0 / 15%) 0px 4px 12px 0px"
      >
        <WhatsappIcon />
      </Circle>
    </Button>
  );
};
export default FloatingButton;
