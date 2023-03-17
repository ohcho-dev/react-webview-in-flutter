import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import UseImgix from "../../../utils/UseImgix";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img:nth-child(1) {
    width: 29.7rem;
    height: 16.9rem;

    margin-bottom: 2.5rem;
  }

  img:nth-child(2) {
    width: 33.5rem;
    height: 8rem;
  }
`;

const ApplySuccessPage = () => {
  const navigate = useNavigate();
  return (
    <LayoutDetailPage
      handleBackBtnClick={() => navigate("/program")}
      bottomBtn
      bottomBtnElement={
        <Button theme={"black"} content={"확인"} onClick={() => navigate("/program")} />
      }
    >
      <ContentWrapper>
        <UseImgix alt="apply success img" srcUrl="/images/apply-success-img.png" />
        <UseImgix alt="success next step img" srcUrl="/images/success-next-step-img.svg" />
      </ContentWrapper>
    </LayoutDetailPage>
  );
};

export default ApplySuccessPage;
