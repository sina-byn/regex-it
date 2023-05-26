import { useState } from 'react';

const useSwitch = () => {
  const [state, setState] = useState(false);
  const toggler = val =>
    setState(prev => {
      if (val !== undefined) return val;
      return !prev;
    });

  return [state, toggler];
};

export default useSwitch;
