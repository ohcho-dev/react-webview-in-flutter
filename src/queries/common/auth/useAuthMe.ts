import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { myQueryKeys } from "../../domain/my/myQueryKeys";

export const getUserInfo = () => {
  return request({
    method: "POST",
    url: "v1/auth/me",
  });
};

const useAuthMe = () => {
  return useQuery(myQueryKeys.userInfo, () => getUserInfo());
};

export default useAuthMe;
