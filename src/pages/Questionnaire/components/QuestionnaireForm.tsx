import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/common/Button";
import CustomModal from "../../../components/common/CustomModal";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import Question from "./Question";

const FormWrapper = styled.div``;

const FormTitle = styled.div`
  margin: 0 2rem;
  padding: 1.5rem 1rem;

  font-weight: 500;
  font-size: 1.8rem;
  color: rgba(10, 10, 10, 0.8);

  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);

  img {
    margin-left: 0.5rem;
  }
`;

const QuestionGap = styled.div`
  width: 100%;
  height: 1rem;
  background-color: #f6f6f6;
`;

const QuestionnaireForm = (): JSX.Element => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const questionList = [
    {
      id: 1,
      question: "부모님이 말하면 반응하여 옹알이를 하거나 웃어요",
      answers: [{ title: "잘해요" }, { title: "때때로 잘 할수 있어요." }, { title: "못해요" }],
    },
    {
      id: 2,
      question: "짏문2",
      answers: [{ title: "잘해요" }, { title: "때때로 잘 할수 있어요." }, { title: "못해요" }],
    },
    {
      id: 3,
      question: "질문3",
      answers: [{ title: "잘해요" }, { title: "때때로 잘 할수 있어요." }, { title: "못해요" }],
    },
  ];
  return (
    <>
      <LayoutDetailPage
        style={{ borderBottom: "none" }}
        bottomBtn
        bottomBtnElement={
          <Button theme="black" content="완료하기" onClick={() => setOpenSuccessModal(true)} />
        }
      >
        <FormWrapper>
          <FormTitle>
            12개월 발달검사
            <img alt="form character" src="/images/form-character.svg" />
          </FormTitle>
          {questionList.map((question, index: number) => {
            return (
              <div key={`${question.question + question.id}`}>
                <Question questionNumber={index + 1} />
                {index !== questionList.length - 1 && (
                  <QuestionGap key={`${question.question + question.id}`} />
                )}
              </div>
            );
          })}
        </FormWrapper>
      </LayoutDetailPage>
      <CustomModal
        content="선택한 답변은 설문 상태 확인 페이지에서 다시 확인하실 수 있어요."
        isOpen={openSuccessModal}
        okBtnClick={() => navigate(`/coaching/coaching-detail/${state.coachingId}`)}
        toggleModal={() => setOpenSuccessModal(!openSuccessModal)}
        title="설문 답변을 완료했어요."
      />
    </>
  );
};

export default QuestionnaireForm;
