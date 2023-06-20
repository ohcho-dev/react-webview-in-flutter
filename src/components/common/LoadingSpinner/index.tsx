import React from "react";
import UseImgix from "../Imgix";
import * as S from "./LoadingSpinner.styled";

interface LoadingSpinnerProps {
  height?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ height }) => {
  return (
    <S.CustomSpinner height={height}>
      <UseImgix alt="loading spinner" srcUrl="/images/spinner2.svg" />
    </S.CustomSpinner>
  );
};

export default LoadingSpinner;
