import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

// import MainTitleBar from "../components/TitleBar";
import BottomNav from "../components/BottomNav";
import LayoutBasePage from "./LayoutBasePage";
import CustomBottomModal from "../components/common/CustomBottomModal";

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
  const location = useLocation();
  return (
    <LayoutBasePage>
      <MainPage>
        <Content>{children}</Content>
      </MainPage>
      <BottomNav />
    </LayoutBasePage>
  );
};

export default LayoutMainPage;
