import { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { ChildType } from "types/common";

import { request } from "../../../axiosInstance";
import { myQueryKeys } from "../myQueryKeys";

export const getChildrenList = async () => {
  const { data }: AxiosResponse<ChildType[]> = await request({
    method: "GET",
    url: "/v1/children",
  });

  return data;
};

const useChildrenList = () => {
  return useQuery(myQueryKeys.childrenList, () => getChildrenList());
};

export default useChildrenList;
