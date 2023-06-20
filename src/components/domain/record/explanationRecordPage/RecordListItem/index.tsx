import * as S from "./RecordListItem";
import UseImgix from "../../../../../components/common/Imgix";

interface RecordListItemProps {
  data?: object[];
}

const tempData = [
  {
    id: 0,
    title: "낙서하기",
    desc: "발달 종합 발달 평가를 했더니 우리아이가 천재가 아닌가 싶은 생각이 막든다. 우리 애기 최고다 어화둥둥 이쁜이 내일은또",
    date: "2023.04.10 (300일)",
    imgUrl: "/images/record/record_muscle.svg",
  },
  {
    id: 1,
    title: "식사하기",
    desc: "발달 종합 발달 평가를 했더니 우리아이가 천재가 아닌가 싶은 생각이 막든다. 우리 애기 최고다 어화둥둥 이쁜이 내일은또",
    date: "2023.04.10 (300일)",
    imgUrl: "/images/record/record_daily.svg",
  },
  {
    id: 2,
    title: "동그라미 그리기",
    desc: "발달 종합 발달 평가를 했더니 우리아이가 천재가 아닌가 싶은 생각이 막든다. 우리 애기 최고다 어화둥둥 이쁜이 내일은또",
    date: "2023.04.08 (298일)",
    imgUrl: "/images/record/record_play.svg",
  },
];

const RecordListItem: React.FC<RecordListItemProps> = ({ data = [] }) => {
  return (
    <S.ListItemWrapper>
      {tempData.map(item => (
        <S.ListItemCard key={item.id}>
          <S.ImageWrap>
            <UseImgix srcUrl={item.imgUrl} alt={item.title} />
          </S.ImageWrap>
          <S.TextWrap>
            <S.Title>{item.title}</S.Title>
            <S.Description>{item.desc}</S.Description>
            <S.Date>{item.date}</S.Date>
          </S.TextWrap>
        </S.ListItemCard>
      ))}
    </S.ListItemWrapper>
  );
};

export default RecordListItem;
