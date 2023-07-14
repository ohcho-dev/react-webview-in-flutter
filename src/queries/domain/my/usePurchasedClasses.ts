import { useQuery } from "react-query";
import { request } from "../../axiosInstance";
import { myQueryKeys } from "./myQueryKeys";

const getPurchaseClasses = () => {
  return request({
    method: "GET",
    url: "/v1/purchase/classes",
  });
};

const usePurchasedClasses = (selectedTab: string) => {
  return useQuery(myQueryKeys.purchaseClasses, getPurchaseClasses, {
    enabled: selectedTab === "클래스",
  });
};

export default usePurchasedClasses;
