import { useQuery } from "react-query";
import { request } from "../../../axiosInstance";
import { myQueryKeys } from "../myQueryKeys";

export const getChildrenList = () => {
  return request({
    method: "GET",
    url: "/v1/children",
  });
};

const useChildrenList = () => {
  return useQuery(myQueryKeys.childrenList, () => getChildrenList());
};

export default useChildrenList;
