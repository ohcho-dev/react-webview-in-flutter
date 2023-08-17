import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { myQueryKeys } from "./myQueryKeys";

const getPurchaseClasses = () => {
  return request({
    method: "GET",
    url: "/v1/purchase/classes",
  });
};

const usePurchasedClasses = () => {
  return useQuery(myQueryKeys.purchaseClasses, getPurchaseClasses);
};

export default usePurchasedClasses;
