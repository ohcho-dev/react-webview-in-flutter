import { getMonthLevelString } from "../../../utils/date/getMonthLevelString";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Title } from "..";
import { commonCodeState } from "../../../store/atom";
import { getDateTime } from "../../../utils/date/getDateTime";
import UseImgix from "../../../utils/UseImgix";
import { AgeRange, OnlineOffline } from "../../ProgramPage/components/styled";

const ProgramSectionWrapper = styled.div`
  background: white;
  width: 100%;

  padding: 2.5rem;
  margin-bottom: 1rem;
`;

const ClassInfoSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const ProgramInfoSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 2.5rem;

  img {
    width: 10rem;
    height: 8rem;
    border-radius: 0.6rem;
    object-fit: cover;
  }
`;

const ProgramTitle = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: -0.04rem;
  color: #000000;
  margin-bottom: 0.4rem;
`;

const ProgramInfo = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

const TopWrapper = styled.div`
  margin-bottom: 0.8rem;
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
        <UseImgix alt="program img" srcUrl={"/images/class/class_04.png"} />
      </ProgramInfoSection>
    </ProgramSectionWrapper>
  );
};

export default ProgramSection;
