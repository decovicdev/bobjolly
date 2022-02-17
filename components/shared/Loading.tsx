import { VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Logo from './Logo';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <VStack h='100vh' justify='center'>
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: 0.2,
          scale: 1.5,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Logo />
      </motion.div>
    </VStack>
  );
};
export default Loading;
