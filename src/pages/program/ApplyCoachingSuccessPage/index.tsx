import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import UseImgix from "../../../components/common/Imgix";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import * as S from "./applyCoachingSuceessPage.styled";

const ApplyCoachingSuccess = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <LayoutDetailPage
      handleBackBtnClick={() => navigate("/program")}
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
      <S.ContentWrapper>
        <S.SuccessImg>
          <UseImgix
            srcUrl="/images/apply-coaching-success-img.png"
            alt="apply coaching success img"
            style={{ width: "100%" }}
          />
        </S.SuccessImg>
        <S.FloatingImg>
          <UseImgix
            srcUrl="/images/apply-coaching-success-floating-img.png"
            alt="floating img"
            style={{ width: "100%" }}
          />
        </S.FloatingImg>
      </S.ContentWrapper>
    </LayoutDetailPage>
  );
};

export default ApplyCoachingSuccess;
