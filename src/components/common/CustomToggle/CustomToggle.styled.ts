import { ColorLightEltern9Base, ColorLightSlate7 } from "constants/ldsConstants/global";
import styled, { css } from "styled-components";

export const StyledLabel = styled.label<{
  checked: boolean;
  size: "sm" | "md";
  pointColor?: string;
  disabledColor?: string;
}>`
  cursor: pointer;
  text-indent: -9999px;
  width: 5.4rem;
  height: 3.2rem;
  background: ${({ checked, pointColor, disabledColor }) =>
    checked
      ? pointColor
        ? pointColor
        : ColorLightEltern9Base
      : disabledColor
      ? disabledColor
      : ColorLightSlate7};
  display: block;
  border-radius: 100px;
  position: relative;
  ${({ size }) => {
    switch (size) {
      case "md":
        return css`
          width: 5.4rem;
          height: 3.2rem;
        `;
      case "sm":
        return css`
          width: 4.4rem;
          height: 2.6rem;
        `;
    }
  }}
  &:after {
    content: "";
    position: absolute;
    left: ${({ checked, size }) =>
      checked ? (size === "md" ? `calc(50% - 0.2rem)` : `calc(50% - 0.3rem)`) : "0.3rem"};
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
    ${({ size }) => {
      switch (size) {
        case "md":
          return css`
            width: 2.6rem;
            height: 2.6rem;
            top: 0.3rem;
          `;
        case "sm":
          return css`
            width: 2.2rem;
            height: 2.2rem;
            top: 0.2rem;
          `;
      }
    }}
  }
`;
