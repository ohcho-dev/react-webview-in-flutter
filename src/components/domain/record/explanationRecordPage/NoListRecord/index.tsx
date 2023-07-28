import * as S from "./NoListRecord.styled";
import UseImgix from "../../../../../components/common/Imgix";
import Text from "components/common/Text";
import {
  ColorLightBlack12,
  ColorLightBlack5,
  ContentsSm1424Regular,
  TextLg1826Medium,
} from "lds-common/src/constants/tokens/global";

const INFO_MESSAGE = [
  "아이의 발달을 위한 연습을 영상으로 기록해 보세요.",
  "발달 연습을 기록하면 예상 발달 정도를  확인할 수 있어요.",
  "기록을 하고 스탬프를 획득해 보세요. 엘턴 이용에 도움되는 다양한 혜택을 받을 수 있어요.",
];

const NoListRecord = () => {
  return (
    <S.NoRecordWrapper>
      <S.ImageWrap>
        <UseImgix srcUrl="/images/common/charactor_empty.svg" />
      </S.ImageWrap>
      <Text variant={TextLg1826Medium} color={ColorLightBlack12}>
        아직 기록이 없어요.
      </Text>
      <S.EmptyDesc>
        <ol>
          {INFO_MESSAGE.map((item, index) => (
            <li key={item} value={item}>
              <Text variant={ContentsSm1424Regular} color={ColorLightBlack5}>
                {`${index + 1}. ${item}`}
              </Text>
            </li>
          ))}
        </ol>
      </S.EmptyDesc>
    </S.NoRecordWrapper>
  );
};

export default NoListRecord;
