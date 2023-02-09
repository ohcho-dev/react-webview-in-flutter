import axios, { AxiosError, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { CHILD_ID_FIELD } from "../constant/localStorage";
import * as Sentry from "@sentry/react";

// axios 기본 설정
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common["Authorization"] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export const request = async (config: AxiosRequestConfig) => {
  const token = Cookies.get("token");
  const childId = window.localStorage.getItem(CHILD_ID_FIELD);

  try {
    const response = await axios({
      ...config,
      headers: {
        "child-id": childId,
        Authorization: `Bearer ${token}`,
        ContentType: config.method === "PUT" ? "application/json" : "",
      },
    });
    return response.data;
  } catch (error) {
    const { response } = error as unknown as AxiosError;

    Sentry.withScope(scope => {
      scope.setTag("type", "api");
      scope.setLevel("error");
      scope.setFingerprint([`${config.method}`, `${config.url}`, `${response?.status}`]);

      Sentry.captureException(error);
    });

    if (response?.status === 400) {
      return response.data;
    } else if (response?.status === 404) {
      return response.data;
    }
    throw error;
  }
};
