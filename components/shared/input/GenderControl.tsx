import React, { useMemo } from 'react';
import { useField } from 'formik';
import { AnimatePresence, AnimationProps, motion } from 'framer-motion';

import { Title } from '../typography';
import { Button, FormLabel, VStack } from '@chakra-ui/react';

const femaleAnimation = {
  animate: {
    rotate: 90,
    stroke: '#FF869B',
  },
  initial: {
    rotate: 0,
    stroke: 'none',
  },
};

const maleAnimation = {
  animate: {
    rotate: -45,
    stroke: '#99CCFF',
  },
  initial: {
    rotate: 0,
    stroke: 'none',
  },
};

interface GenderControlProps {
  name: string;
}

const GenderControl: React.FC<GenderControlProps> = (props) => {
  const [feilds, meta, helpers] = useField(props.name);
  const { value } = meta;
  const { setValue } = helpers;
  const isMale = useMemo(() => value === 'He', [value]);

  return (
    <AnimatePresence>
      <VStack color='white' w='max-content' spacing='0'>
        <FormLabel>Gender</FormLabel>
        <Title>{value}</Title>
        <Button
          variant='unstyled'
          w='60px'
          h='60px'
          onClick={() => {
            setValue(value === 'He' ? 'She' : 'He');
          }}
          _focus={{
            outline: 'none',
          }}
        >
          <svg width='60' height='60' viewBox='0 0 54 32' fill='none'>
            {!isMale ? (
              <motion.g
                {...femaleAnimation}
                strokeWidth='6'
                strokeLinecap='round'
              >
                <circle cx='16' cy='16' r='13' fill='#FCD6DD' />
                <line x1='31' y1='16' x2='51' y2='16' />
                <line x1='42' y1='10' x2='42' y2='22' />
              </motion.g>
            ) : (
              <motion.g
                {...maleAnimation}
                strokeLinecap='round'
                strokeWidth='6'
              >
                <line
                  x1='40.2426'
                  y1='7'
                  x2='48.7279'
                  y2='15.4853'
                  strokeWidth='6'
                  strokeLinecap='round'
                />
                <line
                  x1='3'
                  y1='-3'
                  x2='15'
                  y2='-3'
                  transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 36 24.7279)'
                />
                <circle cx='16.1421' cy='16.1421' r='13' fill='#DAEAFA' />
                <line x1='29' y1='16' x2='49' y2='16' />
              </motion.g>
            )}
          </svg>
        </Button>
      </VStack>
    </AnimatePresence>
  );
};

export default GenderControl;
