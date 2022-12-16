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
} from "../utils/atom";
import { childType } from "../utils/type";

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

const ChildrenListModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  row-gap: 1rem;
`;

const ChildInfoWrapper = styled.div`
  height: 4rem;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #f7f7f7;
`;

const ChildName = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`;

interface LayoutMainPageProps {
  children?: React.ReactNode;
}

const LayoutMainPage: React.FC<LayoutMainPageProps> = ({ children }) => {
  const [openModal, setOpenModal] = useRecoilState(openChildSelectModalState);
  const [selectedChildInfo, setSelectedChildInfo] = useRecoilState(
    selectedChildInfoState
  );
  const childrenList = useRecoilValue(childrenListState);

  const handleChildClick = (evt: React.MouseEvent<HTMLElement>) => {
    const childId = (evt.target as HTMLButtonElement).id;
    setSelectedChildInfo(
      childrenList.filter(
        (child: childType) =>
          child.id.toString() === (evt.target as HTMLButtonElement).id
      )[0]
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
        <CustomBottomModal
          toggle={openModal}
          handleToggle={() => setOpenModal(!openModal)}
        >
          <ChildrenListModalWrapper>
            {childrenList.map((child: childType) => {
              return (
                <ChildInfoWrapper
                  onClick={handleChildClick}
                  id={child.id.toString()}
                  key={child.id.toString()}
                >
                  <ChildName>{child.name}</ChildName>
                  {selectedChildInfo.id === child.id && (
                    <img alt="selected-icon" src="/images/character.svg" />
                  )}
                </ChildInfoWrapper>
              );
            })}
          </ChildrenListModalWrapper>
        </CustomBottomModal>
      )}
    </LayoutBasePage>
  );
};

export default LayoutMainPage;
