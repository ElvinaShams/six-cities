import { useEffect } from 'react';

const useKeyPress = (handler: () => void) => {
  useEffect(() => {
    const downHandler = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        handler();
      }
    };

    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  });
};

export { useKeyPress };
