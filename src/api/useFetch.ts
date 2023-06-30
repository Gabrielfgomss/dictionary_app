import { useDispatch } from 'react-redux';
import axios from 'axios';
import { changeMeanings } from '../features/DataContext/wordSlice.ts';

const useFetch = () => {
  const dispatch = useDispatch();

  const fetchData = async (input) => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
      const { data } = response;
      if (data.length > 1) {
        const newData = {
          word: data[0].word,
          phonetics: data[0].phonetic,
          audio: data[0].phonetics[0].audio,
          meanings: data.flatMap((item) => item.meanings)
        };
        dispatch(changeMeanings(newData));
      } if (data.length === 1) {
        console.log(data);
        const newData = {
          word: data[0].word,
          phonetics: data[0].phonetic,
          audio: data[0].phonetics.filter((item) => item.audio)[0]?.audio,
          meanings: data[0].meanings
        };
        dispatch(changeMeanings(newData));
      }
      console.log('No data available');
    } catch (error) {
      console.log(error.response.data.message);
      dispatch(changeMeanings(error.response.data.message));
    }
  };

  return { fetchData }; // Return as an object
};

export default useFetch;
