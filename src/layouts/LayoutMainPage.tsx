import React from "react";
import styled from "styled-components";
import LayoutBasePage from "./LayoutBasePage";
import BottomNav from "../components/BottomNav";
import MainTitleBar from "../components/TitleBar";

const MainPage = styled.div``;
const MarginTopBox = styled.div`
  width: 100%;
  height: 16vw;
`;
const Contents = styled.main`
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: calc(env(safe-area-inset-bottom) - 1.333vw + 20vw);
  padding-bottom: calc(constant(safe-area-inset-button) - 1.333vw + 20vw);
`;

interface LayoutMainPageProps {
  children?: React.ReactNode;
}

const LayoutMainPage: React.FC<LayoutMainPageProps> = ({ children }) => {
  return (
    <LayoutBasePage>
      <MainPage>
        <MainTitleBar />
        <MarginTopBox />
        <Contents>{children}</Contents>
        <BottomNav />
      </MainPage>
    </LayoutBasePage>
  );
};

export default LayoutMainPage;
