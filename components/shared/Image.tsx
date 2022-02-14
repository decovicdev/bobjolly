import { ImageProps, Image as ChakraImage } from '@chakra-ui/react';
import React from 'react';

const Image: React.FC<ImageProps> = (props) => {
  return <ChakraImage {...props} />;
};
export default Image;
