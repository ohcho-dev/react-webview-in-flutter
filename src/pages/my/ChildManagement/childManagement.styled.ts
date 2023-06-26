import { ColorLightEltern9Base } from "constants/ldsConstants/global";
import styled from "styled-components";

export const InputBox = styled.input`
  width: 100%;
  border: none;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  color: rgba(0, 0, 0, 0.8);

  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
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
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.5rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

export const PageLayout = styled.div`
  margin-top: 7rem;
`;

export const FormWrap = styled.form`
  padding: 0 2.5rem;
`;
