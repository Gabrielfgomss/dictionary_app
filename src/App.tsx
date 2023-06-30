import { FormEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './assets/dictionary.png';
import IconsNavBar from './components/IconsNavBar.tsx';
import SkeletonComponent from './components/SkeletonComponent.tsx';
import MainContent from './components/MainContent.tsx';
import { changeInputState } from './features/inputTextContext/inputTextSlice.ts';
import useFetch from './api/useFetch.ts';
import { RootState } from './store.ts';

function App() {
  const dispatch = useDispatch();
  const { fetchData } = useFetch();
  // Control the theme
  const { invert, isChecked, value } = useSelector((state: RootState) => state.theme);
  // Control the inputValue
  const { inputValue } = useSelector((state: RootState) => state.inputText);
  // Control the font-family
  const { font } = useSelector((state: RootState) => state.fontFamily);
  // Control render
  const [load, setLoad] = useState(false);
  const [isRequestMade, setRequestMade] = useState(false);

  const getCall = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);
    setRequestMade(true);
    try {
      await fetchData(inputValue);
      dispatch(changeInputState(''));
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [value]);

  return (
    <div
      className={`flex flex-col gap-10 p-6 text-black dark:text-white container lg:w-2/5 md:w-2/4 sm:w-2/3 min-[452px]:w-3/4 font-${font}`}
    >
      <nav className="flex justify-between items-center">
        <img src={Logo} alt="Logo" className={`lg:w-24 ${invert} md:w-16 sm:w-16 w-16`} />
        <IconsNavBar
          isChecked={isChecked}
        />
      </nav>
      <form onSubmit={(e) => getCall(e)}>
        <input
          id="inputText"
          onChange={(e) => dispatch(changeInputState(e.target.value))}
          value={inputValue}
          type="text"
          placeholder="Type here"
          className="w-full bg-zinc-100 focus:text-black focus:font-semibold border-none rounded-full p-4 placeholder:text-black placeholder:font-semibold text-black font-semibold"
        />
      </form>
      {isRequestMade === true
        ? load === true
          ? <SkeletonComponent />
          : (
            <MainContent />
          ) : ''}
    </div>
  );
}

export default App;
