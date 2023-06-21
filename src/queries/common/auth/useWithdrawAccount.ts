import { useMutation } from "react-query";
import { request } from "../../axiosInstance";

const withdrawalAccount = () => {
  return request({
    method: "DELETE",
    url: "/v1/auth/withdraw",
  });
};

const useWithdrawAccount = () => {
  return useMutation(withdrawalAccount);
};

export default useWithdrawAccount;
