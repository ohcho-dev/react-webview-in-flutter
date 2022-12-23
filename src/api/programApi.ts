import { Method } from "axios";
import { request } from ".";

export const getSelectedClass = (param?: object) => {
  //   return request({
  //     method: 'GET',
  //     url: '/v1/children',
  //     params: param,
  //   });
};

// 코칭 상품 목록 (GET)
export const getCoachingList = () => {
  return request({ method: "GET" as Method, url: "/v1/coaching" });
};

// 코칭 상품 조회 (GET)
export const getSelectedCoachingInfo = (id: string | undefined) => {
  return request({ method: "GET" as Method, url: `/v1/coaching/${id}` });
};
