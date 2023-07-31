import {
  ColorLightBlack6,
  ColorLightBlack9Base,
  ColorLightSlate1,
  ColorLightSlate7,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const PageLayout = styled.div`
  margin-top: 7rem;
`;
export const SingleChildWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 5rem);
  padding: 2rem 1.4rem 2rem 2rem;
  margin: 0 auto 1rem;

  border: 1px solid ${ColorLightSlate7};
  border-radius: 1.2rem;
  background: ${ColorLightSlate1};
`;

export const ChildInfoSection = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
  color: ${ColorLightBlack6};

  img {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const ChildName = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  max-width: 9rem;
  margin: 0 1.5rem 0 0.9rem;

  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.2rem;
  color: ${ColorLightBlack9Base};
`;
