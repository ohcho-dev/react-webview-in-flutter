import axios, { AxiosRequestConfig } from 'axios';

// axios 기본 설정
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await axios({
      ...config,
      headers: { child_id: window.localStorage.getItem('child_id') },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
