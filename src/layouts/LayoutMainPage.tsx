import React from "react";
import styled from "styled-components";

import BottomNav from "../components/BottomNav";
import LayoutBasePage from "./LayoutBasePage";
import { useRecoilState, useRecoilValue } from "recoil";
import { childrenListState, openBottomModalState, selectedChildInfoState } from "../recoil/atom";
import { childType } from "../utils/type";
import ChildSelectBottomModal from "../components/ChildSelectBottomModal";
import { CHILD_ID_FIELD } from "../constant/localStorage";

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

interface LayoutMainPageProps {
  children?: React.ReactNode;
}

const LayoutMainPage: React.FC<LayoutMainPageProps> = ({ children }) => {
  const [openModal, setOpenModal] = useRecoilState(openBottomModalState);
  const [selectedChildInfo, setSelectedChildInfo] = useRecoilState(selectedChildInfoState);
  const childrenList = useRecoilValue(childrenListState);

  const handleChildClick = (evt: React.MouseEvent<HTMLElement>) => {
    const childId = (evt.currentTarget as HTMLButtonElement).id;
    setSelectedChildInfo(
      childrenList.filter((child: childType) => child.id.toString() === childId)[0],
    );
    window.localStorage.setItem(CHILD_ID_FIELD, childId);
    setOpenModal(false);
  };

  return (
    <LayoutBasePage>
      <MainPage>
        <Content>{children}</Content>
      </MainPage>
      <BottomNav />
      <ChildSelectBottomModal
        selectedChildInfo={selectedChildInfo}
        childrenList={childrenList}
        openModal={openModal}
        toggleModal={() => setOpenModal(!openModal)}
        handleChildClick={handleChildClick}
      />
    </LayoutBasePage>
  );
};

export default LayoutMainPage;
