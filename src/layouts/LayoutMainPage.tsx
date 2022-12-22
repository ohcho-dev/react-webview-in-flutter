import React from "react";
import styled from "styled-components";

// import MainTitleBar from "../components/TitleBar";
import BottomNav from "../components/BottomNav";
import LayoutBasePage from "./LayoutBasePage";
import CustomBottomModal from "../components/common/CustomBottomModal";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  childrenListState,
  openChildSelectModalState,
  selectedChildInfoState,
} from "../recoil/atom";
import { childType } from "../utils/type";
import { useNavigate } from "react-router-dom";

const MainPage = styled.main`
  width: 100%;
  height: calc(100vh - 6rem);
  position: fixed;
  top: 6rem;
  left: 0;
  z-index: 20;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const Content = styled.div`
  margin-bottom: 6rem;
`;

const ChildrenListModalTitleSection = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2rem;

  span {
    font-weight: 700;
    font-size: 2rem;
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const ChildrenListModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ChildInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1.9rem 0;

  div {
    display: flex;
    align-items: center;
  }
`;

const ChildName = styled.span`
  font-size: 1.6rem;
  font-weight: 600;

  width: 5rem;
  max-width: 5rem;
  margin-left: 0.95rem;
`;

const ChildInfo = styled.div`
  font-size: 1.6rem;
  font-weight: 400;

  column-gap: 0.5rem;

  span:nth-child(1) {
    width: 10.2rem;
  }
`;

const MoveToChildManagementBtn = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: end;

  span {
    font-size: 1.4rem;
    font-weight: 400;
    color: rgba(10, 10, 10, 0.5);
    margin-right: 0.8rem;
  }
`;

interface LayoutMainPageProps {
  children?: React.ReactNode;
}

const LayoutMainPage: React.FC<LayoutMainPageProps> = ({ children }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useRecoilState(openChildSelectModalState);
  const [selectedChildInfo, setSelectedChildInfo] = useRecoilState(selectedChildInfoState);
  const childrenList = useRecoilValue(childrenListState);

  const handleChildClick = (evt: React.MouseEvent<HTMLElement>) => {
    const childId = (evt.currentTarget as HTMLButtonElement).id;
    setSelectedChildInfo(
      childrenList.filter((child: childType) => child.id.toString() === childId)[0],
    );
    window.localStorage.setItem("child_id", childId);
    setOpenModal(false);
  };

  return (
    <LayoutBasePage>
      <MainPage>
        <Content>{children}</Content>
      </MainPage>
      <BottomNav />
      {openModal && (
        <CustomBottomModal toggle={openModal} handleToggle={() => setOpenModal(!openModal)}>
          <ChildrenListModalWrapper>
            <ChildrenListModalTitleSection>
              <span>아이 선택</span>
              <img
                alt="close icon"
                src="/images/icon-close.svg"
                onClick={() => {
                  setOpenModal(!openModal);
                  navigate(-1);
                }}
              />
            </ChildrenListModalTitleSection>
            {childrenList.slice(0, 5).map((child: childType, index: number) => {
              return (
                <ChildInfoWrapper
                  onClick={handleChildClick}
                  id={child.id.toString()}
                  key={child.id.toString()}
                >
                  <div>
                    <img alt="profile icon" src={`/images/profile-${index}.svg`} />
                    <ChildName>{child.name}</ChildName>
                    <ChildInfo>
                      <span>({child.birth_date}) </span>
                      <span>{child.gender === "M" ? "남아" : "여아"}</span>
                    </ChildInfo>
                  </div>

                  {selectedChildInfo.id === child.id && (
                    <img alt="selected-icon" src="/images/icon-selected.svg" />
                  )}
                </ChildInfoWrapper>
              );
            })}
            <MoveToChildManagementBtn>
              <span>아이관리로 이동하기</span>
              <img alt="left icon" src="/images/icon-arrow-right-small.svg" />
            </MoveToChildManagementBtn>
          </ChildrenListModalWrapper>
        </CustomBottomModal>
      )}
    </LayoutBasePage>
  );
};

export default LayoutMainPage;
