import { useMutation } from "react-query";
import { request } from "../../../axiosInstance";

export const updateSelectedChildIdApi = (id: string) => {
  return request({
    method: "POST",
    url: `/v1/children/${id}/selected`,
  });
};

const useUpdateSelectedChildId = () => {
  return useMutation((id: string) => updateSelectedChildIdApi(id));
};

export default useUpdateSelectedChildId;
