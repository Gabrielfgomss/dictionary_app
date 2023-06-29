import './App.css';
import { useEffect, useState } from 'react';
import Logo from './assets/dictionary.png';
import IconsNavBar from './components/IconsNavBar.tsx';
import SkeletonComponent from './components/SkeletonComponent.tsx';
import MainContent from './components/MainContent.tsx';
import getWord from './api/apiCall.ts';

function App() {
  const [theme, setTheme] = useState({
    value: 'light',
    isChecked: true,
    invert: 'invert-0'
  });
  const [font, setFont] = useState('serif');
  const [load, setLoad] = useState(true);
  const [data, setData] = useState({
    word: '',
    phonetics: [],
    meanings: []
  });
  const [value, setValue] = useState('');

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      value: prevTheme.value === 'dark' ? 'light' : 'dark',
      isChecked: !prevTheme.isChecked,
      invert: prevTheme.invert === 'invert' ? 'invert-0' : 'invert'
    }));
  };

  const toggleFont = () => {
    setFont('nano');
  };

  const getCall = async (e) => {
    e.preventDefault();
    try {
      const response = await getWord(value);
      const { word, phonetics, meanings } = response;
      setData(() => ({
        word,
        phonetics: phonetics[0],
        meanings
      }));
      console.log(data);
      setLoad(false);
      setValue('');
    } finally {
      setLoad(true);
    }
  };

  useEffect(() => {
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme.value]);
  console.log(data);
  return (
    <div className="container mx-auto my-4">
      <div
        className={`flex flex-col gap-10 p-6 font-${font} text-black dark:text-white`}
      >
        <div className="flex justify-between items-center">
          <img src={Logo} alt="Logo" className={`lg:w-24 ${theme.invert} md:w-16 sm:w-16 w-16`} />
          <IconsNavBar
            toggleTheme={toggleTheme}
            toggleFont={toggleFont}
            theme={theme}
          />
        </div>
        <form onSubmit={(e) => getCall(e)}>
          <input
            id="inputText"
            onChange={(e) => setValue(e.target.value)}
            value={value}
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
