import axios from 'axios';

const axiosRequest = (method, url, data, headers) => {
  return axios({
    method: method,
    url: url,
    data,
    headers
  }).then((response) => response.data);
};

export default axiosRequest;
