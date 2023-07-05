import {
  ColorLight2,
  ColorLightBlack9Base,
  ColorLightEltern9Base,
  ColorLightSlate11,
  ColorLightSlate2,
} from "constants/ldsConstants/global";
import styled from "styled-components";

export const OverallSection = styled.div`
  padding: 4rem 2rem 2rem 2rem;
`;

export const OverallSectionChildInfo = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
  color: ${ColorLightBlack9Base};
  margin-bottom: 0.8rem;
`;

export const OverallTitleSection = styled.div`
  display: flex;
`;

export const OverallSectionText = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  color: ${ColorLightBlack9Base};
`;

export const OverallSectionHighlight = styled(OverallSectionText)`
  color: ${ColorLightEltern9Base};
`;

export const GraphSection = styled.div`
  width: 100%;
  height: 30rem;
`;

export const DividerSection = styled.div`
  width: 100%;
  height: 1rem;
  background-color: ${ColorLightSlate2};
`;

export const Section = styled.div`
  padding: 2.5rem 2rem;
`;

export const ChecklistSection = styled(Section)`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: -0.4px;
  color: ${ColorLight2};
`;

export const ChecklistTitleSection = styled(TitleSection)`
  margin-bottom: 1rem;
`;

export const ListItem = styled.div`
  width: 100%;
  padding: 1.6rem;
  display: flex;
  background-color: ${ColorLightSlate2};
  border-radius: 0.8rem;
`;

export const ListContent = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  color: ${ColorLightSlate11};
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

export const IconDotSection = styled.div`
  margin: 0.5rem 1rem 0 0;
`;
