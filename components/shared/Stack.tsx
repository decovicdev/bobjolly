import { Stack as ChekraStack, StackProps } from '@chakra-ui/react';

const Stack: React.FC<StackProps> = (props) => {
  return (
    <ChekraStack
      direction={['column', 'column', 'column', 'row']}
      spacing={['4', '4', '8']}
      align={['center', 'center', 'center', 'flex-start']}
      {...props}
    />
  );
};

export default Stack;
