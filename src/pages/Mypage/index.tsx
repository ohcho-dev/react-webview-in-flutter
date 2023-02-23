/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as Sentry from "@sentry/react";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flutterInAppWebViewPlatformReady } from "../..";
import { logoutApi, Withdrawal } from "../../api/mypage";
import { MypageTitleBar } from "../../components/TitleBar";
import CustomModal from "../../components/common/CustomModal";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import { NativeFunction } from "../../utils/NativeFunction";
import { TrackGoogleAnalyticsEvent } from "../../utils/google-analytics";
import logoutCategory, {
  logoutSuccessedAction,
  withdrawalCategory,
  withdrawalSuccessedAction,
} from "../../utils/google-analytics/events/ManagementUser";

const LinkItemWrap = styled.div`
  padding: 0 2.5rem;
  background: #fff;

  &:nth-child(4),
  &:nth-child(8),
  &:nth-child(9) {
    border-bottom: solid 1rem #f6f6f6;

    > div {
      border-bottom: 0;
    }
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    border-bottom: 0.05rem solid rgba(0, 0, 0, 0.15);
  }
`;

const IconTextGroup = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2.8rem;
    height: 2.8rem;
    margin-right: 0.8rem;
  }
  span {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    letter-spacing: -0.04rem;
    color: #0a0a0a;
    opacity: 0.8;
  }
`;

const BottomArea = styled.div`
  width: 100%;
  background: #f6f6f6;
  padding: 0 2.5rem;

  text-align: right;
  span {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: -0.04rem;
    color: rgba(10, 10, 10, 0.3);
  }
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.3rem;
  clear: both;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.04rem;
  text-decoration-line: underline;

  color: rgba(10, 10, 10, 0.5);
`;

const linkItem = [
  {
    id: 0,
    imgUrl: "/images/icon-mypage-child.svg",
    name: "아이 관리",
    url: "/my/management-child",
  },
  {
    id: 1,
    imgUrl: "/images/icon-mypage-alarm.svg",
    name: "알림 설정",
    url: "/my/management-alarm",
  },
  {
    id: 2,
    imgUrl: "/images/icon-mypage-doc2.svg",
    name: "프로그램 신청 내역",
    url: "/my/applied-program-list",
  },
  {
    id: 3,
    imgUrl: "/images/icon-mypage-notice.svg",
    name: "공지사항",
    url: "/my/notice",
  },
  {
    id: 4,
    imgUrl: "/images/icon-mypage-docs.svg",
    name: "이용 약관",
    url: "/my/terms",
  },
  {
    id: 5,
    imgUrl: "/images/icon-mypage-docs.svg",
    name: "개인정보 처리방침",
    url: "/my/privacy",
  },
  {
    id: 6,
    imgUrl: "/images/icon-mypage-docs.svg",
    name: "민감정보 처리방침",
    url: "/my/sensitive",
  },
  {
    id: 7,
    imgUrl: "/images/icon-mypage-chat.svg",
    name: "문의하기",
    link: "kakaoTalk@_xnAxjxfxj@chat",
    url: "#",
  },
];

const MyPage = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [version, setVersion] = useState("");

  useLayoutEffect(() => {
    getNativeValue("appVersion");
  }, []);

  const getNativeValue = (value: string) => {
    if (flutterInAppWebViewPlatformReady) {
      // @ts-ignore
      if (window.flutter_inappwebview.callHandler) {
        // @ts-ignore
        window.flutter_inappwebview.callHandler("routeNativeScreen", value).then(res => {
          console.log("app version 호출:: ", res);
          setVersion(res);
        });
      } else {
        // @ts-ignore
        window.flutter_inappwebview._callHandler("routeNativeScreen", value).then(res => {
          console.log("app version 호출:: ", res);
          setVersion(res);
        });
      }
    } else {
      if (process.env.NODE_ENV === "production") {
        if (window.navigator.userAgent.indexOf("InApp") > -1) {
          Sentry.withScope(scope => {
            scope.setTag("type", "flutter.callHandler");
            scope.setLevel("error");
            scope.setFingerprint(["routeNativeScreen", value]);
            Sentry.captureException("flutter callHandler Error");
          });
        }
      }
      console.error("flutterInAppWebViewPlatformReady not Ready!!");
    }
  };
  const clickLogout = async () => {
    await logoutApi();
    await TrackGoogleAnalyticsEvent(
      logoutCategory,
      logoutSuccessedAction,
      window.location.pathname,
    );
    await NativeFunction("routeNativeScreen", "logout");
  };

  const clickWithDrawal = async () => {
    await Withdrawal();
    await TrackGoogleAnalyticsEvent(
      withdrawalCategory,
      withdrawalSuccessedAction,
      window.location.pathname,
    );
    await NativeFunction("routeNativeScreen", "reset");
  };

  return (
    <LayoutMainPage bgColor="#f6f6f6" hideTitleBar>
      <MypageTitleBar />
      {linkItem.map(item => (
        <LinkItemWrap
          key={item.id}
          onClick={() =>
            item.link ? NativeFunction("routeNativeScreen", item.link) : navigate(item.url)
          }
        >
          <div>
            <IconTextGroup>
              <img src={item.imgUrl} alt={item.name} />
              <span>{item.name}</span>
            </IconTextGroup>
            <img
              src="/images/icon-mypage-arrow.svg"
              style={{ width: "2.8rem", height: "2.8rem" }}
              alt="right arrow"
            />
          </div>
        </LinkItemWrap>
      ))}

      <BottomArea>
        <span>앱 버전 {version}</span>
        <BtnWrap>
          <div onClick={clickLogout}>로그아웃</div>
          <div onClick={() => setOpenModal(!openModal)}>탈퇴하기</div>
        </BtnWrap>
      </BottomArea>

      <CustomModal
        isOpen={openModal}
        toggleModal={() => setOpenModal(!openModal)}
        topImage={<img src="/images/icon-sad-circle.svg" alt="sad icon" />}
        title="정말로 탈퇴하시겠어요?"
        contentMarkup={
          <>
            <div>탈퇴 시 입력하신 모든 정보와 기록이 삭제되고 복구할 수 없습니다.</div>
            <div>그래도 탈퇴하시겠어요?</div>
          </>
        }
        cancelBtnName="탈퇴"
        cancelBtnClick={() => clickWithDrawal()}
        okBtnName="취소"
        okBtnClick={() => setOpenModal(!openModal)}
      />
    </LayoutMainPage>
  );
};

export default MyPage;
