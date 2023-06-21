import * as DT from "../../../constants/ldsConstants/global";
import * as S from "./RecordChip.styled";

interface chipProps {
  status: string;
  style?: object;
}

const STATUS: {
  [key: string]: { name: string; color: string; borderColor: string; width?: string };
} = {
  PRACTICE: { name: "발달연습", color: DT.ColorLightAmber10, borderColor: DT.ColorLightAmber6 },
  DAILY: { name: "일상", color: DT.ColorLightEltern9Base, borderColor: DT.ColorLightEltern7 },
  PLAY: { name: "놀이", color: DT.ColorLightRed8, borderColor: DT.ColorLightRed6 },
  L: { name: "대근육", color: DT.ColorLightPurple8, borderColor: DT.ColorLightPurple6 },
  S: { name: "소근육", color: DT.ColorLightPurple8, borderColor: DT.ColorLightPurple6 },
  LANGUAGE: { name: "언어", color: DT.ColorLightPurple8, borderColor: DT.ColorLightPurple6 },
  MONTH_LEVEL: {
    name: "#8개월~",
    color: DT.ColorLightBrandBlue8,
    borderColor: DT.ColorLightBrandBlue6,
  },
};

const RecordChip = (props: chipProps) => {
  const { status, style } = props;
  return (
    <S.CustomChip
      color={STATUS[status].color}
      borderColor={STATUS[status].borderColor}
      style={style}
    >
      {STATUS[status].name}
    </S.CustomChip>
  );
};

export default RecordChip;
