import { useDispatch } from 'react-redux';
import axios, { AxiosError } from 'axios';
import { changeMeanings } from '../features/DataContext/wordSlice.ts';

interface ResponseProps {
  audio: string,
  meanings: [],
  phonetics: string,
  word: string
}

const useFetch = () => {
  const dispatch = useDispatch();

  const fetchData = async (input: string) => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
      const { data } = response;
      if (data.length > 1) {
        const newData = {
          word: data[0].word,
          phonetics: data[0].phonetic,
          audio: data[0].phonetics[0].audio,
          meanings: data.flatMap((item: ResponseProps) => item.meanings)
        };
        dispatch(changeMeanings(newData));
      } if (data.length === 1) {
        console.log(data);
        const newData = {
          word: data[0].word,
          phonetics: data[0].phonetic,
          audio: data[0].phonetics.filter((item: ResponseProps) => item.audio)[0]?.audio,
          meanings: data[0].meanings
        };
        dispatch(changeMeanings(newData));
      }
      console.log('No data available');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        dispatch(changeMeanings(error.response.data.message));
      }
    }
  };

  return { fetchData }; // Return as an object
};

export default useFetch;
