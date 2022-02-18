import { HStack, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Logo from './Logo';

const transition = {
  duration: 0.8,
  ease: 'linear',
  repeat: Infinity,
  repeatType: 'loop',
} as const;
const initial = {
  opacity: 0.3,
  scale: 1,
};
const animate = {
  opacity: 0,
  scale: 2,
};

const style = {
  borderRadius: '50%',
  aspectRatio: '1',
  background: 'purple',
  width: 200,
  position: 'absolute',
} as const;

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <VStack h='100vh' justify='center'>
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        style={style}
      />
      <HStack
        zIndex={1}
        boxSize={240}
        justify='center'
        borderRadius='50%'
        bg='white'
        boxShadow='lg'
      >
        <Logo />
      </HStack>
    </VStack>
  );
};
export default Loading;
