import styled from "styled-components";

const TitleBarWrap = styled.section`
  width: 100%;
  height: 6rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: 0.05rem solid rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
const ProfileImageWrap = styled.div`
  width: 3.2rem;
`;
const ChildrenName = styled.div`
  max-width: 19rem;
  height: 1.9rem;
  margin-left: 0.8rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ArrowWrap = styled.div`
  width: 0.8rem;
  margin-left: 0.7rem;
`;
const PushIconWrap = styled.div`
  width: 2.8rem;
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
