import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import UseImgix from "../../../components/common/Imgix";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import * as S from "./applySucessPage.styled";

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
      <S.ContentWrapper>
        <UseImgix alt="apply success img" srcUrl="/images/apply-success-img.png" />
        <UseImgix alt="success next step img" srcUrl="/images/success-next-step-img.svg" />
      </S.ContentWrapper>
    </LayoutDetailPage>
  );
};

export default ApplySuccessPage;
