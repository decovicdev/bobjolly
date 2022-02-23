import { chakra, Circle, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const TypingDot = chakra(Circle, {
  baseStyle: {
    boxSize: '8px',
    bg: 'rgba(20, 105, 69, 0.7)'
  }
});

const transition = (i: number) => ({
  duration: 1.4,
  repeat: Infinity,
  delay: i * 0.1
});

const variants = {
  animate: {
    translateY: [0, -7, 0, 0],
    opacity: 1
  },
  initial: {
    translateY: 0,
    opacity: 0.7
  }
};

interface TypingProps {}

const Typing: React.FC<TypingProps> = (props) => {
  return (
    <HStack
      p="24px"
      borderRadius="20px"
      borderBottomLeftRadius="0"
      bg="#e6f8f1"
      h="17px"
      w="max-content"
    >
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <motion.div
            key={index}
            variants={variants}
            animate="animate"
            initial="initial"
            transition={transition(index)}
          >
            <TypingDot />
          </motion.div>
        ))}
    </HStack>
  );
};

export default Typing;
