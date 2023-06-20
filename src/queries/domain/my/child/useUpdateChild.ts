import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import { NativeFunction } from "../../../../utils/app/NativeFunction";
import { updateChildSuccessedAction } from "../../../../utils/google-analytics/events/ManagementChildEvent";
import { request } from "../../../axiosInstance";

interface PayloadType {
  id?: string;
  name: string;
  gender: string;
  birth_date: string;
  premature_flag: number;
  due_date?: string;
}

export const updateChild = (body: PayloadType) => {
  return request({ method: "PUT", url: `/v1/children/${body.id}`, data: body });
};

const useUpdateChild = (setOpenModal: Dispatch<SetStateAction<boolean>>) => {
  return useMutation((payload: PayloadType) => updateChild(payload), {
    onSuccess: () => {
      NativeFunction("ga4logNativeEventLog", `${updateChildSuccessedAction}`);
      setOpenModal(true);
    },
    onError: error => {
      throw error;
    },
  });
};

export default useUpdateChild;
