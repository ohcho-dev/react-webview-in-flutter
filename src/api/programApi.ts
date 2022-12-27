import { Method } from "axios";
import { request } from ".";

// 코칭 상품 목록 (GET)
export const getCoachingList = () => {
  return request({ method: "GET" as Method, url: "/v1/coaching" });
};

// 코칭 상품 조회 (GET)
export const getSelectedCoachingInfo = (id: string | undefined) => {
  return request({ method: "GET" as Method, url: `/v1/coaching/${id}` });
};

// 클래스 상품 목록 (GET)
export const getClassList = () => {
  return request({ method: "GET" as Method, url: `/v1/classes` });
};

// 클래스 상품 조회 (GET)
export const getSelectedClassInfo = (id: string | undefined) => {
  return request({ method: "GET" as Method, url: `/v1/classes/${id}` });
};
