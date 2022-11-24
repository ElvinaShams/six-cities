import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    let maybeHandler = (event: Event) => {
      const domNode = ref.current;

      if (domNode && !domNode.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', maybeHandler);
    document.addEventListener('touchstart', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
      document.removeEventListener('touchstart', maybeHandler);
    };
  });
  return ref;
};

export { useOnClickOutside };
