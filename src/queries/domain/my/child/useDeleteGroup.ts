import { Method } from "axios";
import { Dispatch, SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";
import { request } from "../../../axiosInstance";
import { myQueryKeys } from "../myQueryKeys";

export const deleteGroup = (child_id: number) => {
  return request({
    method: "DELETE" as Method,
    url: `/v1/children/${child_id}/group-code`,
  });
};

const useDeleteGroup = (setOpenModal: Dispatch<SetStateAction<boolean>>) => {
  const queryClient = useQueryClient();
  return useMutation((child_id: number) => deleteGroup(child_id), {
    onSuccess: () => {
      queryClient.invalidateQueries(myQueryKeys.selectedChildInfo);
      setOpenModal(false);
    },
  });
};

export default useDeleteGroup;
