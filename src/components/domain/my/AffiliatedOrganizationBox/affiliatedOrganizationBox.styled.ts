import {
  ColorLightBlack6,
  ColorLightBlack9Base,
  ColorLightSlate1,
  ColorLightSlate7,
} from "constants/ldsConstants/global";
import styled from "styled-components";

export const BoxWrapper = styled.div`
  width: 100%;
  height: 7.2rem;
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  padding: 2rem;
  background: ${ColorLightSlate1};
  border: 1px solid ${ColorLightSlate7};
  border-radius: 0.8rem;
`;

export const DayCareName = styled.span`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: ${ColorLightBlack9Base};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DayCareInfoSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const GroupInfoSection = styled.div`
  display: flex;
  column-gap: 1.6rem;
  justify-content: end;
  align-items: center;
`;

export const DayCareGroupName = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  color: ${ColorLightBlack6};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
