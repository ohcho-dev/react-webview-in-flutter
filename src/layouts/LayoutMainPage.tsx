import React from "react";
import styled from "styled-components";

import BottomNav from "../components/BottomNav";
import LayoutBasePage from "./LayoutBasePage";
import { useRecoilState, useRecoilValue } from "recoil";
import { childrenListState, openBottomModalState, selectedChildInfoState } from "../recoil/atom";
import { childType } from "../utils/type";
import ChildSelectBottomModal from "../components/ChildSelectBottomModal";
import { CHILD_ID_FIELD } from "../constant/localStorage";
import LoadingSpinner from "../components/common/LoadingSpinner";

const MainPage = styled.main`
  width: 100%;
  height: ${(prop: { marginTop?: string }) =>
    prop.marginTop ? `calc(100vh - 6rem - ${prop.marginTop})` : "calc(100vh - 6rem)"};
  position: fixed;
  top: 6rem;
  left: 0;
  z-index: 20;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: ${(prop: { marginTop?: string; bgColor?: string }) => prop.marginTop || "0"};
  background: ${(prop: { bgColor?: string }) => prop.bgColor || "#fff"};
`;
const Content = styled.div`
  margin-bottom: 6rem;
`;

interface LayoutMainPageProps {
  children?: React.ReactNode;
  marginTop?: string;
  bgColor?: string;
  style?: object;
}

const LayoutMainPage: React.FC<LayoutMainPageProps> = ({ children, marginTop, bgColor, style }) => {
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
      <MainPage marginTop={marginTop} bgColor={bgColor} style={style}>
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
