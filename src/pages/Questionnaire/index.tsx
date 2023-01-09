import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/common/Button";
import Chip from "../../components/common/Chip";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";

interface QuestionnaireProps {}

const QuestionnarieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

const QuestionnarieTitle = styled.div`
  font-size: 2.6rem;
  font-weight: 600;

  margin-bottom: 1rem;
`;

const QuestionnarieDescription = styled.div`
  width: 100%;
  line-height: 2.2rem;
  font-weight: 400;
  font-size: 1.6rem;

  margin-top: 1.5rem;
  margin-bottom: 4rem;
`;

const Questionnaire = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <LayoutDetailPage
      bottomBtn
      bottomBtnElement={
        <Button
          content="설문하기"
          theme="black"
          onClick={() => navigate("/coaching/questionnarie/form/1")}
        />
      }
    >
      <QuestionnarieWrapper>
        <QuestionnarieTitle>12개월 발달검사</QuestionnarieTitle>
        <Chip status="survey" />
        <QuestionnarieDescription>
          아이가 낙서하는 모습을 기록해볼까요?모습을 기록하면 발달 과정을 확인하고 또래 친구들의
          발달은 어느 정도인지 알아볼 수 있어요.
        </QuestionnarieDescription>
      </QuestionnarieWrapper>
    </LayoutDetailPage>
  );
};

export default Questionnaire;
