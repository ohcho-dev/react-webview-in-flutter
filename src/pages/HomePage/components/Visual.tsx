import styled from "styled-components";

const Wrap = styled.div`
  padding: 13.5rem 2rem 25.6rem;
  background: url("/images/home-bg.png") no-repeat 50% 0;
  background-size: 100%;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url("/images/home-bg-phone.png") no-repeat 50% 50%;
    background-size: 100%;
    box-shadow: inset 0 -4rem 2rem rgba(183, 171, 205, 0.2);
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 3.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;

const Content = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin-top: 0.2rem;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BirthDateChip = styled.div`
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

const DdayLabel = styled.div`
  margin-top: 2rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

const DdayValue = styled.div`
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

const ProfileImageWrap = styled.div`
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
const UploadImage = styled.img`
  width: 18.5rem;
  height: 18.5rem;
  object-fit: cover;
  border-radius: 10rem;
  border: solid 1rem #fff;
  box-shadow: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.12);
`;

const NoticeWrap = styled.div`
  margin-top: 0.6rem;
`;

const NoticeTitle = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #5ac4b1;
  margin-left: 0.8rem;
`;

const NoticeDesc = styled.div`
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

const Visual = () => {
  return (
    <Wrap>
      <Title>우리 아이 잘 자라고 있는 걸까?</Title>
      <Content>발달에 맞는 전문 코칭을 받아보세요.</Content>
    </Wrap>
  );
};

export default Visual;