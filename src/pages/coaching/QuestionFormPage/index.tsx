import Button from "components/common/Button";
import CustomModal from "components/common/CustomModal";
import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import QnaCategory from "components/domain/coaching/qnaPage/QnaCategory";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import {
  ColorLight2,
  ColorLightBlack7,
  ColorLightSlate11,
  ContentsXxl2232Semibold,
  TextBase1624Medium,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import { useState } from "react";
import * as S from "./QuestionFormPage.styled";

const Categories = ["발달", "언어", "놀이", "결과지"];

const QuestionFormPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("발달");
  const [questionInfo, setQuestionInfo] = useState({ title: "", content: "" });
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  return (
    <>
      <LayoutDetailPage
        bottomBtn
        bottomBtnElement={
          <Button
            theme={questionInfo.content && questionInfo.title ? "black" : "disabled"}
            content={"작성완료"}
            onClick={() => setOpenConfirmModal(true)}
          />
        }
      >
        <S.PageWrapper>
          <UseImgix
            srcUrl="/images/paper_with_magnifier.svg"
            style={{ width: "4rem", marginBottom: "0.4rem" }}
          />
          <Text variant={ContentsXxl2232Semibold} color={ColorLight2}>
            무엇이 궁금하신가요?
          </Text>
          <S.CategorySection>
            <QnaCategory
              CategoryList={Categories}
              handleCategoryClick={category => setSelectedCategory(category)}
              selectedCategory={selectedCategory}
            />
          </S.CategorySection>
          <S.InputSection>
            <Text variant={TextBase1624Medium} color={ColorLightSlate11}>
              질문 제목을 적어주세요.
            </Text>
            <S.Input
              placeholder="질문 제목을 입력해 주세요.(최대 30자)"
              maxLength={30}
              value={questionInfo.title}
              onChange={evt => {
                const { value } = evt.target;
                setQuestionInfo(prev => ({ ...prev, title: value }));
              }}
            />
          </S.InputSection>
          <S.InputSection>
            <Text variant={TextBase1624Medium} color={ColorLightSlate11}>
              질문 내용을 적어주세요.
            </Text>
            <S.TextArea
              value={questionInfo.content}
              onChange={evt => {
                const { value } = evt.target;
                setQuestionInfo(prev => ({ ...prev, content: value }));
              }}
              placeholder={`궁금하신 내용을 자세하게 적어주세요.\n작성하신 내용에 대해 해당 영역의 전문가가 댓글로 답변을 드립니다.\n답변은 영얼일 기준 최대 5일까지 소요될 수 있습니다.`}
            />
          </S.InputSection>
        </S.PageWrapper>
      </LayoutDetailPage>
      <CustomModal
        isOpen={openConfirmModal}
        toggleModal={() => setOpenConfirmModal}
        title={"질문권을 사용하시겠어요?"}
        okBtnName="등록"
        okBtnClick={() => console.log("hello")}
        cancelBtn
      >
        <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
          질문 등록 시 질문권 n개가 소모돼요.
        </Text>
      </CustomModal>
    </>
  );
};

export default QuestionFormPage;
