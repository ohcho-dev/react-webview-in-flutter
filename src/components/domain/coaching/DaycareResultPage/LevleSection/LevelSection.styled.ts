import { ColorLightBlack8, ColorLightSlate6 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const CategoryLevelSection = styled.div<{ lastSection: boolean }>`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  border-bottom: ${({ lastSection }) => (lastSection ? "non" : `0.5px solid ${ColorLightSlate6}`)};
`;

export const LevelTitleSection = styled.div`
  padding: 1.2rem 0;
  display: flex;
  align-items: flex-start;
  width: 100%;

  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.4rem;
  color: ${ColorLightBlack8};
`;

export const CategoryButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 0;
`;

export const CategoryButtonTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.6rem;

  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;
  color: ${ColorLightBlack8};
`;
