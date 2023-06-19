import React from "react";
import styled from "styled-components";
import UseImgix from "./Imgix";

const CustomSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(prop: { height?: string }) => (prop.height ? prop.height : "100vh")};
`;

interface LoadingSpinnerProps {
  height?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ height }) => {
  return (
    <CustomSpinner height={height}>
      <UseImgix alt="loading spinner" srcUrl="/images/spinner2.svg" />
    </CustomSpinner>
  );
};

export default LoadingSpinner;
