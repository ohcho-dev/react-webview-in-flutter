import { Method } from "axios";
import { request } from "queries/axiosInstance";
import { useQuery } from "react-query";
import { programQueryKeys } from "./programQueryKeys";

// 클래스 상품 목록 (GET)
const getClassList = () => {
  return request({ method: "GET" as Method, url: `/v1/program/classes` });
};

const useClassList = (id: number) => {
  return useQuery([programQueryKeys.classList, id], () => getClassList());
};

export default useClassList;
