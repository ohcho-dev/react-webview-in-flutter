import styled from "styled-components";

const CustomSpinner = styled.div`
  width: 100%;
  height: 100%;
`;
const LoadingSpinner = () => {
  return (
    <CustomSpinner>
      <img alt="loading spinner" src="/images/spinner2.svg" />
    </CustomSpinner>
  );
};

export default LoadingSpinner;
