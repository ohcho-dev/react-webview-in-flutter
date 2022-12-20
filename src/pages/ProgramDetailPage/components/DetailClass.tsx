import { useState } from 'react';
import styled from 'styled-components';
import ProgramPrice from '../../../components/ProgramPrice';

interface DetailClassProps {
  id: string;
}

const ClassWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;

  img {
    width: 37.5rem;
    height: 25rem;
  }
`;

const ClassInfoWrapper = styled.div`
  padding: 2.5rem;
`;

const ClassInfo = styled.div`
  display: flex;
  margin: 0 0 1rem 0;
  span {
    font-weight: 700;
    font-size: 1.6rem;
    color: rgba(10, 10, 10, 0.5);
    margin-right: 0.5rem;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 1.2rem;
    color: rgba(10, 10, 10, 0.5);

    height: 1.8rem;
    padding: 0px 4px;
    border: 1px solid rgba(10, 10, 10, 0.5);
    border-radius: 0.2rem;
  }
`;

const ClassTitle = styled.div`
  font-weight: 500;
  font-size: 2rem;
`;

const ClassSubSection = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  color: rgba(10, 10, 10, 0.8);

  margin: 1rem 0;
`;

const Divider = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  padding: 0 2.5rem;
`;

const DetailClass: React.FC<DetailClassProps> = props => {
  const { id } = props;
  const [classInfo, setClassInfo] = useState({
    isOnline: false,
    ageRange: '12~15개월',
    title: '[모집10명] 아빠랑 같이 하는 모래놀이 클래스',
    location: '서울 송파구 어린이 문화회관',
    price: 70000,
    originalPrice: 150000,
    discountPercentage: 53,
    perNum: '1회당',
    dateTime: '2022.11.22(화) 21:00',
  });

  return (
    <ClassWrapper>
      <img alt="class image" src="/images/class-img.png" />
      <ClassInfoWrapper>
        <ClassInfo>
          <span>{classInfo.isOnline ? '온라인' : '오프라인'}</span>
          <div>{classInfo.ageRange}</div>
        </ClassInfo>
        <ClassTitle>{classInfo.title}</ClassTitle>
        <ClassSubSection>
          {classInfo.isOnline ? classInfo.dateTime : classInfo.location}
        </ClassSubSection>
        <ProgramPrice
          price={classInfo.price}
          discountPercentage={classInfo.discountPercentage}
          originalPrice={classInfo.originalPrice}
          perNum={'1회당'}
        />
      </ClassInfoWrapper>
      <Divider />
    </ClassWrapper>
  );
};

export default DetailClass;
