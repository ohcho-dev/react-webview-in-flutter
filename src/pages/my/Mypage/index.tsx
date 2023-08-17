/* eslint-disable @typescript-eslint/ban-ts-comment */
import { withScope, captureException } from "@sentry/react";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { flutterInAppWebViewPlatformReady } from "../../..";
import { MypageTitleBar } from "../../../components/domain/my/TitleBar";
import CustomModal from "../../../components/common/CustomModal";
import LayoutMainPage from "../../../layouts/LayoutMainPage";
import { NativeFunction } from "../../../utils/app/NativeFunction";
import {
  logoutSuccessedAction,
  withdrawalSuccessedAction,
} from "../../../utils/google-analytics/events/ManagementUser";
import UseImgix from "../../../components/common/Imgix";
import * as S from "./myPage.styled";
import useWithdrawAccount from "../../../queries/common/auth/useWithdrawAccount";
import useLogout from "../../../queries/common/auth/useLogout";
import Icon from "lds-common/src/components/Icon";
import Text from "components/common/Text";
import {
  ColorLightBlack5,
  ColorLightBlack7,
  ColorLightBlack8,
  ColorLightSlate8,
  TextBase1624Medium,
  TextSm1420Regular,
  TextXs1218Regular,
  TextXs1218UnderlineMedium,
} from "lds-common/src/constants/tokens/global";
import { iconName } from "lds-common/src/components/Icon/Icon.type";

const linkItem: { id: number; icon: iconName; name: string; url: string; link?: string }[] = [
  {
    id: 1,
    icon: "bell-black",
    name: "알림 설정",
    url: "/my/management-alarm",
  },
  {
    id: 3,
    icon: "speakerphone",
    name: "공지사항",
    url: "/my/notice",
  },
  {
    id: 4,
    icon: "vocablary",
    name: "이용 약관",
    url: "/my/terms",
  },
  {
    id: 5,
    icon: "vocablary",
    name: "개인정보 처리방침",
    url: "/my/privacy",
  },
  {
    id: 6,
    icon: "vocablary",
    name: "민감정보 처리방침",
    url: "/my/sensitive",
  },
  {
    id: 7,
    icon: "message-circle",
    name: "문의하기",
    link: "kakaoTalk@_xnAxjxfxj@chat",
    url: "#",
  },
];

const MyPage = () => {
  const navigate = useNavigate();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [version, setVersion] = useState("");
  const { mutate: withdrawAccount } = useWithdrawAccount();
  const { mutate: logout } = useLogout();
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
          withScope(scope => {
            scope.setTag("type", "flutter.callHandler");
            scope.setLevel("error");
            scope.setFingerprint(["routeNativeScreen", value]);
            captureException("flutter callHandler Error");
          });
        }
      }
      console.error("flutterInAppWebViewPlatformReady not Ready!!");
    }
  };
  const clickLogout = async () => {
    await logout();
    await NativeFunction("ga4logNativeEventLog", `${logoutSuccessedAction}`);
    await NativeFunction("routeNativeScreen", "logout");
  };

  const clickWithDrawal = async () => {
    await withdrawAccount();
    await NativeFunction("ga4logNativeEventLog", `${withdrawalSuccessedAction}`);
    await setOpenSuccessModal(true);
  };

  const closeApp = async () => {
    await setOpenSuccessModal(!openSuccessModal);
    await NativeFunction("routeNativeScreen", "reset");
  };

  return (
    <LayoutMainPage bgColor="#f6f6f6" hideTitleBar>
      <MypageTitleBar />
      <S.LinkSection>
        {linkItem.map(item => (
          <S.LinkItemWrap
            key={item.id}
            onClick={() =>
              item.link ? NativeFunction("routeNativeScreen", item.link) : navigate(item.url)
            }
          >
            <S.IconTextGroup>
              <Icon icon={item.icon} size={20} />
              <Text variant={TextBase1624Medium} color={ColorLightBlack8} isEllipsis>
                {item.name}
              </Text>
            </S.IconTextGroup>
            <Icon icon="chevron-right" size={20} fill={ColorLightSlate8} />
          </S.LinkItemWrap>
        ))}
      </S.LinkSection>

      <S.BottomArea>
        <Text variant={TextXs1218Regular} color={ColorLightBlack5}>
          {"앱 버전 " + version}
        </Text>
        <S.BtnWrap>
          <div onClick={() => setOpenLogoutModal(prev => !prev)}>
            <Text variant={TextXs1218UnderlineMedium} color={ColorLightBlack5}>
              로그아웃
            </Text>
          </div>
          <div onClick={() => setOpenModal(!openModal)}>
            <Text variant={TextXs1218UnderlineMedium} color={ColorLightBlack5}>
              탈퇴하기
            </Text>
          </div>
        </S.BtnWrap>
      </S.BottomArea>

      <CustomModal
        cancelBtn
        isOpen={openLogoutModal}
        toggleModal={() => setOpenLogoutModal(!openLogoutModal)}
        title="로그아웃 하시겠어요?"
        okBtnName="로그아웃"
        okBtnClick={() => clickLogout()}
        cancelBtnName="취소"
        cancelBtnClick={() => setOpenLogoutModal(!openLogoutModal)}
      >
        <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
          안전하게 로그아웃 돼요.
        </Text>
      </CustomModal>
      <CustomModal
        cancelBtn
        isOpen={openModal}
        toggleModal={() => setOpenModal(!openModal)}
        topImage={<UseImgix srcUrl="/images/icon-sad-circle.svg" alt="sad icon" />}
        title="정말로 탈퇴하시겠어요?"
        cancelBtnName="탈퇴"
        cancelBtnClick={() => clickWithDrawal()}
        okBtnName="취소"
        okBtnClick={() => setOpenModal(!openModal)}
      >
        <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
          탈퇴 시 입력하신 모든 정보와 기록이 삭제되고 이후 복구할 수 없어요.
        </Text>
      </CustomModal>
      <CustomModal
        isOpen={openSuccessModal}
        toggleModal={() => setOpenSuccessModal(!openSuccessModal)}
        topImage={<UseImgix srcUrl="/images/icon-sad-circle.svg" alt="sad icon" />}
        title="탈퇴되었어요."
        okBtnName="확인"
        okBtnClick={closeApp}
      >
        <>
          <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
            모든 정보가 안전하게 삭제되었어요.
          </Text>
          <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
            다음에 또 만나요.
          </Text>
        </>
      </CustomModal>
    </LayoutMainPage>
  );
};

export default MyPage;
