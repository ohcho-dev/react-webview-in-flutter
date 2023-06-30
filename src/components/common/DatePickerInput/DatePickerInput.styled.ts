import { ColorLightBlack9Base, ColorLightSlate7 } from "constants/ldsConstants/global";
import styled from "styled-components";

export const DatepickerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${ColorLightSlate7};
`;

export const CustomInput = styled.input`
  width: 100%;
  border: none;
  color: ${ColorLightBlack9Base};
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.6rem;
  &:focus {
    outline: none;
  }
`;
