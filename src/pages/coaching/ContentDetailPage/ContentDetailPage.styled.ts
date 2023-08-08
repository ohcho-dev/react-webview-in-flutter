import {
  ColorLight1,
  ColorLightSlate3,
  ColorLightSlate6,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const ActivityWrapper = styled.div`
  background-color: ${ColorLight1};
  padding: 0 2rem;
`;

export const ActivityCategoryButton = styled.div<{ selected: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  background: ${props => (props.selected ? ColorLight1 : ColorLightSlate3)};
  padding: 0.6rem 0;
`;
export const ActivityList = styled.div`
  margin-top: 2rem;
  > div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.8rem;
  }
`;
export const ActivityItemIndex = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.4rem;
  border: 1px solid ${ColorLightSlate6};
  background: ${ColorLight1};
  margin-top: 0.3rem;
`;
export const ActivityItem = styled.div`
  margin-bottom: 1.6rem;
  position: relative;
`;
