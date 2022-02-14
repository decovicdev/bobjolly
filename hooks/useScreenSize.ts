import { useLayoutEffect, useState } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{
    height: number;
    width: number;
  }>({
    height: 0,
    width: 0,
  });
  useLayoutEffect(() => {
    const handleResize = () =>
      setScreenSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return screenSize;
};

export default useScreenSize;
