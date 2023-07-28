import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import UseImgix from "../../../common/Imgix";
import AlarmBadge from "../../../common/AlarmBadge";
import {
  childrenKeyState,
  childrenListState,
  openBottomModalState,
  selectedChildInfoState,
} from "../../../../store/common";
import * as S from "./TitleBar.styled";
import useAuthMe from "queries/common/auth/useAuthMe";
import Icon from "components/common/Icon";
import { ColorLight2, ColorLightSlate9Base } from "constants/ldsConstants/global";

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
    <S.TitleBarWrap border={true} style={{ ...style }}>
      <S.ProfileWrap>
        <S.ProfileImageWrap>
          {childrenKey && (
            <UseImgix srcUrl={`/images/profile-${childrenKey}.png`} alt="child icon" />
          )}
        </S.ProfileImageWrap>
        <S.ChildrenName onClick={handleChildNameClick}>{selectedChildInfo.name}</S.ChildrenName>
        <Icon icon={"chevron-down"} size={20} fill={ColorLightSlate9Base} />
      </S.ProfileWrap>
      <AlarmBadge />
    </S.TitleBarWrap>
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
    <S.TitleBarWrap
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
          <Icon icon={"big-chevron"} size={28} fill={ColorLight2} />
        </div>
      )}
      {title && <S.PageTitle>{title}</S.PageTitle>}
      {title && <div style={{ width: "2.8rem" }}></div>}

      {titleType === "close" && (
        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
          onClick={() => {
            handleBackBtnClick ? handleBackBtnClick() : navigate(-1);
          }}
        >
          <Icon icon={"x"} size={28} fill={ColorLight2} />
        </div>
      )}
    </S.TitleBarWrap>
  );
};

export const MypageTitleBar: React.FC = () => {
  const [firstRegistChildInfo, setFirstRegistChildInfo] = useState({ name: "" });
  const [sns, setSns] = useState("");
  const [icon, setIcon] = useState("");
  const childrenList = useRecoilValue(childrenListState);

  const { data: userInfo } = useAuthMe();

  useEffect(() => {
    if (userInfo && userInfo.sns_kind) {
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
    <S.MypageTitleWrap>
      <S.Title>
        <S.ChildName>{firstRegistChildInfo.name}</S.ChildName>
        <span>보호자님, 안녕하세요.</span>
      </S.Title>
      <S.LoginInfo>
        <UseImgix srcUrl={icon} alt="socal login logo" />
        <span>{sns} 로그인</span>
      </S.LoginInfo>
    </S.MypageTitleWrap>
  );
};

export default MainTitleBar;
