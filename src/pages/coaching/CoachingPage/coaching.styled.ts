import styled from "styled-components";

export type MenuType = "ongoing" | "all" | "end";

export const CoachingTabWrapper = styled.div`
  padding: 2rem;
`;

export const ProgressChip = styled.div`
  width: 5.3rem;
  height: 3.2rem;
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;

  color: ${(props: { isSelected: boolean }) => (props.isSelected ? "#FFFFFF" : "black")};
  background-color: ${(props: { isSelected: boolean }) => (props.isSelected ? "black" : "#F0F0F0")};
`;

export const ChipWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
`;

export const MoreBtn = styled.div`
  width: 100%;
  height: 5.85rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 0.05rem solid rgba(0, 0, 0, 0.15);

  font-weight: 400;
  font-size: 1.8rem;

  color: rgba(0, 0, 0, 0.8);

  img {
    margin-left: 1rem;
  }
`;
