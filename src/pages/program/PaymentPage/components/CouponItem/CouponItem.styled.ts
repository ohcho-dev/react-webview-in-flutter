import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
`;

export const CouponInfoSection = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 0.6rem;

  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const SelectedIconSection = styled.div`
  width: 2.8rem;
`;
