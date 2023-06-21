import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import { NativeFunction } from "../../../../utils/app/NativeFunction";
import { registChildSuccessedAction } from "../../../../utils/google-analytics/events/ManagementChildEvent";
import { request } from "../../../axiosInstance";

interface PayloadType {
  name: string;
  gender: string;
  birth_date: string;
  premature_flag: number;
  due_date?: string;
}

const createChildApi = (body: PayloadType) => {
  return request({ method: "POST", url: "/v1/children", data: body });
};

const useCreateChild = (setOpenSaveModal: Dispatch<SetStateAction<boolean>>) => {
  return useMutation((payload: PayloadType) => createChildApi(payload), {
    onSuccess: () => {
      NativeFunction("ga4logNativeEventLog", `${registChildSuccessedAction}`);
      setOpenSaveModal(true);
    },
    onError: error => {
      throw error;
    },
  });
};

export default useCreateChild;
