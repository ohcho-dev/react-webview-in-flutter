import { getMonthLevelString } from "../../../../../utils/date/getMonthLevelString";
import { useRecoilValue } from "recoil";

import { getDateTime } from "../../../../../utils/date/getDateTime";
import UseImgix from "../../../../common/Imgix";
import { commonCodeState } from "../../../../../store/common";
import { Title } from "../../../../../pages/program/ApplyClassPage/applyClassPage.styled";
import { AgeRange, OnlineOffline } from "../../programListPage/programListPage.styled";
import * as S from "./ProgramSection.styled";

const ProgramSection = (props: { [key: string]: any }): JSX.Element => {
  const { classInfo } = props;
  const commonCodeList = useRecoilValue<{ [key: string]: any }>(commonCodeState);

  return (
    <S.ProgramSectionWrapper>
      <Title>프로그램</Title>
      <S.ProgramInfoSection>
        <div>
          <S.TopWrapper>
            <OnlineOffline>{commonCodeList[classInfo.place_type]}</OnlineOffline>
            <AgeRange>{getMonthLevelString(classInfo.month_level)}</AgeRange>
          </S.TopWrapper>
          <S.ClassInfoSection>
            <S.ProgramTitle>{classInfo.name}</S.ProgramTitle>
            {classInfo.place_type === "CLPLT_ONLINE" ? (
              <S.ProgramInfo>{getDateTime(classInfo.class_datetime)}</S.ProgramInfo>
            ) : (
              <S.ProgramInfo>{classInfo.location}</S.ProgramInfo>
            )}
          </S.ClassInfoSection>
        </div>
        <UseImgix alt="program img" srcUrl={"/images/class/class_04.png"} />
      </S.ProgramInfoSection>
    </S.ProgramSectionWrapper>
  );
};

export default ProgramSection;
