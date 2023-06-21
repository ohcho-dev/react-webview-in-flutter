import styled from "styled-components";

export const Base = styled.div`
  background: white;
  width: 100%;

  padding: 2.5rem;
  margin-bottom: 1rem;
`;

export const USER_SECTION_HEIGHT = 37;

export const UserSection = styled(Base)`
  height: ${USER_SECTION_HEIGHT}rem;
`;

export const ProductWrap = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 10rem auto;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-bottom: 0.8rem;
`;

export const Label = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.5);
`;

export const Value = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

export const TotalLabel = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;

export const TotalValue = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;

export const ChildInfo = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.5);
`;

export const ThumbnailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const ProductInfoWrap = styled.div`
  margin-top: 1rem;
`;
export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

export const InputTitle = styled.div`
  margin-bottom: 1rem;

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 25px;

  color: rgba(10, 10, 10, 0.8);
`;

export const InputBox = styled.input`
  width: 100%;
  border: none;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  color: rgba(0, 0, 0, 0.8);

  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  :focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
  margin: 2rem 0;
`;
export const TotalPrice = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PayAgreement = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin: 2rem;
`;
