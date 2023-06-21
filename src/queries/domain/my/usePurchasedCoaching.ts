import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { myQueryKeys } from "./myQueryKeys";

const getPurchaseCoaching = () => {
  return request({
    method: "GET",
    url: "/v1/purchase/coaching",
  });
};

const usePurchasedCoaching = (selectedTab: string) => {
  return useQuery(myQueryKeys.purchaseCoaching, getPurchaseCoaching, {
    enabled: selectedTab === "코칭",
  });
};

export default usePurchasedCoaching;
