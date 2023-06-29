import styled from "styled-components";
import { IconProps } from "types/common/icon";
import { iconSet } from "./iconSet";

const CustomSvg = styled.svg<{ size: number }>`
  height: ${({ size }) => size / 10}rem;
`;

const Icon = ({ icon, size = 24, fill }: IconProps) => {
  return (
    <CustomSvg size={size} viewBox={iconSet[icon].viewBox} fill={fill ? fill : iconSet[icon].fill}>
      <path d={iconSet[icon].path} />
    </CustomSvg>
  );
};

export default Icon;
