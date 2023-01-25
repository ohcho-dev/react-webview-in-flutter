import { useNavigate } from "react-router-dom";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import styled from "styled-components";
import { Withdrawal } from "../../api/mypage";
import { NativeFunction } from "../../utils/NativeFunction";
import CustomModal from "../../components/common/CustomModal";
import { useEffect, useLayoutEffect, useState } from "react";

const LinkItemWrap = styled.div`
  padding: 0 2.5rem;
  background: #fff;

  &:nth-child(3),
  &:nth-child(7),
  &:nth-child(8) {
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
  padding: 0 2.5rem 4rem;

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
    link: "https://pf.kakao.com/_xnAxjxfxj/chat",
    url: "#",
  },
];

const MyPage = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [appVersion, setAppVersion] = useState("");

  useLayoutEffect(() => {
    setAppVersion(`${NativeFunction("routeNativeScreen", "/appVersion")}`);
  }, []);

  const clickLogout = () => {
    NativeFunction("routeNativeScreen", "/logout");
  };

  const clickWithDrawal = async () => {
    await Withdrawal();
    await NativeFunction("routeNativeScreen", "/reset");
  };

  return (
    <LayoutMainPage marginTop="7.9rem" bgColor="#f6f6f6">
      {linkItem.map(item => (
        <LinkItemWrap
          key={item.id}
          onClick={() => (item.link ? (window.location.href = item.link) : navigate(item.url))}
        >
          <div>
            <IconTextGroup>
              <img src={item.imgUrl} alt="" />
              <span>{item.name}</span>
            </IconTextGroup>
            <img src="/images/icon-mypage-arrow.svg" />
          </div>
        </LinkItemWrap>
      ))}

      <BottomArea>
        <span>앱 버전 {appVersion}</span>
        <BtnWrap>
          <div onClick={clickLogout}>로그아웃</div>
          <div onClick={() => setOpenModal(!openModal)}>탈퇴하기</div>
        </BtnWrap>
      </BottomArea>

      <CustomModal
        isOpen={openModal}
        toggleModal={() => setOpenModal(!openModal)}
        topImage={<img src="/images/icon-sad-circle.svg" />}
        title="정말로 탈퇴하시겠어요?"
        contentMarkup={
          <>
            <div>탈퇴 시 입력하신 모든 정보와 기록이 삭제되고 복구할 수 없습니다.</div>
            <div>그래도 탈퇴하시겠어요?</div>
          </>
        }
        cancelBtnName="탈퇴"
        cancelBtnClick={clickWithDrawal}
        okBtnName="취소"
        okBtnClick={() => setOpenModal(!openModal)}
      />
    </LayoutMainPage>
  );
};

export default MyPage;
