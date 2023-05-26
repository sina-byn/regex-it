import clsx from 'clsx';

const Tooltip = ({ shown, children }) => {
  return (
    <div
      className={clsx(
        'tooltip flex justify-center absolute z-50 top-[120%] w-fit rounded-sm -translate-x-1/3 transition-all duration-300 bg-[#1e1e1e] py-3 pl-2 pr-4',
        'before:content-[""] before:absolute before:-top-1 before:w-3 before:h-3 before:rotate-45 before:bg-[#1e1e1e]',
        !shown && 'pointer-events-none opacity-0'
      )}
    >
      {children}
    </div>
  );
};

export default Tooltip;
