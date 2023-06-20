import styled from "styled-components";

export const ChildrenListModalTitleSection = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2rem;

  span {
    font-weight: 700;
    font-size: 2rem;
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const ChildrenListModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChildInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1.9rem 0;

  div {
    display: flex;
    align-items: center;

    img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 1.6rem;
    }
  }
`;

export const ChildName = styled.span`
  overflow: hidden;

  font-size: 1.6rem;
  font-weight: 600;

  max-width: 11rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 0.95rem;
`;

export const ChildInfo = styled.div`
  font-size: 1.6rem;
  font-weight: 400;

  column-gap: 0.5rem;

  span:nth-child(1) {
    width: 9rem;
  }
`;

export const GoToChildManagementBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  margin-top: 1rem;

  font-weight: 400;
  font-size: 1.4rem;
  color: rgba(10, 10, 10, 0.5);

  img {
    margin-left: 1rem;
  }
`;
