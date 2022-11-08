import axios, { AxiosError, AxiosRequestConfig } from "axios";

axios.defaults.baseURL = process.env.API_URL;

const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    // 에러 처리
    console.log(error);
  }
};

export default request;
