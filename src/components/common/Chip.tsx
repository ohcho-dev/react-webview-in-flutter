import styled from "styled-components";

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
  issuedCompleted: { name: "발급완료", color: "#FFFFFF", width: "5.3rem" },
};

const CustomChip = styled.div`
  height: 2.2rem;
  width: ${(prop: { customWidth: string | undefined }) => prop.customWidth || "4.3rem"};
  color: ${prop => prop.color};
  border: 1px solid ${prop => (prop.color === "#FFFFFF" ? "#282828" : prop.color)};
  border-radius: 0.2rem;
  background-color: ${prop => (prop.color === "#FFFFFF" ? "#282828" : "white")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Chip = (props: chipProps) => {
  const { status, style } = props;
  return (
    <CustomChip color={STATUS[status].color} customWidth={STATUS[status].width} style={style}>
      {STATUS[status].name}
    </CustomChip>
  );
};

export default Chip;
