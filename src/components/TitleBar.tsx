import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AlarmBadge from "./AlarmBadge";
import {
  childrenListState,
  openBottomModalState,
  selectedChildInfoState,
  useShareState,
} from "../recoil/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";

const TitleBarWrap = styled.section`
  width: 100%;
  height: 6rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: ${(prop: { border?: boolean }) =>
    prop.border ? "0.05rem solid rgba(0, 0, 0, 0.15)" : "0"};
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
const HistoryBackIconWrap = styled.div`
  width: 2.8rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 8px;
  }
`;
const ShareBtn = styled.div`
  width: 2.8rem;
`;
const MypageTitleWrap = styled.div`
  width: 100%;
  background: #fff;
  padding: 3.5rem 2.5rem 2rem;
  border-bottom: solid 1rem #f6f6f6;
  position: fixed;
  top: 0;
  left: 0;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 3.2rem;
  display: flex;
  align-items: center;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-bottom: 2.2rem;
`;
const LoginInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    letter-spacing: -0.04rem;
    color: rgba(10, 10, 10, 0.8);
  }
`;

const MainTitleBar = () => {
  const selectedChildInfo = useRecoilValue(selectedChildInfoState);
  const setOpenModal = useSetRecoilState(openBottomModalState);
  const handleChildNameClick = () => {
    setOpenModal(true);
  };
  return (
    <TitleBarWrap border={true}>
      <ProfileWrap>
        <ProfileImageWrap>
          <img src="/images/icon-profile-default.svg" width="100%" alt="child icon" />
        </ProfileImageWrap>
        <ChildrenName onClick={handleChildNameClick}>{selectedChildInfo.name}</ChildrenName>
        <ArrowWrap>
          <img src="/images/icon-arrow-down.svg" width="100%" alt="arrow down icon" />
        </ArrowWrap>
      </ProfileWrap>
      <AlarmBadge />
    </TitleBarWrap>
  );
};

interface DetailTitleBarProps {
  border?: boolean;
}

export const DetailTitleBar: React.FC<DetailTitleBarProps> = ({ border }) => {
  const navigate = useNavigate();
  const share = useRecoilValue(useShareState);
  return (
    <TitleBarWrap border={border}>
      <HistoryBackIconWrap onClick={() => navigate(-1)}>
        <img src="/images/icon-back.svg" width="100%" />
      </HistoryBackIconWrap>
      <ButtonWrap>
        {share && (
          <ShareBtn>
            <img src="/images/icon-share.svg" width="100%" />
          </ShareBtn>
        )}
      </ButtonWrap>
    </TitleBarWrap>
  );
};

interface MypageTitleBarProps {}

export const MypageTitleBar: React.FC<MypageTitleBarProps> = () => {
  const [firstRegistChildInfo, setFirstRegistChildInfo] = useState({ name: "" });
  const childrenList = useRecoilValue(childrenListState);

  useEffect(() => {
    if (childrenList.length > 0) {
      setFirstRegistChildInfo(childrenList[0]);
    }
  }, [childrenList]);

  return (
    <MypageTitleWrap>
      <Title>{firstRegistChildInfo.name} 보호자님, 안녕하세요.</Title>
      <LoginInfo>
        <img src="/images/icon-mypage-kakao.svg" />
        <span>카카오 로그인</span>
      </LoginInfo>
    </MypageTitleWrap>
  );
};

export default MainTitleBar;
