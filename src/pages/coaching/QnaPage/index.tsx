import CustomModal from "components/common/CustomModal";
import EmptyBox from "components/common/EmptyBox";
import FloatingButton from "components/common/FloatingButton";
import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import NoQnaList from "components/domain/coaching/qnaPage/NoQnaList";
import QnaList from "components/domain/coaching/qnaPage/QnaList";
import QnaStatusBox from "components/domain/coaching/qnaPage/QnaStatusBox";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import {
  ColorLightBlack7,
  ColorLightBlack9Base,
  ColorLightSlate2,
  ContentsXxl2232Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./QnaPage.styled";

const QnaPage = () => {
  const navigate = useNavigate();
  const qnaList = ["d"];
  const [questionNum, setQuestionNum] = useState(0);
  const [openNoQuestionModal, setOpenNoQuestionModal] = useState(false);
  return (
    <>
      <LayoutDetailPage>
        <S.TopSection>
          <Text variant={ContentsXxl2232Semibold} color={ColorLightBlack9Base}>
            Q&A 상담
          </Text>
          <QnaStatusBox onGoingQnaNum={10} questionNum={questionNum} responseCompletedNum={0} />
        </S.TopSection>
        <EmptyBox height="1rem" backgroundColor={ColorLightSlate2} />
        {qnaList.length ? <QnaList /> : <NoQnaList />}
        <FloatingButton
          page={"detail"}
          onClick={() => {
            questionNum ? navigate("/coaching/qna/pre-question") : setOpenNoQuestionModal(true);
          }}
          iconUrl={"/images/record/record_icon_pencil.svg"}
        />
      </LayoutDetailPage>
      <CustomModal
        isOpen={openNoQuestionModal}
        toggleModal={() => setOpenNoQuestionModal(prev => !prev)}
        title={"질문을 등록하려면 질문권이 필요해요."}
        topImage={<UseImgix srcUrl="/images/icon-sad-circle.svg" />}
      >
        <Text
          variant={TextSm1420Regular}
          color={ColorLightBlack7}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {`질문권이 없어서 질문을 작성할 수 없어요. \n질문권은 개별 구매 혹은 프로그램 구매 시 얻을 수 있어요.`}
        </Text>
      </CustomModal>
    </>
  );
};

export default QnaPage;
