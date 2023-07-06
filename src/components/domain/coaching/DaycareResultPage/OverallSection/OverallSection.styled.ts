import { ColorLightBlack9Base } from "constants/ldsConstants/global";
import { Section, TitleSection } from "pages/coaching/DaycareResultPage/DaycareResultPage.styled";
import styled from "styled-components";

export const OverallSection = styled.div`
  padding: 4rem 2rem 2rem 2rem;
`;

export const OverallSectionChildInfo = styled.span`
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
  color: ${ColorLightBlack9Base};
  margin-bottom: 0.8rem;
`;

export const OverallTitleSection = styled.div`
  display: flex;
`;

export const GraphSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 30rem;
  margin: 2rem 0;
`;

export const ChecklistSection = styled(Section)`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;

export const ChecklistTitleSection = styled(TitleSection)`
  margin-bottom: 1rem;
`;
export const MonthImageSection = styled.div`
  padding: 1.6rem 0;
  margin-bottom: 2rem;
`;

export const MonthContentSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;
