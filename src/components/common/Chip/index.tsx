import {
  ColorDarkRed11,
  ColorLight1,
  ColorLightAmber10,
  ColorLightAmber6,
  ColorLightBrandBlue6,
  ColorLightBrandBlue8,
  ColorLightEltern3,
  ColorLightEltern7,
  ColorLightEltern9Base,
  ColorLightPurple6,
  ColorLightPurple8,
  ColorLightRed6,
  ColorLightSage9Base,
  ColorLightSlate7,
} from "constants/ldsConstants/global";
import * as S from "./Chip.styled";

interface chipProps {
  status: string;
}

const STATUS: {
  [key: string]: { name: string; color: string; borderColor: string; backgroundColor: string };
} = {
  TTPST_PENDING: {
    name: "대기중",
    color: ColorLightSage9Base,
    borderColor: ColorLightSlate7,
    backgroundColor: ColorLight1,
  },
  TSTY_SURVEY: {
    name: "설문",
    color: ColorLightAmber10,
    borderColor: ColorLightAmber6,
    backgroundColor: ColorLight1,
  },
  TSTY_VIDEO: {
    name: "동영상",
    color: ColorLightPurple8,
    borderColor: ColorLightPurple6,
    backgroundColor: ColorLight1,
  },
  TSST_ONGOING: {
    name: "진행중",
    color: ColorLightBrandBlue8,
    borderColor: ColorLightBrandBlue6,
    backgroundColor: ColorLight1,
  },
  TSST_COMPLETE: {
    name: "완료",
    color: ColorLightEltern9Base,
    borderColor: ColorLightEltern7,
    backgroundColor: ColorLightEltern3,
  },
  TSST_UPLOAD: {
    name: "확인중",
    color: ColorLightEltern9Base,
    borderColor: ColorLightEltern7,
    backgroundColor: ColorLight1,
  },
  TSST_REJECT: {
    name: "재등록요청",
    color: ColorDarkRed11,
    borderColor: ColorLightRed6,
    backgroundColor: ColorLight1,
  },
  TTPST_COMPLETE: {
    name: "발급완료",
    color: ColorLightEltern9Base,
    borderColor: ColorLightEltern7,
    backgroundColor: ColorLightEltern3,
  },
  EXPIRED: {
    name: "기한만료",
    color: "#FFFFFF",
    borderColor: ColorLight1,
    backgroundColor: ColorLight1,
  },
};

const Chip = (props: chipProps) => {
  const { status } = props;
  return (
    <S.CustomChip
      color={STATUS[status].color}
      borderColor={STATUS[status].borderColor}
      backgroundColor={STATUS[status].backgroundColor}
    >
      {STATUS[status].name}
    </S.CustomChip>
  );
};

export default Chip;
