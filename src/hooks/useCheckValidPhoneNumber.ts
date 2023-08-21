import { useState } from "react";

const PHONE_NUMBER_LENGTH = 11;

interface useCheckValidPhoneNumberProps {
  initialValue: string;
}

const useCheckValidPhoneNumber = ({ initialValue }: useCheckValidPhoneNumberProps) => {
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState<string>(initialValue);
  const [warningText, setWarningText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  const handleChange = (newValue: string) => {
    const newNumericValue = newValue.replace(/\D/g, "");
    setStartTyping(true);
    setValue(newNumericValue);

    if (!newNumericValue) return;

    if (newNumericValue.toString().length !== PHONE_NUMBER_LENGTH) {
      setWarningText("올바른 핸드폰 번호 형식이 아닙니다.");
      setValid(false);
    } else {
      setValid(true);
    }
  };

  return {
    value,
    handleChange,
    valid,
    warningText,
    startTyping,
  };
};

export default useCheckValidPhoneNumber;
