import { useEffect, useState } from "react";
import * as S from "./CustomToggle.styled";

interface CustomToggleProps {
  value: boolean;
  handleValue: () => void;
  size: "sm" | "md";
  pointColor?: string;
  disabledColor?: string;
}

const CustomToggle: React.FC<CustomToggleProps> = ({
  value,
  handleValue,
  size = "md",
  pointColor,
  disabledColor,
}) => {
  return (
    <S.StyledLabel
      checked={value}
      pointColor={pointColor}
      disabledColor={disabledColor}
      size={size}
    >
      <input type="checkbox" checked={value} onChange={handleValue} />
    </S.StyledLabel>
  );
};
export default CustomToggle;
