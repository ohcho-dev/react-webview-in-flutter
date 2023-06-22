import { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { AuthMeResponseType } from "types/apis/common/auth";
import { request } from "../../axiosInstance";
import { myQueryKeys } from "../../domain/my/myQueryKeys";

export const getUserInfo = async () => {
  const { data }: AxiosResponse<AuthMeResponseType> = await request({
    method: "POST",
    url: "v1/auth/me",
  });

  return data;
};

const useAuthMe = () => {
  return useQuery(myQueryKeys.userInfo, () => getUserInfo());
};

export default useAuthMe;
