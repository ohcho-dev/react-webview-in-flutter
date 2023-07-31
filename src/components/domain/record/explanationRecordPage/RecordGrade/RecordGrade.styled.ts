import styled from "styled-components";
import {
  ColorLightBlack9Base,
  ColorLightEltern3,
  ColorLightEltern8,
  ColorLightEltern9Base,
} from "lds-common/src/constants/tokens/global";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: bold;
`;

export const QuestionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.4rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const QuestionText = styled.div`
  font-size: 1.4rem;
  color: ${ColorLightEltern8};
`;

export const GradeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 1.6rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const GradeText = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 2.4rem;
  color: ${ColorLightBlack9Base};
`;

export const UtilWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.2rem;
`;

export const CountChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 7rem;
  height: 3rem;
  padding: 0.4rem 0.8rem;
  background: ${ColorLightEltern3};
  border-radius: 1.8rem;
`;
