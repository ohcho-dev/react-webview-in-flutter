import NoMainImage from "components/domain/program/NoMainImage";
import { ColorLightSlate5 } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

export const ListWrap = styled.div`
  width: 100%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);

  &:last-child {
    border-bottom: none;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

export const ListContent = styled.div`
  display: grid;
  grid-template-columns: auto 10rem;
  width: 100%;
`;

export const ThumbnailImg = styled.img`
  width: 8.5rem;
  height: 7rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const NoThumbnailImg = styled.div`
  width: 8.5rem;
  height: 7rem;
  border-radius: 0.5rem;

  background-color: ${ColorLightSlate5};
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const DateAndChipWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
  align-items: center;
`;
