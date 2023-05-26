import { useEffect } from 'react';

const useClickOutside = (elemRef, onClickOutside) => {
  useEffect(() => {
    const clickHandler = e => {
      const el = elemRef.current;
      const { target } = e;

      if (!el || el === target || el.contains(target)) return;
      onClickOutside();
    };

    window.addEventListener('click', clickHandler);

    return () => window.removeEventListener('click', clickHandler);
  }, [elemRef.current]);
};

export default useClickOutside;
