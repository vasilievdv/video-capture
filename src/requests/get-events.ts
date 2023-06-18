import axios from 'axios';
import { EVENTS_BASE_URL } from './constatnts';

export const getEvents = async () => {
  const { data } = await axios.get<[]>(
    `${EVENTS_BASE_URL}/v2/5e60c5f53300005fcc97bbdd`
  );
  return data;
};
