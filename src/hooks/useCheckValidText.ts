import { useEffect, useState } from "react";

interface useCheckValidTextProps {
  initialValue: string;
}

const useCheckValidText = ({ initialValue }: useCheckValidTextProps) => {
  const [valid, setValid] = useState(false);
  const [textValue, setTextValue] = useState(initialValue);
  const [warningText, setWarningText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
  const handleChange = (newValue: string) => {
    setStartTyping(true);
    setTextValue(newValue);

    // 특수문자 체크
    const specialCharacterRegex = /[^a-zA-Zㄱ-ㅎㅏ-ㅣㅑ-ㅡ가-힣]/;
    const hasSpecialCharacter = specialCharacterRegex.test(newValue);

    // 한글만 있을때 의미있는 문자만 가능
    // const koreanOnlyRegex = /^[ㄱ-ㅎ|가-힣|ㅏ-ㅣ|ㅑ-ㅡ|ㅣ]*$/;
    // const englishOnlyRegex = /^[a-zA-Z]*$/;
    // const meaningfulRegex = /^[가-힣]*$/;
    // const isMeaningfulName =
    //   (koreanOnlyRegex.test(newValue) && !meaningfulRegex.test(newValue)) ||
    //   (!koreanOnlyRegex.test(newValue) && !englishOnlyRegex.test(newValue));
    if (!hasSpecialCharacter) {
      setWarningText("올바른 이름 형식이 아닙니다.");
    }
    setValid(!hasSpecialCharacter);
  };

  return {
    textValue,
    handleChange,
    valid,
    warningText,
    startTyping,
  };
};

export default useCheckValidText;
