import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLOR_PALETTE } from "../../constant/color";

const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 5.4rem;
  height: 3.2rem;
  background: ${({ checked }) => (checked ? COLOR_PALETTE.point : COLOR_PALETTE.gray)};
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "calc(50% - 0.2rem)" : "0.3rem")};
    top: 0.3rem;
    width: 2.6rem;
    height: 2.6rem;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

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
    <StyledLabel htmlFor={data.type} checked={switchState}>
      <input id={data.type} type="checkbox" checked={switchState} onChange={handleValue} />
    </StyledLabel>
  );
};
export default CustomToggleSwitch;
