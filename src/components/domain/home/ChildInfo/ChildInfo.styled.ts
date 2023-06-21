import styled from "styled-components";

export const ChildInfoWrap = styled.div`
  padding: 11.6rem 2rem 3rem;
  background: url(${(props: { background: string }) => props.background}) no-repeat 50% 0;
  background-size: 100%;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BirthDateChip = styled.div`
  border-radius: 0.6rem;
  background: #060606;
  padding: 0.5rem 1rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 3rem;

  span {
    margin-left: 0.5rem;
  }
`;

export const DdayLabel = styled.div`
  margin-top: 2rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

export const DdayValue = styled.div`
  margin-top: 1rem;

  span:nth-child(1) {
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
    color: #0a0a0a;
  }
  span:nth-child(2) {
    font-weight: 600;
    font-size: 2.2rem;
    line-height: 3.2rem;
    letter-spacing: -0.04rem;
    color: #0a0a0a;
    margin-left: 0.3rem;
  }
`;

export const ProfileImageWrap = styled.div`
  text-align: right;
  position: relative;

  img:nth-child(1) {
    width: 18.5rem;
    height: 18.5rem;
  }

  img:nth-child(2) {
    width: 2.8rem;
    height: 2.8rem;
    position: absolute;
    right: 0.5rem;
    bottom: 2.5rem;
  }
`;
export const UploadImage = styled.span`
  width: 18.5rem;
  height: 18.5rem;
  object-fit: cover;
  border-radius: 10rem;
  border: solid 1rem #fff;
  box-shadow: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.12);
`;

export const NoticeWrap = styled.div`
  margin-top: 0.6rem;
`;

export const NoticeTitle = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #5ac4b1;
  margin-left: 0.8rem;
`;

export const NoticeDesc = styled.div`
  background: #f6f6f6;
  border-radius: 0.8rem;
  padding: 2rem 2.1rem 2rem 3.5rem;
  margin-top: 0.8rem;

  span {
    display: inline-block;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.04rem;
    color: rgba(10, 10, 10, 0.5);
    list-style-type: disc;
    position: relative;
    margin-bottom: 0.8rem;
    word-break: keep-all;

    &:last-child {
      margin-bottom: 0;
    }

    &:before {
      content: ".";
      font-size: 2rem;
      line-height: 0;
      display: black;
      position: absolute;
      left: -1rem;
      top: 0.2rem;
    }
  }
`;
