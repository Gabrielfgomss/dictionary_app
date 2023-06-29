import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './assets/dictionary.png';
import IconsNavBar from './components/IconsNavBar.tsx';
import SkeletonComponent from './components/SkeletonComponent.tsx';
import MainContent from './components/MainContent.tsx';
import getWord from './api/apiCall.ts';
import { changeState } from './features/theme/themeSlice.ts';
import { changeInputState } from './features/inputText/inputTextSlice.ts';

function App() {
  // Control the theme
  const { invert, isChecked, value } = useSelector((state) => state.theme);
  // Control the inputValue
  const { inputValue } = useSelector((state) => state.inputText);
  // Control the font-family
  const [font, setFont] = useState('serif');
  // Control the data
  const [load, setLoad] = useState(true);
  const [data, setData] = useState({
    word: '',
    phonetics: [],
    meanings: []
  });

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(changeState());
  };

  const toggleFont = () => {
    setFont('nano');
  };

  const getCall = async (e) => {
    e.preventDefault();
    try {
      const response = await getWord(inputValue);
      const { word, phonetics, meanings } = response;
      setData(() => ({
        word,
        phonetics: phonetics[0],
        meanings
      }));
      setLoad(false);
      dispatch(changeInputState(''));
    } finally {
      setLoad(true);
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
    <div className="container mx-auto my-4">
      <div
        className={`flex flex-col gap-10 p-6 font-${font} text-black dark:text-white`}
      >
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Logo" className={`lg:w-24 ${invert} md:w-16 sm:w-16 w-16`} />
          <IconsNavBar
            toggleTheme={toggleTheme}
            toggleFont={toggleFont}
            isChecked={isChecked}
          />
        </div>
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
        {load === false
          ? <SkeletonComponent />
          : (
            <>
              <MainContent word={data.word} phonetics={data.phonetics} meanings={data.meanings} />
              <div className="w-full border-t-2 border-zinc-200 mb-5" />
            </>
          )}
      </div>
    </div>
  );
}

export default App;
