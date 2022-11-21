import { useQuery } from 'react-query';
import { request } from '../utils/helpers/axios-instance';

const GetEmployees = () => {
  return useQuery('get-employees', () =>
    request({
      // url: `employees?&_limit=10`,
      url: `employees`,
      method: 'GET'
    })
  );
};

export { GetEmployees };
