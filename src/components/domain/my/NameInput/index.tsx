import { useState } from "react";
import * as S from "./NameInput.styled";

export const MIN_LENGTH_NAME = 2;
export const MAX_LENGTH_NAME = 10;

interface NameInputProps {
  placeholder: string;
  id: string;
  value: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>, isValid: boolean) => void;
  type: "create" | "modify";
  handleKeyDown?: (evt: React.KeyboardEvent<HTMLDivElement>) => void;
  handleFocus?: () => void;
}

const NameInput = ({
  placeholder,
  id,
  value,
  handleChange,
  type,
  handleKeyDown,
  handleFocus,
}: NameInputProps) => {
  const [startTyping, setStartTyping] = useState(type === "create" ? false : true);
  const [nameLengthCheck, setNameLengthCheck] = useState(false);
  const [nameNullCheck, setNameNullCheck] = useState(false);
  const [meaningfulNameCheck, setMeaningfulNameCheck] = useState(false);
  const [checkSpecialCharacter, setCheckSpecialCharacter] = useState(false);
  return (
    <>
      <S.InputBox
        placeholder={placeholder}
        id={id}
        value={value}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
          const value = evt.target.value;
          setStartTyping(true);

          // 특수문자 체크
          const specialCharacterRegex = /[^a-zA-Zㄱ-ㅎㅏ-ㅣㅑ-ㅡ가-힣]/;
          const hasSpecialCharacter = specialCharacterRegex.test(value);
          setCheckSpecialCharacter(hasSpecialCharacter);

          // 한글만 있을때 의미있는 문자만 가능
          const koreanOnlyRegex = /^[ㄱ-ㅎ|가-힣|ㅏ-ㅣ|ㅑ-ㅡ|ㅣ]*$/;
          const englishOnlyRegex = /^[a-zA-Z]*$/;
          const meaningfulRegex = /^[가-힣]*$/;
          const isMeaningfulName =
            (koreanOnlyRegex.test(value) && !meaningfulRegex.test(value)) ||
            (!koreanOnlyRegex.test(value) && !englishOnlyRegex.test(value));
          setMeaningfulNameCheck(isMeaningfulName);

          // 글자 수 체크
          const isInvalidLength = value.length > MAX_LENGTH_NAME || value.length < MIN_LENGTH_NAME;
          setNameLengthCheck(isInvalidLength);

          // null 체크
          const isNameNull = value.length === 0;
          setNameNullCheck(isNameNull);

          handleChange(
            evt,
            startTyping &&
              !(isInvalidLength || isMeaningfulName || isNameNull || hasSpecialCharacter),
          );
        }}
        warning={
          startTyping &&
          (nameLengthCheck || meaningfulNameCheck || nameLengthCheck || checkSpecialCharacter)
        }
      />
      {startTyping && !nameNullCheck && nameLengthCheck && (
        <S.WarningText>2-10자 이내로 입력해 주세요.</S.WarningText>
      )}
      {startTyping && nameNullCheck && <S.WarningText>이름을 입력해 주세요.</S.WarningText>}
      {startTyping && !nameLengthCheck && !checkSpecialCharacter && meaningfulNameCheck && (
        <S.WarningText>이름을 정확하게 입력해 주세요.</S.WarningText>
      )}
      {startTyping && !nameLengthCheck && checkSpecialCharacter && (
        <S.WarningText>공백,특수문자,숫자,기호를 입력할 수 없습니다</S.WarningText>
      )}
    </>
  );
};

export default NameInput;
