import { useState } from "react";
import * as S from "./ModalInput.styled";

export const MIN_LENGTH_NAME = 2;
export const MAX_LENGTH_NAME = 10;

interface NameInputProps {
  placeholder: string;
  id: string;
  value: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (evt: React.KeyboardEvent<HTMLDivElement>) => void;
  handleFocus?: () => void;
}

const NameInput = ({
  placeholder,
  id,
  value,
  handleChange,
  handleKeyDown,
  handleFocus,
}: NameInputProps) => {
  return (
    <>
      <S.InputBox
        placeholder={placeholder}
        id={id}
        value={value}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onChange={evt => handleChange(evt)}
      />
    </>
  );
};

export default NameInput;
