import {
  ColorLightBlack9Base,
  ColorLightSlate3,
  ColorLightSlate7,
  ColorLightSlate9Base,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const InputBox = styled.input`
  width: 100%;
  border: none;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem; /* 162.5% */
  letter-spacing: -0.04rem;
  color: ${ColorLightBlack9Base};
  border: 1px solid ${ColorLightSlate3};
  background: ${ColorLightSlate3};
  padding: 1.1rem 1.6rem;
  border-radius: 0.6rem;

  :focus {
    outline: none;
    border: 1px solid ${ColorLightSlate7};
  }

  ::placeholder {
    color: ${ColorLightSlate9Base};
  }
`;
