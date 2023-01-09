import React, { forwardRef } from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  width: 100%;
  border: none;
  color: rgba(0, 0, 0, 0.8);
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.5rem;

  &:focus {
    outline: none;
  }
`;
interface InputProps {
  className: string;
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
}
const ForwardInputRefFunction: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, value, onClick, onChange },
  ref,
) => {
  return (
    <CustomInput
      className={className}
      value={value}
      ref={ref}
      onChange={e => onChange(e.target.value)}
      onClick={onClick}
      readOnly
    />
  );
};

export const ForwardedInput = React.forwardRef(ForwardInputRefFunction);