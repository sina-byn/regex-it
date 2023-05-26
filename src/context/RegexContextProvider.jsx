import { useState, createContext } from 'react';

// * context
export const RegexCtx = createContext(null);

const RegexContextProvider = ({ children }) => {
  const [regex, setRegex] = useState('\\w+');
  const [matchCount, setMatchCount] = useState(0);
  const [flags, setFlags] = useState({
    ignore_case: '',
    global: 'g',
    multiline: '',
  });
  const flagsString = Object.values(flags).join('');
  const ctx = {
    regex,
    setRegex,
    flags,
    flagsString,
    setFlags,
    matchCount,
    setMatchCount,
  };

  return <RegexCtx.Provider value={ctx}>{children}</RegexCtx.Provider>;
};

export default RegexContextProvider;
