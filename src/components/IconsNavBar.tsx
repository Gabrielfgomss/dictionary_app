import { useDispatch } from 'react-redux';
import Dropdown from './Dropdown.tsx';
import { ToggleButton } from './AnimateComponents';
import { changeState } from '../context/themeContext/themeSlice';

function IconsNavBar({ isChecked }: { isChecked: boolean }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 items-center">
      <div>
        <Dropdown />
      </div>
      <label
        htmlFor="toggleTheme"
        className="relative inline-flex gap-1 items-center mr-5 cursor-pointer swap swap-rotate"
      >
        <input
          type="checkbox"
          id="toggleTheme"
          className="sr-only peer"
          checked={isChecked}
          onChange={() => dispatch(changeState())}
        />
        <div className="w-11 h-6 bg-zinc-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        <ToggleButton click={isChecked} />
      </label>
    </div>
  );
}

export default IconsNavBar;
