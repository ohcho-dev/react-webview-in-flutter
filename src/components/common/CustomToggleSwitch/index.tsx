import { useEffect, useState } from "react";
import * as S from "./CustomToggleSwitch.styled";

interface CustomToggleSwitchProps {
  data: { type: string; value: number };
  handleValue: () => void;
}

const CustomToggleSwitch: React.FC<CustomToggleSwitchProps> = ({ data, handleValue }) => {
  const [switchState, setSwitchState] = useState(true);

  useEffect(() => {
    if (data.value === 0) setSwitchState(false);
    if (data.value === 1) setSwitchState(true);
  }, [data.value]);

  return (
    <S.StyledLabel htmlFor={data.type} checked={switchState}>
      <input id={data.type} type="checkbox" checked={switchState} onChange={handleValue} />
    </S.StyledLabel>
  );
};
export default CustomToggleSwitch;
