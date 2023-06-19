import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getUserInfo } from "../../../apis/mypage";
import { queryKeys } from "../../../constant/queryKeys";
import {
  childrenKeyState,
  childrenListState,
  openBottomModalState,
  selectedChildInfoState,
} from "../../../store/atom";
import UseImgix from "../../common/Imgix";
import AlarmBadge from "../../common/AlarmBadge";

const TitleBarWrap = styled.section`
  width: 100%;
  height: 6.1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-bottom: ${(prop: { border?: boolean }) =>
    prop.border ? "0.05rem solid rgba(0, 0, 0, 0.15)" : "0"};
  position: fixed;
  top: -0.1rem;
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

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 1.6rem;
  }
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
  margin-left: 0.7rem;

  img {
    width: 0.8rem;
    height: 0.8rem;
  }
`;

const HistoryBackIconImage = styled.span`
  width: 2.8rem;
  height: 2.8rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 8px;
  }
`;

const MypageTitleWrap = styled.div`
  width: 100%;
  height: 14.5rem;

  background: #fff;
  padding: 3.5rem 2.5rem 2rem;
  border-bottom: solid 1rem #f6f6f6;
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
  margin-right: 0.5rem;
`;
const LoginInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2.8rem;
    height: 2.8rem;
  }

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

const PageTitle = styled.div`
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 3.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;

interface MainTitleBarProps {
  style?: object;
}

export const MainTitleBar: React.FC<MainTitleBarProps> = ({ style }) => {
  const selectedChildInfo = useRecoilValue(selectedChildInfoState);
  const setOpenModal = useSetRecoilState(openBottomModalState);
  const childrenKey = useRecoilValue(childrenKeyState);
  const handleChildNameClick = () => {
    setOpenModal(true);
  };

  return (
    <TitleBarWrap border={true} style={{ ...style }}>
      <ProfileWrap>
        <ProfileImageWrap>
          {childrenKey && (
            <UseImgix srcUrl={`/images/profile-${childrenKey}.png`} alt="child icon" />
          )}
        </ProfileImageWrap>
        <ChildrenName onClick={handleChildNameClick}>{selectedChildInfo.name}</ChildrenName>
        <ArrowWrap>
          <UseImgix srcUrl="/images/icon-arrow-down.svg" alt="arrow down icon" />
        </ArrowWrap>
      </ProfileWrap>
      <AlarmBadge />
    </TitleBarWrap>
  );
};

interface DetailTitleBarProps {
  border?: boolean;
  style?: object;

  leftBtn?: React.ReactNode;
  handleBackBtnClick?: () => void | undefined;
  title?: string;
  titleType?: "back" | "close";
}

export const DetailTitleBar: React.FC<DetailTitleBarProps> = ({
  border,
  style,
  leftBtn,
  handleBackBtnClick,
  title,
  titleType,
}) => {
  const navigate = useNavigate();

  return (
    <TitleBarWrap
      border={border}
      style={{ ...style, justifyContent: titleType === "close" ? "flex-end" : "space-between" }}
    >
      {(!titleType || titleType === "back") && (
        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          onClick={() => {
            handleBackBtnClick ? handleBackBtnClick() : navigate(-1);
          }}
        >
          <UseImgix
            srcUrl="/images/icon-back.svg"
            alt="left arrow icon"
            style={{ width: "2.8rem" }}
          />
        </div>
      )}
      {title && <PageTitle>{title}</PageTitle>}
      {title && <div style={{ width: "2.8rem" }}></div>}

      {titleType === "close" && (
        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
          onClick={() => {
            handleBackBtnClick ? handleBackBtnClick() : navigate(-1);
          }}
        >
          <UseImgix srcUrl="/images/icon-close.svg" alt="close icon" style={{ width: "2.8rem" }} />
        </div>
      )}
    </TitleBarWrap>
  );
};

export const MypageTitleBar: React.FC = () => {
  const [firstRegistChildInfo, setFirstRegistChildInfo] = useState({ name: "" });
  const [sns, setSns] = useState("");
  const [icon, setIcon] = useState("");
  const childrenList = useRecoilValue(childrenListState);

  const { data: userInfo } = useQuery(queryKeys.userInfo, () => getUserInfo());

  useEffect(() => {
    if (userInfo.sns_kind) {
      const sns = userInfo.sns_kind;
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
        <ChildName>{firstRegistChildInfo.name}</ChildName>
        <span>보호자님, 안녕하세요.</span>
      </Title>
      <LoginInfo>
        <UseImgix srcUrl={icon} alt="socal login logo" />
        <span>{sns} 로그인</span>
      </LoginInfo>
    </MypageTitleWrap>
  );
};

export default MainTitleBar;
