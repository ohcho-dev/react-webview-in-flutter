import styled from "styled-components";

export const ColorSelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const RadioWrap = styled.div`
  width: 100%;
  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.5rem;
  letter-spacing: -0.4px;
  color: rgba(10, 10, 10, 0.8);
`;

export const RadioButton = styled.input`
  display: none;

  &:checked + ${Label} {
    background: rgba(90, 196, 177, 0.12);
    border: 1px solid #5ac4b1;
    color: #00c7b1;
  }
`;