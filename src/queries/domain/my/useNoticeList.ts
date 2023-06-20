import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { myQueryKeys } from "./myQueryKeys";

const getNoticeList = () => {
  return request({
    method: "GET",
    url: "/v1/notice",
  });
};

const useNoticeList = () => {
  return useQuery(myQueryKeys.noticeList, getNoticeList);
};

export default useNoticeList;
