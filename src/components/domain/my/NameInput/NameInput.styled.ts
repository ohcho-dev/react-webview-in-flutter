import {
  ColorLightBlack9Base,
  ColorLightEltern9Base,
  ColorLightSlate7,
  ColorLightSlate8,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const InputBox = styled.input<{ warning: boolean }>`
  width: 100%;
  border: none;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  color: ${ColorLightBlack9Base};

  padding-bottom: 1rem;
  border-bottom: ${({ warning }) =>
    warning ? "1px solid #fd7473" : `1px solid ${ColorLightSlate7}`};

  :focus {
    outline: none;
    border-bottom: ${({ warning }) =>
      warning ? "1px solid #fd7473" : `1px solid ${ColorLightEltern9Base}`};
  }

  ::placeholder {
    color: ${ColorLightSlate8};
  }
`;

export const WarningText = styled.div`
  padding-top: 1rem;
  font-size: 1.2rem;
  color: #fd7473;
`;
