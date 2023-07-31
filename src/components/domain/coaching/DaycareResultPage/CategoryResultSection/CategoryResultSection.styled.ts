import {
  ColorLight2,
  ColorLightBlack7,
  ColorLightSlate2,
} from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 0;
`;

export const PaddingWrapper = styled.div`
  padding: 0 2rem;
`;

export const LevelSection = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 70% 30%;
`;

export const LevelTitle = styled.span<{ secondLine?: boolean }>`
  color: ${ColorLight2};
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 3.2rem;
  margin-bottom: ${({ secondLine }) => (secondLine ? "1.2rem" : "0")};
`;

export const LevelInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

export const DecoImageSection = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

export const MonthTitle = styled.span<{ secondLine?: boolean }>`
  margin-top: ${({ secondLine }) => (secondLine ? "0.2rem" : "0")};

  color: ${ColorLightBlack7};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
`;

export const CommentSection = styled.div`
  width: 100%;
  padding: 1.6rem 2rem;
  border-radius: 0.8rem;
  background-color: ${ColorLightSlate2};

  margin: 2.5rem 0 3rem 0;
`;

export const RecommendedActivitySection = styled.div`
  padding: 2.4rem 0;
`;

export const RecommendActivityImgSection = styled.div`
  margin: 2rem 0;
`;

export const RecommendCommentSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;

export const ImportantSection = styled.div`
  padding: 2.4rem 0;
`;

export const ActivityImage = styled.img`
  width: 100%;
  height: 22.8rem;
  object-fit: contain;
`;
