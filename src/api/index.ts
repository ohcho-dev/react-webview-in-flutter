import axios, { AxiosError, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { CHILD_ID_FIELD, USER_INFO } from "../constant/localStorage";
import * as Sentry from "@sentry/react";

// axios 기본 설정
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common["Authorization"] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export const request = async (config: AxiosRequestConfig) => {
  const token = Cookies.get("token");
  const childId = window.localStorage.getItem(CHILD_ID_FIELD);
  const userInfo = window.localStorage.getItem(USER_INFO) || "";

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

    Sentry.configureScope(function (scope) {
      scope.setUser({
        email: userInfo,
        "child-id": childId,
      });
    });
    // sentry api 에러 추적 (429 too many attempts 는 경고처리)
    if (response?.status === 429) {
      if (window.navigator.userAgent.indexOf("InApp") > -1) {
        Sentry.withScope(scope => {
          scope.setTag("type", "api");
          scope.setLevel("info");
          scope.setFingerprint([`${config.method}`, `${config.url}`, `${response?.status}`]);
          Sentry.captureException(error);
        });
      }
    } else {
      if (window.navigator.userAgent.indexOf("InApp") > -1) {
        Sentry.withScope(scope => {
          scope.setTag("type", "api");
          scope.setLevel("error");
          scope.setFingerprint([`${config.method}`, `${config.url}`, `${response?.status}`]);
          Sentry.captureException(error);
        });
      }
    }

    if (response?.status === 400) {
      return response.data;
    } else if (response?.status === 404) {
      return response.data;
    }
    throw error;
  }
};
