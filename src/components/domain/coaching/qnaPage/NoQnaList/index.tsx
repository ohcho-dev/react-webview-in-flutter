import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import {
  TextLg1826Medium,
  ColorLightBlack12,
  TextSm1420Regular,
  ColorLightSlate9Base,
} from "lds-common/src/constants/tokens/global";
import * as S from "./NoQnaList.styled";

const NoQnaList = () => {
  return (
    <S.NoQna>
      <UseImgix srcUrl="/images/common/charactor_empty.svg" />
      <Text variant={TextLg1826Medium} color={ColorLightBlack12} style={{ marginBottom: "0.5rem" }}>
        아직 작성한 질문이 없어요.
      </Text>
      <Text variant={TextSm1420Regular} color={ColorLightSlate9Base}>
        {`아래의 둥근 '작성'버튼을 선택하여 아이 발달과`}
      </Text>
      <Text variant={TextSm1420Regular} color={ColorLightSlate9Base}>
        관련된 궁금증을 남겨주세요.
      </Text>
    </S.NoQna>
  );
};

export default NoQnaList;
