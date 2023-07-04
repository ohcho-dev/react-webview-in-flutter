import { useQuery } from "react-query";
import { request } from "../../../axiosInstance";
import { myQueryKeys } from "../myQueryKeys";

const getSelectedChild = (id: string | undefined) => {
  return request({ method: "GET", url: `/v1/children/${id}` });
};

const useSelectedChild = (id: string | undefined) => {
  console.log("돌아와서 함수 재호출하는 api인데 id값이 안나올거같은데?!", id);
  return useQuery(myQueryKeys.selectedChildInfo, () => getSelectedChild(id));
};

export default useSelectedChild;
