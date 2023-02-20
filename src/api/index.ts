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
    if (axios.isAxiosError(error) && error.config && error.response) {
      const { config, response } = error;
      const { method, url, params, data, data: requestData, headers } = config;
      const { status } = response;

      Sentry.setContext("API Request Detail", {
        method,
        url,
        params,
        requestData,
        headers,
      });

      Sentry.setContext("API Response Detail", {
        status,
        data,
      });

      // sentry api 에러 추적 (429 too many attempts 는 경고처리)
      if (window.navigator.userAgent.indexOf("InApp") > -1) {
        Sentry.withScope(scope => {
          scope.setTag("type", "api");
          scope.setLevel(status === 429 ? "info" : "error");
          scope.setFingerprint([`${method}`, `${url}`, `${status}`]);
          Sentry.captureException(error);
        });
      }

      if (response?.status === 400) {
        return response.data;
      } else if (response?.status === 404) {
        return response.data;
      }
      throw error;
    }
  }
};
