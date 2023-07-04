import styled from "styled-components";

export const ProgramCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 33.55rem;

  img:nth-child(1) {
    position: relative;
    border-radius: 0.8rem;
    width: 33.5rem;
    height: 17rem;
    object-fit: cover;
    object-position: top;
  }
`;

export const ProgramImageSection = styled.img`
  position: relative;
  border-radius: 0.8rem;
  width: 33.5rem;
  height: 17rem;

  object-fit: cover;
  object-position: top;

  div {
    position: absolute;
    left: 1rem;
    top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 6.5rem;
    height: 2.5rem;

    background-color: #fd7473;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

export const ClassInfoSection = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;

export const ProgramTitle = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;

  margin-top: ${(props: { topMargin: boolean }) => (props.topMargin ? "0" : "1.5rem")};

  // 2줄까지만 노출하면 넘어가면 말줄임 표기
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ProgramLocation = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  margin: 0.5rem 0 0.5rem 0;
  color: rgba(10, 10, 10, 0.8);
`;

export const ProgramPriceSection = styled.div`
  margin: 0.5rem 0;
`;

export const ProgramStatus = styled.div`
  margin-top: 0.5rem;

  span:nth-child(2) {
    margin-left: 0.8rem;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: rgba(10, 10, 10, 0.8);
  }

  span:nth-child(3) {
    margin-left: 0.5rem;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: #5ac4b1;
  }
`;

export const ProceedStatus = styled.span`
  height: 2.4rem;
  background: #ffffff;
  border: 1px solid ${(props: { color: string }) => props.color};
  border-radius: 2rem;
  padding: 0.2rem 0.9rem;

  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: ${(props: { color: string }) => props.color};
`;
