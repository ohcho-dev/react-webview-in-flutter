import { Method } from "axios";
import { request } from "queries/axiosInstance";
import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { NativeFunction } from "utils/app/NativeFunction";
import { applyCoachingSuccessedAction } from "utils/google-analytics/events/ClickApplyBtn";

// 코칭 상품 신청 (POST)
export const applyCoaching = (id: string) => {
  return request({ method: "POST" as Method, url: `/v1/program/coaching/${id}` });
};

const useApplyCoaching = (setOpenBottomModal: Dispatch<SetStateAction<boolean>>) => {
  const navigate = useNavigate();
  const callToggleModal = () => {
    return new Promise<void>(resolve => {
      // 모달 토글 코드
      setOpenBottomModal(prev => !prev);
      setTimeout(() => {
        resolve(); // 일정 시간 후에 두 번째 페이지로 이동
      }, 100);
    });
  };
  return useMutation((id: string) => applyCoaching(id), {
    onSuccess: res => {
      NativeFunction("ga4logNativeEventLog", `${applyCoachingSuccessedAction}`);
      callToggleModal().then(() =>
        navigate("/program/class/apply-coaching/success", {
          state: { id: res.purchase_id },
          replace: true,
        }),
      );
    },
    onError: error => {
      throw error;
    },
  });
};

export default useApplyCoaching;
