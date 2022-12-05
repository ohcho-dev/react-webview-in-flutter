import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

export const apis = {
  // getList: () => api.get("https://pokeapi.co/api/v2/pokemon/ditto"),
  // getBerry: () => api.get("/call"),
  // ... more apis
};

// const request = async (config: AxiosRequestConfig) => {
//   try {
//     const response = await axios(config);
//     return response.data;
//   } catch (error) {
//     // 에러 처리
//     throw Error("에러 메세지");
//   }
// };

// export default request;
