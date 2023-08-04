import CustomModal from "components/common/CustomModal";
import EmptyBox from "components/common/EmptyBox";
import Icon from "components/common/Icon";
import Text from "components/common/Text";
import ToastPopup from "components/common/ToastPopup";
import Comment from "components/domain/coaching/questionDetailPage/Comment";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import {
  ColorLightBlack6,
  ColorLightBlack7,
  ColorLightBlack8,
  ColorLightBlack9Base,
  ColorLightEltern9Base,
  ColorLightSlate2,
  ColorLightSlate9Base,
  ContentsBase1626Regular,
  ContentsXxl2232Semibold,
  TextBase1624Regular,
  TextLg1826Semibold,
  TextSm1420Regular,
  TextXs1218Regular,
  TextXs1218Semibold,
} from "lds-common/src/constants/tokens/global";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./QuestionDetailPage.styled";

const QuestionDetailPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [commentList, setCommentList] = useState([""]);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [openConfirmRegistrationCommentModal, setOpenConfirmRegistrationCommentModal] =
    useState(false);

  return (
    <>
      <LayoutDetailPage
        bottomBtn
        bottomBtnElement={
          <S.CustomInput>
            <input
              placeholder="댓글을 입력해 주세요."
              value={content}
              onChange={evt => {
                const { value } = evt.target;
                setContent(value);
              }}
            />
            <div
              onClick={() => {
                if (content) {
                  setDisplayPopup(true);
                  //setOpenConfirmRegistrationCommentModal(true);
                }
              }}
            >
              <Icon
                icon="send"
                size={24}
                fill={content.length ? ColorLightEltern9Base : ColorLightSlate9Base}
              />
            </div>
          </S.CustomInput>
        }
      >
        <S.QuestionSection>
          <Text variant={ContentsXxl2232Semibold} color={ColorLightBlack9Base}>
            아이 이유식 중단 시기에 대한 질문
          </Text>
          <S.StatusAndDateSection>
            <S.StatusChip>
              <Text variant={TextXs1218Semibold} color={ColorLightEltern9Base}>
                발달
              </Text>
            </S.StatusChip>
            <Text variant={TextXs1218Regular} color={ColorLightSlate9Base}>
              2023.04.03 07:54
            </Text>
          </S.StatusAndDateSection>
          <Text variant={ContentsBase1626Regular} color={ColorLightBlack8}>
            아이 발달과 로렘 입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그
            이상의 의미를 담지는 않는다. 또 문서에서 텍스트가 보이면 사람들은 전체적인
            프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서 출판사들은 서체나 디자인을
            보일 때는 프레젠테이션 자체에 초점을 맞추기 위해 로렘 입숨을 사용한다. 로렘 입숨은 전통
            라틴어와 닮은 점 때문에 종종 호기심 을 보입니다. 저는 이런점들이 궁금합니다!
          </Text>
        </S.QuestionSection>
        <EmptyBox height="1rem" backgroundColor={ColorLightSlate2} />
        <S.CommentSection>
          <S.CommentSectionTitle>
            <Text variant={TextLg1826Semibold} color={ColorLightBlack8}>
              답변 및 댓글
            </Text>
            <Text variant={TextLg1826Semibold} color={ColorLightBlack6}>
              {`${commentList.length}`}
            </Text>
          </S.CommentSectionTitle>
          {commentList.length === 0 ? (
            <S.NoCommentSection>
              <Text
                variant={TextBase1624Regular}
                color={ColorLightSlate9Base}
                style={{ whiteSpace: "pre-wrap" }}
              >{`전문가가 답변을 준비 중입니다.\n최대 5일 내로 답변이 등록됩니다.`}</Text>
            </S.NoCommentSection>
          ) : (
            <S.CommentListSection>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </S.CommentListSection>
          )}
        </S.CommentSection>
        {displayPopup && (
          <ToastPopup
            toastPopup={displayPopup}
            setToastPopup={setDisplayPopup}
            content="질문권 1개를 사용해 댓글을 등록했어요."
          />
        )}
      </LayoutDetailPage>
      <CustomModal
        title={"질문권을 사용하시겠어요?"}
        isOpen={openConfirmRegistrationCommentModal}
        toggleModal={() => setOpenConfirmRegistrationCommentModal(prev => !prev)}
        cancelBtn
        okBtnName="등록"
        okBtnClick={() => console.log("register comment")}
      >
        <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
          댓글 등록시 질문권 1개가 소모돼요.
        </Text>
      </CustomModal>
    </>
  );
};

export default QuestionDetailPage;
