import * as S from "./Chip.styled";

interface chipProps {
  status: string;
  style?: object;
}

const STATUS: {
  [key: string]: { name: string; color: string; width?: string };
} = {
  TTPST_PENDING: { name: "대기중", color: "rgba(10,10,10,0.5)" },
  TSTY_SURVEY: { name: "설문", color: "#FF8A00", width: "3.3rem" },
  TSTY_VIDEO: { name: "동영상", color: "#8873F7" },
  TSST_ONGOING: { name: "진행중", color: "rgba(0, 94, 236,0.7)" },
  TSST_COMPLETE: { name: "완료", color: "rgba(92, 165, 37,0.9)", width: "3.3rem" },
  TSST_UPLOAD: { name: "확인중", color: "#5AC4B1" },
  TSST_REJECT: { name: "재등록요청", color: "#FF6B6B", width: "6.3rem" },
  TTPST_COMPLETE: { name: "발급완료", color: "#FFFFFF", width: "5.3rem" },
  EXPIRED: { name: "기한만료", color: "#FFFFFF", width: "5.3rem" },
};

const Chip = (props: chipProps) => {
  const { status, style } = props;
  return (
    <S.CustomChip color={STATUS[status].color} customWidth={STATUS[status].width} style={style}>
      {STATUS[status].name}
    </S.CustomChip>
  );
};

export default Chip;
