import Button from "components/common/Button";
import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import { ColorLight2, ContentsXxl2232Semibold } from "lds-common/src/constants/tokens/global";
import { useNavigate } from "react-router-dom";
import * as S from "./PreQuestionPage.styled";

const PreQuestionPage = () => {
  const navigate = useNavigate();
  return (
    <LayoutDetailPage
      bottomBtn
      bottomBtnElement={
        <Button
          theme={"black"}
          content={"위 내용을 확인했습니다."}
          onClick={() => navigate("/coaching/qna/question-form")}
        />
      }
    >
      <S.PageWrapper>
        <UseImgix srcUrl={"/images/exclamation_mark.svg"} />
        <S.TitleSection>
          <Text variant={ContentsXxl2232Semibold} color={ColorLight2}>
            질문 전 확인해 주세요.
          </Text>
        </S.TitleSection>
      </S.PageWrapper>
      <UseImgix srcUrl={"/images/pre_question_paragraph.svg"} style={{ width: "37.5rem" }} />
    </LayoutDetailPage>
  );
};

export default PreQuestionPage;
