import {
  ColorLightBlack9Base,
  ColorLightSlate2,
  ColorLightSlate6,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const SpeechBubbleWrapper = styled.div`
  position: absolute;
  bottom: -4rem;
`;

export const QnaStatusBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
  background-color: ${ColorLightSlate2};
  border-radius: 0.8rem;

  padding: 1.6rem 0.8rem;

  margin-top: 1.6rem;
`;

export const QnaStatusBoxItem = styled.div<{ middleOne?: boolean }>`
  display: flex;
  flex-direction: column;

  align-items: center;

  border-left: ${({ middleOne }) => middleOne && `1px solid ${ColorLightSlate6}`};
  border-right: ${({ middleOne }) => middleOne && `1px solid ${ColorLightSlate6}`};
`;

export const SpeechBubble = styled.div`
  width: fit-content;
  min-width: 10rem;
  position: relative;
  border-radius: 0.6rem;
  background-color: ${ColorLightBlack9Base};

  padding: 0.8rem 1rem;

  :before {
    border-top: 0px solid transparent;
    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid transparent;
    border-bottom: 0.8rem solid ${ColorLightBlack9Base};
    content: "";
    position: absolute;
    top: -0.6rem;
    left: 5.3rem;
  }
`;
