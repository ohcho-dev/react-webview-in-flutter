import styled from 'styled-components';
import { Title } from '..';
import { AgeRange, OnlineOffline } from '../../ProgramPage/components/styled';

const ProgramSectionWrapper = styled.div`
  background: white;
  width: 100%;

  padding: 2.5rem;
  margin-bottom: 1rem;
  height: 19.5rem;
`;

const ProgramInfoSection = styled.div`
  display: flex;
  column-gap: 2.5rem;

  img {
    width: 10rem;
    height: 8rem;
    border-radius: 0.6rem;
  }
`;

const ProgramTitle = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;

  margin-bottom: 0.5rem;
`;

const ProgramLocation = styled.div`
  font-weight: 400;
  font-size: 1.4rem;

  color: rgba(10, 10, 10, 0.8);
`;

const ProgramSection = () => {
  return (
    <ProgramSectionWrapper>
      <Title>프로그램</Title>
      <ProgramInfoSection>
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <OnlineOffline>오프라인</OnlineOffline>
            <AgeRange>12~15개월</AgeRange>
          </div>
          <ProgramTitle>[모집10명] 아빠랑 같이 하는 모래놀이 클래스</ProgramTitle>
          <ProgramLocation>서울 송파구 어린이 문화회관</ProgramLocation>
        </div>
        <img alt="program image" src="/images/banner-example.png" />
      </ProgramInfoSection>
    </ProgramSectionWrapper>
  );
};

export default ProgramSection;
