import { ColorLightSlate1, ColorLightSlate7 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const QuestionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.6rem 1.8rem;

  border-radius: 1.2rem;
  border: 1px solid ${ColorLightSlate7};
  background-color: ${ColorLightSlate1};
`;

export const TitleSection = styled.div`
  height: 5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.8rem;
`;

export const BottomItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;
