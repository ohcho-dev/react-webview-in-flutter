import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import MainTitleBar from "../components/TitleBar";
import BottomNav from "../components/BottomNav";
import LayoutBasePage from "./LayoutBasePage";

import MainTransition from "../components/transition/MainTransition";

const MainPage = styled.div``;
const MarginTopBox = styled.div`
  width: 100%;
  height: 6rem;
`;
const Contents = styled.main``;

interface LayoutMainPageProps {
  children?: React.ReactNode;
}

const LayoutMainPage: React.FC<LayoutMainPageProps> = ({ children }) => {
  const location = useLocation();
  return (
    <LayoutBasePage>
      <MainPage>
        <MainTitleBar />
        <BottomNav />

        <MainTransition transitionKey={location.pathname}>
          <>
            <MarginTopBox />
            <Contents>{children}</Contents>
          </>
        </MainTransition>
      </MainPage>
    </LayoutBasePage>
  );
};

export default LayoutMainPage;
