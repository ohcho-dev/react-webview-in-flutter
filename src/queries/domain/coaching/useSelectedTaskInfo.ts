import { Method } from "axios";
import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { coachingQueryKeys } from "./coachingQueryKeys";

// 선택한 과제 상세정보(GET)
const getSelectedTaskInfo = (task_id: string | undefined) => {
  return request({
    method: "GET" as Method,
    url: `/v1/task/${task_id}`,
  });
};

const useSelectedTaskInfo = (id: string | undefined) => {
  return useQuery(coachingQueryKeys.selectedTaskInfo, () => getSelectedTaskInfo(id));
};

export default useSelectedTaskInfo;
