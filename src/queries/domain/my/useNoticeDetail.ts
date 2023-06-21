import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { myQueryKeys } from "./myQueryKeys";

const getNoticeDetail = (id: string | undefined) => {
  return request({
    method: "GET",
    url: `/v1/notice/${id}`,
  });
};

const useNoticeDetail = (noticeId: string | undefined) => {
  return useQuery(myQueryKeys.noticeDetail, () => getNoticeDetail(noticeId));
};

export default useNoticeDetail;
