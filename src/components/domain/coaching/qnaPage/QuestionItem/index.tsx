import Icon from "components/common/Icon";
import Text from "components/common/Text";
import {
  ColorLightBlack6,
  ColorLightBlack9Base,
  ColorLightEltern9Base,
  TextBase1624Semibold,
  TextSm1420Regular,
  TextXs1218Regular,
} from "lds-common/src/constants/tokens/global";
import * as S from "./QuestionItem.styled";

interface QuestionItemProps {
  category: string;
  title: string;
  date: string;
  status: string;
  commentNum: number;
  handleClick: () => void;
}

const QuestionItem = ({
  category,
  title,
  date,
  status,
  commentNum,
  handleClick,
}: QuestionItemProps) => {
  return (
    <S.QuestionItemWrapper onClick={handleClick}>
      <Text variant={TextSm1420Regular} color={ColorLightBlack6} style={{ marginBottom: "0.4rem" }}>
        {category}
      </Text>
      <S.TitleSection>
        <Text
          variant={TextBase1624Semibold}
          color={ColorLightBlack9Base}
          style={{ marginBottom: "0.9rem" }}
        >
          {title}
        </Text>
      </S.TitleSection>
      <S.BottomSection>
        <S.BottomItem>
          <Text variant={TextXs1218Regular} color={ColorLightBlack6}>
            {date}
          </Text>
          <Text
            variant={TextXs1218Regular}
            color={status === "진행중" ? ColorLightEltern9Base : ColorLightBlack6}
          >
            {status}
          </Text>
        </S.BottomItem>
        <S.BottomItem>
          <Icon icon={"message-circle-2"} size={18} />

          <Text
            variant={TextSm1420Regular}
            color={ColorLightBlack6}
            style={{ lineHeight: "none", paddingTop: "0.15rem" }}
          >
            {`${commentNum}`}
          </Text>
        </S.BottomItem>
      </S.BottomSection>
    </S.QuestionItemWrapper>
  );
};

export default QuestionItem;
