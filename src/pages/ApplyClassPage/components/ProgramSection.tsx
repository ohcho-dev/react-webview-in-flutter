import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Title } from "..";
import { commonCodeState } from "../../../recoil/atom";
import { getDateTime } from "../../../utils/getDateTime";
import { getMonthLevelString } from "../../../utils/getMonthLevelString";
import { AgeRange, OnlineOffline } from "../../ProgramPage/components/styled";

const ProgramSectionWrapper = styled.div`
  background: white;
  width: 100%;

  padding: 2.5rem;
  margin-bottom: 1rem;
  height: 18rem;
`;

const ClassInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem;
  justify-content: space-between;
`;

const ProgramInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
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

const ProgramInfo = styled.div`
  font-weight: 400;
  font-size: 1.4rem;

  color: rgba(10, 10, 10, 0.8);
`;

const TopWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const ProgramSection = (props: { [key: string]: any }): JSX.Element => {
  const { classInfo } = props;
  const commonCodeList = useRecoilValue<{ [key: string]: any }>(commonCodeState);

  return (
    <ProgramSectionWrapper>
      <Title>프로그램</Title>
      <ProgramInfoSection>
        <div>
          <TopWrapper>
            <OnlineOffline>{commonCodeList[classInfo.place_type]}</OnlineOffline>
            <AgeRange>{getMonthLevelString(classInfo.month_level)}</AgeRange>
          </TopWrapper>
          <ClassInfoSection>
            <ProgramTitle>{classInfo.name}</ProgramTitle>
            {classInfo.place_type === "CLPLT_ONLINE" ? (
              <ProgramInfo>{getDateTime(classInfo.class_datetime)}</ProgramInfo>
            ) : (
              <ProgramInfo>{classInfo.location}</ProgramInfo>
            )}
          </ClassInfoSection>
        </div>
        <img alt="program image" src="/images/banner-example.png" />
      </ProgramInfoSection>
    </ProgramSectionWrapper>
  );
};

export default ProgramSection;
