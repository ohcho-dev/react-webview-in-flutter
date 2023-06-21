import React from "react";
import * as S from "./DatePickerInput.styled";

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
    <S.CustomInput
      className={className}
      value={value}
      ref={ref}
      onChange={e => onChange(e.target.value)}
      onClick={modifiable ? onClick : handleReject}
      readOnly
      aria-label="input"
    />
  );
};

export const ForwardedInput = React.forwardRef(ForwardInputRefFunction);
