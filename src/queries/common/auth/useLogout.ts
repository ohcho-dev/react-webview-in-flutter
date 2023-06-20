import { useMutation } from "react-query";
import { request } from "../../axiosInstance";

const logoutApi = () => {
  return request({
    method: "POST",
    url: "v1/auth/logout",
  });
};

const useLogout = () => {
  return useMutation(logoutApi);
};

export default useLogout;
