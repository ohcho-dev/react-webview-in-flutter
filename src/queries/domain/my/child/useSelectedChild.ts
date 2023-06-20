import { useQuery } from "react-query";
import { request } from "../../../axiosInstance";
import { myQueryKeys } from "../myQueryKeys";

const getSelectedChild = (id: string | undefined) => {
  return request({ method: "GET", url: `/v1/children/${id}` });
};

const useSelectedChild = (id: string | undefined) => {
  return useQuery(myQueryKeys.selectedChildInfo, () => getSelectedChild(id));
};

export default useSelectedChild;
