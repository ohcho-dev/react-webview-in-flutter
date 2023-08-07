import { ColorLight1, TextSm1420Semibold } from "lds-common/src/constants/tokens/global";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { layoutDetailScrollYState } from "store/common";
import UseImgix from "../Imgix";
import Text from "../Text";
import * as S from "./ToastPopup.styled";

interface ToastPopupProps {
  content: string;
  toastPopup: boolean;
  setToastPopup: Dispatch<SetStateAction<boolean>>;
}

const ToastPopup = ({ content, toastPopup, setToastPopup }: ToastPopupProps) => {
  const scrollY = useRecoilValue(layoutDetailScrollYState);
  useEffect(() => {
    if (toastPopup) {
      setTimeout(() => {
        setToastPopup(false);
      }, 2000);
    }
  }, [toastPopup]);

  return (
    <S.ToastPopupWrapper scrollY={scrollY - 20}>
      <UseImgix srcUrl="/images/checking.svg" style={{ width: "2.8rem" }} />
      <Text variant={TextSm1420Semibold} color={ColorLight1}>
        {content}
      </Text>
    </S.ToastPopupWrapper>
  );
};

export default ToastPopup;
