import { createRef, useEffect, useState } from 'react';

/**
 * Check if an element is in viewport
 */
const useVisibility = (offset = 0): [boolean, React.RefObject<any>] => {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef<any>();

  const onScroll = (): void => {
    const { current } = currentElement;
    if (!current) {
      setIsVisible(false);

      return;
    }
    const { top } = current.getBoundingClientRect();
    setIsVisible(
      parseFloat(top) + offset >= 0 && top - offset <= window.innerHeight,
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return (): void => window.removeEventListener('scroll', onScroll);
  });

  return [isVisible, currentElement];
};

export { useVisibility };
