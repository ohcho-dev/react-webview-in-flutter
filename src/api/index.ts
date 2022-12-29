import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { CHILD_ID_FIELD } from "../constant/localStorage";

// axios 기본 설정
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common["Authorization"] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export const request = async (config: AxiosRequestConfig) => {
  const token = Cookies.get("token");

  // 토큰 처리로 임시로 적용
  if (!token) {
    try {
      const response = await axios({
        ...config,
        headers: {},
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  // 토큰 처리로 임시로 적용
  if (!window.localStorage.getItem(CHILD_ID_FIELD)) {
    try {
      const response = await axios({
        ...config,
        headers: { Autorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  try {
    const response = await axios({
      ...config,
      headers: {
        "child-id": window.localStorage.getItem(CHILD_ID_FIELD),
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
