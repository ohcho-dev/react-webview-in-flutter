import {
  ColorLightEltern9Base,
  ColorLightSlate7,
  ColorLightSlate9Base,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 2.5rem;
`;

export const CategorySection = styled.div`
  margin: 1.6rem 0 2rem 0;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  margin-bottom: 1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem 1.6rem;

  border-radius: 0.6rem;
  border: 1px solid ${ColorLightSlate7};

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem; /* 150% */
  letter-spacing: -0.4px;

  &:focus {
    border: 1px solid ${ColorLightEltern9Base};
    outline: none;
  }

  ::placeholder {
    color: ${ColorLightSlate9Base};
  }
`;

export const TextArea = styled.textarea`
  height: 30rem;
  padding: 1.2rem 1.6rem;

  border-radius: 0.6rem;
  border: 1px solid ${ColorLightSlate7};

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem; /* 150% */
  letter-spacing: -0.4px;

  &:focus {
    border: 1px solid ${ColorLightEltern9Base};
    outline: none;
  }

  ::placeholder {
    color: ${ColorLightSlate9Base};
  }
`;
