import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import LayoutBasePage from "./LayoutBasePage";
// import { DetailTitleBar } from "../components/TitleBar";

const DetailPage = styled.main`
  background: #0f0;
  height: 100vh;
  position: fixed;
  top: 6rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 6rem);
  z-index: 100;
  overflow-y: scroll;
  overflow-x: hidden;
`;

interface LayoutDetailPageProps {
  children?: React.ReactNode;
}

const LayoutDetailPage: React.FC<LayoutDetailPageProps> = ({ children }) => {
  const location = useLocation();
  return (
    <LayoutBasePage>
      <DetailPage id="main">{children}</DetailPage>
    </LayoutBasePage>
  );
};

export default LayoutDetailPage;
