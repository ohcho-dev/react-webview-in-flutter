import { ColorLightEltern9Base } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const InputBox = styled.input`
  width: 100%;
  border: none;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  color: rgba(0, 0, 0, 0.8);

  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  :focus {
    outline: none;
    border-bottom: 1px solid ${ColorLightEltern9Base};
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const InputTitle = styled.div`
  margin-bottom: 1rem;
`;

export const PageLayout = styled.div`
  margin-top: 7rem;
`;

export const FormWrap = styled.form`
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;
