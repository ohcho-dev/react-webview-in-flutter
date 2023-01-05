import { useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Button from "../../../components/common/Button";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import { BottomBtnWrap } from "../../ProgramPage/components/styled";

const floatingMove = keyframes`
	 0%{transform:translate(0,0);}
   100%{transform:translate(0,-10px);}
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SuccessImg = styled.img`
  width: 30rem;
  height: 17rem;
`;

const FloatingImg = styled.img`
  position: absolute;
  bottom: -1.5rem;

  animation: ${floatingMove} 1s alternate infinite ease-in-out;
`;

const ApplyCoachingSuccess = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <LayoutDetailPage
      bottomBtn
      style={{ overflow: "hidden" }}
      bottomBtnElement={
        <Button
          theme={"black"}
          content={"코칭 시작하기"}
          onClick={() => navigate(`/coaching/coaching-detail/${location.state.id}`)}
        />
      }
    >
      <ContentWrapper>
        <SuccessImg src="/images/apply-coaching-success-img.svg" alt="apply coaching success img" />
        <FloatingImg src="/images/apply-coaching-success-floating-img.svg" alt="floating img" />
      </ContentWrapper>
    </LayoutDetailPage>
  );
};

export default ApplyCoachingSuccess;
