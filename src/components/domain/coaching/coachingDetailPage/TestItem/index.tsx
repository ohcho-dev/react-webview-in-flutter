import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import {
  ColorLightBlack5,
  ColorLightBlack6,
  ColorLightBlack9Base,
  ColorLightEltern9Base,
  TextBase1624Semibold,
  TextXs1218Regular,
  TextXs1218Semibold,
} from "lds-common/src/constants/tokens/global";
import * as S from "./TestItem.styled";

interface TestItemProps {
  imgUrl: string;
  coachingName: string;
  testName: string;
  status: string;
  expirationDate: string;
  daysleft: number;
}

const TestItem = ({
  imgUrl,
  coachingName,
  testName,
  status,
  expirationDate,
  daysleft,
}: TestItemProps) => {
  return (
    <S.ItemWrapper finishedTest={daysleft <= 0}>
      <UseImgix srcUrl={imgUrl} />
      <S.ItemInfoSection>
        <Text variant={TextXs1218Semibold} color={ColorLightBlack6}>
          {coachingName}
        </Text>
        <Text variant={TextBase1624Semibold} color={ColorLightBlack9Base}>
          {testName}
        </Text>
        <div>
          <Text variant={TextXs1218Regular} color={ColorLightBlack5}>
            {`${status} ${expirationDate}`}
          </Text>
          <Text
            variant={TextXs1218Regular}
            color={ColorLightEltern9Base}
            style={{ marginLeft: "0.5rem" }}
          >
            {`${daysleft}일 남음`}
          </Text>
        </div>
      </S.ItemInfoSection>
    </S.ItemWrapper>
  );
};

export default TestItem;
