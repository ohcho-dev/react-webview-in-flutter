import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import BottomNav from "../components/layout/BottomNav";
import ChildSelectBottomModal from "../components/common/ChildSelectBottomModal";
import MainTitleBar from "../components/domain/my/TitleBar";
import { CHILD_ID_FIELD } from "../constants/localStorage";
import {
  childrenListState,
  mainPageScrollValueState,
  openBottomModalState,
  selectedChildInfoState,
} from "../store/common";
import { ChildType } from "../types/common";
import LayoutBasePage from "./LayoutBasePage";
import useUpdateSelectedChildId from "../queries/domain/my/child/useUpdateSelectedChildId";

const MainPage = styled.main`
  width: 100%;
  height: ${(prop: { marginTop?: string }) =>
    prop.marginTop ? `calc(100vh - 6rem - ${prop.marginTop})` : "calc(100vh - 6rem)"};
  position: fixed;
  top: ${(prop: MainPageStyleProps) => (prop.hideTitleBar ? "0rem" : "6rem")};
  margin-top: ${(prop: { marginTop?: string }) => prop.marginTop};
  left: 0;
  z-index: 20;
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${(prop: MainPageStyleProps) => prop.bgColor || "#fff"};
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  &::-webkit-scrollbar-thumb {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Content = styled.div`
  margin-bottom: 6rem;
`;

interface LayoutMainPageProps {
  children?: React.ReactNode;
  customTitleBar?: React.ReactNode;
  marginTop?: string;
  bgColor?: string;
  hideTitleBar?: boolean;
  style?: object;
}

interface MainPageStyleProps {
  bgColor?: string;
  marginTop?: string;
  hideTitleBar?: boolean;
}

const LayoutMainPage: React.FC<LayoutMainPageProps> = ({
  children,
  marginTop,
  bgColor,
  style,
  hideTitleBar,
}) => {
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useRecoilState(openBottomModalState);
  const [selectedChildInfo, setSelectedChildInfo] = useRecoilState(selectedChildInfoState);
  const childrenList = useRecoilValue(childrenListState);
  const [scroll, setScroll] = useRecoilState(mainPageScrollValueState);

  const { mutate: updateChildId } = useUpdateSelectedChildId();

  const handleChildClick = (evt: React.MouseEvent<HTMLElement>) => {
    const childId = (evt.currentTarget as HTMLButtonElement).id;
    setSelectedChildInfo(
      childrenList.filter((child: ChildType) => child.id.toString() === childId)[0],
    );

    window.localStorage.setItem(CHILD_ID_FIELD, childId);
    updateChildId(childId);
    setOpenModal(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setScroll(0);
  }, []);

  return (
    <LayoutBasePage>
      {!hideTitleBar && (
        <MainTitleBar
          style={
            scroll === 0 && pathname === "/home"
              ? { background: "rgba(238, 249, 247, 0)", borderBottom: "0", zIndex: 21 }
              : { background: "white", zIndex: 22 }
          }
        />
      )}

      <MainPage
        id="main"
        marginTop={marginTop}
        bgColor={bgColor}
        style={style}
        onScroll={(e: React.UIEvent<HTMLElement>) => {
          setScroll(e.currentTarget.scrollTop);
        }}
        hideTitleBar={hideTitleBar}
      >
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
