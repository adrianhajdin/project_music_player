import { useState, useEffect } from 'react';

// return the scroll position of a component (not window)
export const useScrollPosition = (ref, isFetching) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScrollPosition = () => {
    setScrollPosition(ref.current.scrollTop);
  };

  useEffect(() => {
    if (!isFetching) {
      ref.current.addEventListener('scroll', updateScrollPosition);
      updateScrollPosition();
    }

    return () => ref?.current?.removeEventListener('scroll', updateScrollPosition);
  }, [isFetching]);

  return scrollPosition;
};
