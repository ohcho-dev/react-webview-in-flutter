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
import { useQuery } from "react-query";
import { queryKeys } from "../constant/queryKeys";
import { getUserInfo } from "../api/mypage";

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
  z-index: 30;
  transition: background-color 0.3s ease;
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
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-bottom: 2.2rem;
  display: flex;
  align-items: center;
`;
const ChildName = styled.span`
  display: inline-block;
  overflow: hidden;
  max-width: 13rem;
  white-space: nowrap;
  text-overflow: ellipsis;
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
interface MainTitleBarProps {
  style?: object;
}

const MainTitleBar: React.FC<MainTitleBarProps> = ({ style }) => {
  const selectedChildInfo = useRecoilValue(selectedChildInfoState);
  const setOpenModal = useSetRecoilState(openBottomModalState);
  const handleChildNameClick = () => {
    setOpenModal(true);
  };
  return (
    <TitleBarWrap border={true} style={{ ...style }}>
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
  style?: object;
}

export const DetailTitleBar: React.FC<DetailTitleBarProps> = ({ border, style }) => {
  const navigate = useNavigate();
  // const share = useRecoilValue(useShareState);
  return (
    <TitleBarWrap border={border} style={{ ...style }}>
      <HistoryBackIconWrap onClick={() => navigate(-1)}>
        <img src="/images/icon-back.svg" width="100%" />
      </HistoryBackIconWrap>
      <ButtonWrap>
        {/* {share && (
          <ShareBtn>
            <img src="/images/icon-share.svg" width="100%" />
          </ShareBtn>
        )} */}
      </ButtonWrap>
    </TitleBarWrap>
  );
};

interface MypageTitleBarProps {}

export const MypageTitleBar: React.FC<MypageTitleBarProps> = () => {
  const [firstRegistChildInfo, setFirstRegistChildInfo] = useState({ name: "" });
  const [sns, setSns] = useState("");
  const [icon, setIcon] = useState("");
  const childrenList = useRecoilValue(childrenListState);

  const { data: userInfo } = useQuery(queryKeys.userInfo, () => getUserInfo());

  useEffect(() => {
    if (userInfo.sns_kind) {
      let sns = userInfo.sns_kind;
      if (sns === "SNS_KAKAO") {
        setSns("카카오");
        setIcon("/images/icon-mypage-kakao.svg");
      }
      if (sns === "SNS_GOOGLE") {
        setSns("구글");
        setIcon("/images/icon-mypage-google.svg");
      }
      if (sns === "SNS_APPLE") {
        setSns("애플");
        setIcon("/images/icon-mypage-apple.svg");
      }
    }
  }, [userInfo]);

  useEffect(() => {
    if (childrenList.length > 0) {
      setFirstRegistChildInfo(childrenList[0]);
    }
  }, [childrenList]);

  return (
    <MypageTitleWrap>
      <Title>
        <ChildName>{firstRegistChildInfo.name}</ChildName> <span>보호자님, 안녕하세요.</span>
      </Title>
      <LoginInfo>
        <img src={icon} />
        <span>{sns} 로그인</span>
      </LoginInfo>
    </MypageTitleWrap>
  );
};

export default MainTitleBar;
