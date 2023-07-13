import {
  ColorLight1,
  ColorLightBlack5,
  ColorLightBlack9Base,
  ColorLightEltern10,
  ColorLightEltern2,
  ColorLightEltern6,
  ColorLightSlate1,
  ColorLightSlate2,
  ColorLightSlate3,
  ColorLightSlate7,
  ColorLightSlate9Base,
} from "constants/ldsConstants/global";
import styled from "styled-components";

export const PageTitleWrap = styled.div`
  padding: 1.5rem 2.5rem;
`;

export const ShadowBox = styled.div<{ scrolling: boolean }>`
  position: fixed;
  top: 10.2rem;
  left: 0;
  width: 100%;
  height: 1px;
  box-shadow: ${({ scrolling }) => (scrolling ? "rgba(0, 0, 0, 0.1) 0px 1px 15px" : "")};
  transition: box-shadow 0.5s ease;
`;
export const ListScroll = styled.div`
  width: 100%;
  overflow-y: scroll;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 3.2rem;
  letter-spacing: -0.04rem;
  color: #000000;
`;

export const ProgramStatus = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  margin-top: 0.8rem;
`;

export const ProceedStatus = styled.span<{ color: string }>`
  height: 2.4rem;
  background: #ffffff;
  border: 1px solid ${({ color }) => color};
  border-radius: 2rem;
  padding: 0.2rem 0.9rem;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: ${({ color }) => color};
`;

export const DetailTitle = styled.span`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: ${ColorLightBlack9Base};
`;

export const CoachingDetailTitleBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  margin: 1.5rem 0 1.5rem 2rem;
`;

export const CoachingProgramDuration = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${ColorLightSlate9Base};
`;

export const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 0.8rem 2rem;
  row-gap: 1.2rem;
`;

export const SharedResultPaperBox = styled.div<{ isShared: boolean }>`
  display: flex;
  align-items: center;
  padding: 1.6rem;
  gap: 1.8rem;
  width: 33.5rem;
  height: 9.8rem;

  background: ${({ isShared }) => (isShared ? ColorLightEltern2 : ColorLightSlate2)};

  border: 1px solid ${({ isShared }) => (isShared ? ColorLightEltern6 : ColorLightSlate7)};
  border-radius: 8px;
`;

export const SharedResultPaperBoxTextSection = styled.div`
  row-gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const SharedResultPaperBoxTitle = styled.span<{ isShared: boolean }>`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: ${({ isShared }) => (isShared ? ColorLightEltern10 : ColorLightSlate9Base)};
`;

export const SharedResultPaperBoxText = styled.span<{ isShared: boolean }>`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ isShared }) => (isShared ? ColorLightEltern10 : ColorLightSlate9Base)};
`;

export const StickyTopSection = styled.div`
  position: sticky;
  top: 0;

  background-color: ${ColorLight1};

  border-bottom: 1px solid ${ColorLightSlate3};
  z-index: 50;
`;

export const OrganizationSection = styled.div`
  padding: 1.2rem 2.5rem;
  background-color: ${ColorLightSlate1};

  border-top: 1px solid ${ColorLightSlate3};

  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;
