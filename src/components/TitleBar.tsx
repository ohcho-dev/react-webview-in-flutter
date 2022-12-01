import styled from "styled-components";

const TitleBarWrap = styled.section`
  width: 100%;
  height: 16vw;
  padding: 5.333vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 0.133vw solid rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
`;
const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
const ProfileImageWrap = styled.div`
  width: 8.533vw;
`;
const ChildrenName = styled.div`
  margin-left: 2.133vw;
  font-weight: 600;
  font-size: 4.267vw;
  line-height: 5.067vw;
  color: #000000;
`;
const ArrowWrap = styled.div`
  width: 2.133vw;
  margin-left: 1.867vw;
`;
const PushIconWrap = styled.div`
  width: 7.467vw;
`;

const MainTitleBar = () => {
  return (
    <TitleBarWrap>
      <ProfileWrap>
        <ProfileImageWrap>
          <img src="/images/icon-profile-default.svg" width="100%" />
        </ProfileImageWrap>
        <ChildrenName>김나나</ChildrenName>
        <ArrowWrap>
          <img src="/images/icon-arrow-down.svg" width="100%" />
        </ArrowWrap>
      </ProfileWrap>
      <PushIconWrap>
        <img src="/images/icon-push.svg" width="100%" />
      </PushIconWrap>
    </TitleBarWrap>
  );
};

export const DetailTitleBar = () => {
  return <TitleBarWrap></TitleBarWrap>;
};

export default MainTitleBar;
