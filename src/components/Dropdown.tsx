import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFontFamily } from '../features/fontFamilyContext/fontFamiliSlice.ts';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="text-black font-semibold text-lg px-4 py-2.5 text-center inline-flex items-center dark:text-white"
        type="button"
        onClick={toggleDropdown}
      >
        Serif
        {' '}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="purple"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
      <div
        className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
        >
          <li>
            <button
              type="button"
              onClick={(event) => {
                closeDropdown();
                dispatch(changeFontFamily(event.target.textContent.toLowerCase()));
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Serif
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={(event) => {
                closeDropdown();
                dispatch(changeFontFamily(event.target.textContent.toLowerCase()));
              }}
              className="font-merriWeather block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Merriweather
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={(event) => {
                closeDropdown();
                dispatch(changeFontFamily(event.target.textContent.toLowerCase()));
              }}
              className="font-lato block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Lato
            </button>
          </li>
        </ul>
      </div>
      )}
    </div>
  );
}

export default Dropdown;
