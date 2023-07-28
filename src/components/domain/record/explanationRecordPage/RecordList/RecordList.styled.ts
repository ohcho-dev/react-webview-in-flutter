import styled from "styled-components";

export const RecordTabWrapper = styled.div`
  padding: 1.6rem 0;
`;

export const ProgressChip = styled.div`
  border-radius: 2rem;
  padding: 0.6rem 1.2rem;

  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;

  color: ${(props: { isSelected: boolean }) => (props.isSelected ? "#FFFFFF" : "#7E868C")};
  background-color: ${(props: { isSelected: boolean }) =>
    props.isSelected ? "#090C0E" : "#F1F3F5"};
`;

export const ChipWrapper = styled.div`
  display: flex;
  column-gap: 0.8rem;
  padding: 0 2rem 2rem;
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
