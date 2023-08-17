import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { myQueryKeys } from "./myQueryKeys";

const getPurchaseCoaching = () => {
  return request({
    method: "GET",
    url: "/v1/purchase/coaching",
  });
};

const usePurchasedCoaching = () => {
  return useQuery(myQueryKeys.purchaseCoaching, getPurchaseCoaching);
};

export default usePurchasedCoaching;
