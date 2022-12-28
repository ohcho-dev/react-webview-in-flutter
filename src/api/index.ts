import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { CHILD_ID_FIELD } from "../constant/localStorage";

// axios 기본 설정
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export const request = async (config: AxiosRequestConfig) => {
  let token = Cookies.get("token");

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await axios({
      ...config,
      headers: { "child-id": window.localStorage.getItem(CHILD_ID_FIELD) },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
