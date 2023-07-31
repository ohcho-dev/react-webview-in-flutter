import { collapseType } from "pages/coaching/VideoAssignmentPage";
import styled, { css, keyframes } from "styled-components";

export const closeVideoAnimation = keyframes`
  0% {
    height: 20rem;
  }
  100%{
    height: 0rem;
  }
`;

export const closeVideoSectionAnimation = keyframes`
  0% {
    height: 27rem;
  }

  100%{
    height: 7rem;
  }
`;

export const openVideoAnimation = keyframes`
  0% {
    height: 0rem;
  }
  100%{
    height: 20rem;
  }
`;

export const openVideoSectionAnimation = keyframes`
  0% {
    height: 7rem;
  }

  100%{
    height: 27rem;
  }
`;

export const VideoSection = styled.div`
  width: 100%;
  height: ${(props: { collapse: collapseType }) => {
    if (props.collapse === "open" || !props.collapse) {
      return "27rem";
    } else if (props.collapse === "close") {
      return "7rem";
    }
  }};

  margin-bottom: 1.5rem;
  animation: ${(props: { collapse: collapseType }) => {
    if (props.collapse === "open") {
      return css`
        ${openVideoSectionAnimation} 0.5s
    linear
      `;
    } else if (props.collapse === "close") {
      return css`
        ${closeVideoSectionAnimation} 0.5s
    linear
      `;
    }
  }};
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: ${(props: { collapse: collapseType }) => {
    if (props.collapse === "open" || !props.collapse) {
      return "20rem";
    } else if (props.collapse === "close") {
      return "0rem";
    }
  }};
  animation: ${(props: { collapse: collapseType }) => {
    if (props.collapse === "open") {
      return css`
        ${openVideoAnimation} 0.5s
    linear
      `;
    } else if (props.collapse === "close") {
      return css`
        ${closeVideoAnimation} 0.5s
    linear
      `;
    }
  }};

  video {
    border-radius: 0.8rem 0.8rem 0rem 0rem;
    /* position: relative; */
    isolation: isolate;
    overflow: hidden;
  }
`;

export const VideoInfoSection = styled.div`
  height: 7rem;

  display: flex;
  flex-direction: column;

  background-color: #f6f6f6;

  border: 1px solid #cdcdcd;
  border-radius: ${(props: { collapse: collapseType }) => {
    if (props.collapse === "open" || !props.collapse) {
      return "0rem 0rem 0.8rem 0.8rem";
    } else if (props.collapse === "close") {
      return "0.8rem";
    }
  }};

  padding: 1.2rem;
`;

export const RecordDate = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  color: rgba(10, 10, 10, 0.5);

  margin-top: 0.5rem;
`;
