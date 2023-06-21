import styled from "styled-components";

export const ClassWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;

  img:nth-child(1) {
    width: 37.5rem;
    height: 25rem;
  }
`;

export const ClassInfoWrapper = styled.div`
  padding: 2.5rem;
`;

export const ClassInfo = styled.div`
  display: flex;
  margin: 0 0 0.8rem 0;
  align-items: center;
`;

export const ClassTitle = styled.div`
  font-weight: 500;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.04rem;
  color: #000000;
`;

export const ClassSubSection = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin-bottom: 0.5rem;
`;

export const Divider = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  padding: 0 2.5rem;
  margin: 0 2rem;
`;
