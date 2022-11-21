import axios from 'axios';
import { getApiURL } from './base-url';

const client = axios.create({
  baseURL: getApiURL()
});
export const request = ({ ...options }) => {
  const onSuccess = (response) => {
    return response;
  };
  const onError = (error) => {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
