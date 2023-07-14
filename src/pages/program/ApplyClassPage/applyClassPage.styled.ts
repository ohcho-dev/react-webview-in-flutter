import styled from "styled-components";
const USER_SECTION_HEIGHT = 37;

export const Title = styled.div`
  font-weight: 700;
  font-size: 1.8rem;

  margin-bottom: 2.5rem;
`;

export const Base = styled.div`
  background: white;
  width: 100%;

  padding: 2.5rem;
  margin-bottom: 1rem;
`;

export const UserSection = styled(Base)`
  height: ${USER_SECTION_HEIGHT}rem;
`;

export const SelectChildBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  color: rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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

export const SelectedChildInfo = styled.div`
  display: flex;
  align-items: center;

  color: black;
  font-weight: 400;
  font-size: 1.6rem;

  img {
    margin-right: 1rem;
    width: 2.5rem;
  }

  span:nth-child(2) {
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;
