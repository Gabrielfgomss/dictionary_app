import Dropdown from './Dropdown.tsx';
import { ToggleButton } from './AnimateComponents.tsx';

function IconsNavBar({ toggleTheme, toggleFont, theme }) {
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
          checked={theme.isChecked}
          onChange={toggleTheme}
        />
        <div className="w-11 h-6 bg-zinc-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        <ToggleButton click={theme.isChecked} />
      </label>
    </div>
  );
}

export default IconsNavBar;
