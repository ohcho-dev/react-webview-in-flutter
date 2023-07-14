import { Method } from "axios";
import { request } from "queries/axiosInstance";
import { useQuery, UseQueryResult } from "react-query";
import { coachingQueryKeys } from "./coachingQueryKeys";

// 어린이집용 결과지 발행 (GET)
const getSelectedDaycareResultInfo = (result_id: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v1/test/${result_id}`,
  });
};

const useSelectedDaycareResultInfo = (id: string | undefined) => {
  return useQuery(coachingQueryKeys.daycareResultPaper, () => getSelectedDaycareResultInfo(id));
};

export default useSelectedDaycareResultInfo;
