import axios from 'axios';
import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

export const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);

  if (!token) {
    throw new Error('API key is not set, set it by command -t [API_KEY]');
  }

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

  return data;
};
