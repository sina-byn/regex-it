import { useId, useContext } from 'react';

// * context
import { RegexCtx } from '../context/RegexContextProvider';

const Checkbox = ({ label, name, defaultChecked }) => {
  const id = useId();
  const ctx = useContext(RegexCtx);

  const changeHandler = e => {
    const { name } = e.target;
    const flag = name.slice(0, 1);
    if (!('setFlags' in ctx)) return;
    ctx.setFlags(prev => ({
      ...prev,
      [name]: prev[name] === flag ? '' : flag,
    }));
  };

  return (
    <div className='checkbox-wrapper flex items-center gap-x-2'>
      <input
        id={id}
        name={name}
        type='checkbox'
        onChange={changeHandler}
        defaultChecked={!!defaultChecked}
      />
      <label htmlFor={id} className='checkbox-label whitespace-nowrap'>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
