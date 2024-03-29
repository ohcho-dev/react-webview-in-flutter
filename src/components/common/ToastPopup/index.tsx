import { ColorLight1, TextSm1420Semibold } from "lds-common/src/constants/tokens/global";
import { Dispatch, SetStateAction, useEffect } from "react";
import UseImgix from "../Imgix";
import Text from "../Text";
import * as S from "./ToastPopup.styled";

interface ToastPopupProps {
  content: string;
  toastPopup: boolean;
  setToastPopup: Dispatch<SetStateAction<boolean>>;
  positionY: number;
}

const ToastPopup = ({ content, toastPopup, setToastPopup, positionY }: ToastPopupProps) => {
  useEffect(() => {
    if (toastPopup) {
      setTimeout(() => {
        setToastPopup(false);
      }, 2000);
    }
  }, [toastPopup]);

  return (
    <S.ToastPopupWrapper scrollY={positionY ? positionY - 20 : 0}>
      <UseImgix srcUrl="/images/checking.svg" style={{ width: "2.8rem" }} />
      <Text variant={TextSm1420Semibold} color={ColorLight1}>
        {content}
      </Text>
    </S.ToastPopupWrapper>
  );
};

export default ToastPopup;
