import {
  ColorLightEltern7,
  ColorLightSlate3,
  ColorLightSlate9Base,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const QuestionSection = styled.div`
  padding: 0.8rem 2.5rem 4rem 2.5rem;
`;

export const StatusAndDateSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;

  margin: 0.8rem 0 2rem 0;
`;

export const StatusChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  height: 2.2rem;

  padding: 0 0.6rem;
  border-radius: 0.4rem;
  border: 1px solid ${ColorLightEltern7};
`;

export const CommentSection = styled.div`
  padding: 2rem;
`;

export const CommentSectionTitle = styled.div`
  display: flex;
  column-gap: 0.4rem;

  margin-bottom: 2.4rem;
`;

export const NoCommentSection = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentListSection = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 3rem;
`;

export const CustomInput = styled.div`
  display: flex;
  column-gap: 0.8rem;

  padding: 1.1rem 1.6rem;
  background-color: ${ColorLightSlate3};
  border-radius: 0.6rem;

  width: 100%;

  textarea {
    background-color: ${ColorLightSlate3};
    border: none;
    outline: none;
    width: 100%;
    max-height: 7.8rem;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;

    ::placeholder {
      color: ${ColorLightSlate9Base};
    }
  }
`;

export const SendBtnSection = styled.div`
  display: flex;
  align-items: end;
  padding-bottom: 0.5rem;
`;

export const BottomBtnWrap = styled.div`
  width: 100%;
  padding: 1.2rem 2rem;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  background: #fff;

  transition: box-shadow 0.5s ease;
  display: flex;
  align-items: center;

  box-shadow: ${(prop: { $scrolling?: boolean }) =>
    prop.$scrolling ? "0px -5px 15px rgba(0, 0, 0, 0.05)" : "none"};
  z-index: 110;
`;
