import { useMutation } from "react-query";
import { request } from "../../axiosInstance";

const getLoginDev = () => {
  return request({ method: "POST", url: `/v1/auth/temp-auth` });
};

const useLoginDev = () => {
  return useMutation(getLoginDev);
};

export default useLoginDev;
