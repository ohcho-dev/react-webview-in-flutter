import React from "react";
import styled from "styled-components";

const CustomSpinner = styled.div`
  width: 100%;
  height: ${(prop: { height?: string }) => (prop.height ? prop.height : "100vh")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
`;

interface LoadingSpinnerProps {
  height?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ height }) => {
  return (
    <CustomSpinner height={height}>
      <img alt="loading spinner" src="/images/spinner2.svg" />
    </CustomSpinner>
  );
};

export default LoadingSpinner;
