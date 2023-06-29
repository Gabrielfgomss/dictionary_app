import axios from 'axios';

const getWord = async (input) => {
  const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
  const { data } = response;
  const word = data[0];
  return word;
};

export default getWord;
