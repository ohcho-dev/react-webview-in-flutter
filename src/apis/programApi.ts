import { Method } from "axios";
import { request } from ".";
import { ApplyClassBodyType } from "../types/apis/program";

// 코칭 상품 목록 (GET)
export const getCoachingList = () => {
  return request({ method: "GET" as Method, url: "/v1/program/coaching" });
};

// 코칭 상품 조회 (GET)
export const getSelectedCoachingInfo = (id: string | undefined) => {
  return request({ method: "GET" as Method, url: `/v1/program/coaching/${id}` });
};

// 클래스 상품 목록 (GET)
export const getClassList = () => {
  return request({ method: "GET" as Method, url: `/v1/program/classes` });
};

// 클래스 상품 조회 (GET)
export const getSelectedClassInfo = (id: string | undefined) => {
  return request({ method: "GET" as Method, url: `/v1/program/classes/${id}` });
};

// 코칭 상품 신청 가능여부 확인 (GET)
export const checkValidCoachingToApply = (id: string | undefined) => {
  return request({ method: "GET" as Method, url: `/v1/program/coaching/${id}/valid` });
};

// 코칭 상품 신청 (POST)
export const applyCoaching = (body: { id: string }) => {
  return request({ method: "POST" as Method, url: `/v1/program/coaching/${body.id}` });
};

// 클래스 상품 신청(POST)
export const applyClass = (body: ApplyClassBodyType) => {
  return request({
    method: "POST" as Method,
    url: `/v1/program/classes/${body.class_id}`,
    data: body,
  });
};
