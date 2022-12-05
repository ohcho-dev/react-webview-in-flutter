import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import MainTitleBar from "../components/TitleBar";
import BottomNav from "../components/BottomNav";
import LayoutBasePage from "./LayoutBasePage";

const MainPage = styled.div``;
const Content = styled.main`
  width: 100%;
  height: calc(100vh - 6rem);
  position: fixed;
  top: 6rem;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
`;

interface LayoutMainPageProps {
  children?: React.ReactNode;
}

const LayoutMainPage: React.FC<LayoutMainPageProps> = ({ children }) => {
  const location = useLocation();
  return (
    <LayoutBasePage>
      <MainTitleBar />
      <MainPage>
        <Content>{children}</Content>
      </MainPage>
      <BottomNav />
    </LayoutBasePage>
  );
};

export default LayoutMainPage;
