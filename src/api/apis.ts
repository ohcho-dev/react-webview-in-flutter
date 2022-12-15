import axios, { AxiosRequestConfig } from "axios";

// axios 기본 설정
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apis = {
  getChildrenList: (param?: object) => {
    return request({ method: "GET", url: "/v1/children", params: param });
  },
  getSelectedChild: (id: string) => {
    return request({ method: "GET", url: `/v1/children/${id}` });
  },
  createChild: (data: object) => {
    return request({ method: "POST", url: "/v1/children", data });
  },
  // ... more apis
};
