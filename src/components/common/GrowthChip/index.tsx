import * as DT from "lds-common/src/constants/tokens/global";
import * as S from "./GrowthChip.styled";
import Text from "../Text";

interface chipProps {
  label: string;
  style?: object;
}

const GrowthChip = (props: chipProps) => {
  const { label, style } = props;
  return (
    <S.CustomChip style={{ border: `solid 1px ${DT.ColorLightPurple6}`, ...style }}>
      <Text variant={DT.TextXs1218Semibold} color={DT.ColorLightPurple8}>
        {label}
      </Text>
    </S.CustomChip>
  );
};

export default GrowthChip;
