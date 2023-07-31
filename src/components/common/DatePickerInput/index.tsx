import React from "react";
import Icon from "../Icon";
import * as S from "./DatePickerInput.styled";
import { ColorLightBlack8 } from "lds-common/src/constants/tokens/global";

interface InputProps {
  className: string;
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
  modifiable: boolean;
  setOpenRejectModal: () => void;
}
const ForwardInputRefFunction: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, value, onClick, onChange, modifiable, setOpenRejectModal },
  ref,
) => {
  const handleReject = () => {
    setOpenRejectModal();
  };

  return (
    <S.DatepickerWrapper>
      <S.CustomInput
        className={className}
        value={value}
        ref={ref}
        onChange={e => onChange(e.target.value)}
        onClick={modifiable ? onClick : handleReject}
        readOnly
        aria-label="input"
      />
      <Icon icon={"calendar_ver2"} size={24} fill={ColorLightBlack8} />
    </S.DatepickerWrapper>
  );
};

export const ForwardedInput = React.forwardRef(ForwardInputRefFunction);
