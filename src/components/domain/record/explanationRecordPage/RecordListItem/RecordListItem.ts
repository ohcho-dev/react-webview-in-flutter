import styled from "styled-components";

export const ListItemWrapper = styled.div`
  padding: 0 2rem;
`;

export const ListItemCard = styled.div`
  padding: 1.2rem;
  margin-bottom: 1.2rem;
  background: #fbfcfd;
  border: 1px solid #d7dbdf;
  border-radius: 8px;
  display: flex;
  align-items: center;
  column-gap: 1.6rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ImageWrap = styled.div`
  width: 9rem;
  max-width: 9rem;
  min-width: 9rem;
  height: 8.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #dfe3e6;
  border-radius: 0.8rem;

  img {
    width: 6.4rem;
    height: 6rem;
  }
`;

export const TextWrap = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;

export const Title = styled.div`
  width: 20rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #11181c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.div`
  width: 20rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: #798088;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: #798088;
`;
