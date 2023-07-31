import { ColorLightSlate2 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const RecordDetailPageWrapper = styled.div`
  padding: 2rem 2rem 4rem 2rem;
`;

export const ParentCommentSection = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 4rem;

  row-gap: 0.8rem;
`;

export const TextArea = styled.div`
  width: 100%;
  border-radius: 0.6rem;
  background: ${ColorLightSlate2};
`;

export const ParentComment = styled(TextArea)`
  height: 12.8rem;
  padding: 1.2rem 1.6rem;
`;

export const AnticipatedStageOfDevelopmentComment = styled(TextArea)`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
  margin-top: 1rem;
`;
