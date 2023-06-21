import { Method } from "axios";
import { request } from "../../axiosInstance";
import { ApplyClassBodyType } from "../../../types/apis/program";
import { NativeFunction } from "utils/app/NativeFunction";
import { useMutation } from "react-query";
import { applyClassSuccessedAction } from "utils/google-analytics/events/ClickApplyBtn";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

// 클래스 상품 신청(POST)
export const applyClass = (body: ApplyClassBodyType) => {
  return request({
    method: "POST" as Method,
    url: `/v1/program/classes/${body.class_id}`,
    data: body,
  });
};

const useApplyClass = (
  setErrorCode: Dispatch<
    SetStateAction<"MONTH_NOT_ACCEPTABLE" | "CLASS_STUDENT_FULL" | "CLASS_ALREADY_APPLIED">
  >,
  setOpenRejectModal: Dispatch<SetStateAction<boolean>>,
) => {
  const navigate = useNavigate();
  return useMutation((payload: ApplyClassBodyType) => applyClass(payload), {
    onSuccess: res => {
      if (res.purchase_id) {
        NativeFunction("ga4logNativeEventLog", `${applyClassSuccessedAction}`);
        navigate("/program/class/apply-class/success");
      } else {
        setErrorCode(res.code);
        setOpenRejectModal(true);
      }
    },
  });
};

export default useApplyClass;
