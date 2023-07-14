import { useMutation, useQueryClient } from "react-query";
import { request } from "../../axiosInstance";
import { myQueryKeys } from "../my/myQueryKeys";

export const deleteProfileImageApi = (id: string) => {
  return request({
    method: "DELETE",
    url: `/v1/children/${id}/image`,
  });
};

const useDeleteProfileImage = () => {
  const queryClient = useQueryClient();
  return useMutation((id: string) => deleteProfileImageApi(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(myQueryKeys.childrenList);
    },
  });
};

export default useDeleteProfileImage;
