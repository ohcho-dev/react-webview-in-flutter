import { Method } from "axios";
import { request } from "queries/axiosInstance";
import { useQuery } from "react-query";
import { programQueryKeys } from "./programQueryKeys";

// 클래스 상품 조회 (GET)
const getSelectedClassInfo = (id: string | undefined) => {
  return request({ method: "GET" as Method, url: `/v1/program/classes/${id}` });
};

const useSelectedClassInfo = (id: string | undefined) => {
  return useQuery(programQueryKeys.selectedClassInfo, () => getSelectedClassInfo(id));
};

export default useSelectedClassInfo;
