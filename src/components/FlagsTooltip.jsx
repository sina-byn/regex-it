// * components
import Checkbox from './Checkbox';

const FlagsTooltip = () => {
  return (
    <div className='flags-tooltip flex flex-col font-consolas text-gray-200'>
      <h3 className='text-left text-sm border-b pb-1 mb-2'>Expression Flags</h3>
      <Checkbox name='ignore_case' label='ignore case (i)' />
      <Checkbox name='global' label='global (g)' defaultChecked={true} />
      <Checkbox name='multiline' label='multiline (m)' />
    </div>
  );
};

export default FlagsTooltip;
