import * as S from "./Comment.styled";
import Text from "components/common/Text";
import {
  ColorLightBlack8,
  ColorLightBlack9Base,
  ColorLightSlate9Base,
  TextBase1624Regular,
  TextBase1624Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import UseImgix from "components/common/Imgix";

const Comment = () => {
  return (
    <S.CommentWrapper>
      <S.UserInfoSection>
        <UseImgix srcUrl="/images/icon-profile-default.svg" />
        <div>
          <Text variant={TextBase1624Semibold} color={ColorLightBlack9Base}>
            김나나 보호자님
          </Text>
          <Text variant={TextSm1420Regular} color={ColorLightSlate9Base}>
            2023.04.03 08:20
          </Text>
        </div>
      </S.UserInfoSection>
      <Text variant={TextBase1624Regular} color={ColorLightBlack8}>
        한가지 더 여쭤보고싶습니다. 구체적으로 어느시기에 아기가 뭘 어떻게 냠냠 하나요?
      </Text>
    </S.CommentWrapper>
  );
};

export default Comment;
