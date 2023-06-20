import { Method } from "axios";
import { Dispatch, SetStateAction } from "react";
import { useQuery } from "react-query";
import { MenuType } from "../../../pages/coaching/CoachingPage";
import { request } from "../../axiosInstance";
import { coachingQueryKeys } from "./coachingQueryKeys";

// 신청한 코칭 리스트(GET)
const getAppliedCoachingList = () => {
  return request({
    method: "GET" as Method,
    url: "/v1/coaching",
  });
};

const useAppliedCoachingList = (
  id: number,
  setSelectedMenu: Dispatch<SetStateAction<MenuType>>,
) => {
  return useQuery([coachingQueryKeys.appliedCoachingList, id], getAppliedCoachingList, {
    onSuccess: () => {
      setSelectedMenu("all");
    },
  });
};

export default useAppliedCoachingList;
