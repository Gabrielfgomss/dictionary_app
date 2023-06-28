import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('lemonade');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'lemonade' : 'dark');
  };

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button className="btn" type="button" onClick={toggleTheme}>
      <p>Hello World!</p>
    </button>
  );
}

export default App;
