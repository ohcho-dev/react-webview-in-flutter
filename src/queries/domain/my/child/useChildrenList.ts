import { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { ChildType } from "types/common";

import { request } from "../../../axiosInstance";
import { myQueryKeys } from "../myQueryKeys";

export const getChildrenList = () => {
  return request({
    method: "GET",
    url: "/v1/children",
  });
};

const useChildrenList = () => {
  const { data } = useQuery([myQueryKeys.childrenList], () => getChildrenList());
  return { data };
};

export default useChildrenList;
