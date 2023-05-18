import Imgix from "react-imgix";
import styled from "styled-components";

interface RecordListItemProps {
  data?: object[];
}

const tempData = [
  {
    id: 0,
    title: "낙서하기",
    desc: "발달 종합 발달 평가를 했더니 우리아이가 천재가 아닌가 싶은 생각이 막든다. 우리 애기 최고다 어화둥둥 이쁜이 내일은또",
    date: "2023.04.10 (300일)",
    imgUrl: `${process.env.REACT_APP_IMGIX_URL}/images/record/record_muscle.svg`,
  },
  {
    id: 1,
    title: "식사하기",
    desc: "발달 종합 발달 평가를 했더니 우리아이가 천재가 아닌가 싶은 생각이 막든다. 우리 애기 최고다 어화둥둥 이쁜이 내일은또",
    date: "2023.04.10 (300일)",
    imgUrl: `${process.env.REACT_APP_IMGIX_URL}/images/record/record_daily.svg`,
  },
  {
    id: 2,
    title: "동그라미 그리기",
    desc: "발달 종합 발달 평가를 했더니 우리아이가 천재가 아닌가 싶은 생각이 막든다. 우리 애기 최고다 어화둥둥 이쁜이 내일은또",
    date: "2023.04.08 (298일)",
    imgUrl: `${process.env.REACT_APP_IMGIX_URL}/images/record/record_play.svg`,
  },
];

const ListItemWrapper = styled.div`
  padding: 0 2rem;
`;

const ListItemCard = styled.div`
  padding: 1.2rem;
  margin-bottom: 1.2rem;
  background: #fbfcfd;
  border: 1px solid #d7dbdf;
  border-radius: 8px;
  display: flex;
  align-items: center;
  column-gap: 1.6rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ImageWrap = styled.div`
  width: 9rem;
  max-width: 9rem;
  min-width: 9rem;
  height: 8.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #dfe3e6;
  border-radius: 0.8rem;

  img {
    width: 6.4rem;
    height: 6rem;
  }
`;

const TextWrap = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;

const Title = styled.div`
  width: 20rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #11181c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  width: 20rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: #798088;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: #798088;
`;

const RecordListItem: React.FC<RecordListItemProps> = ({ data = [] }) => {
  return (
    <ListItemWrapper>
      {tempData.map(item => (
        <ListItemCard key={item.id}>
          <ImageWrap>
            <Imgix src={item.imgUrl} />
          </ImageWrap>
          <TextWrap>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
            <Date>{item.date}</Date>
          </TextWrap>
        </ListItemCard>
      ))}
    </ListItemWrapper>
  );
};

export default RecordListItem;
