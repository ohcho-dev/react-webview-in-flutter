import styled from "styled-components";
import * as DT from "../../constant/ldsConstants/global";

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

const CustomChip = styled.span`
  height: 2.2rem;
  padding: 0.2rem 0.6rem;
  color: ${prop => prop.color};
  border: 1px solid ${(prop: { borderColor: string }) => prop.borderColor};
  border-radius: 0.2rem;
  background-color: ${prop => (prop.color === "#FFFFFF" ? "#282828" : "white")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
`;

const RecordChip = (props: chipProps) => {
  const { status, style } = props;
  return (
    <CustomChip color={STATUS[status].color} borderColor={STATUS[status].borderColor} style={style}>
      {STATUS[status].name}
    </CustomChip>
  );
};

export default RecordChip;
