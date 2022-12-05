import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import LayoutBasePage from "./LayoutBasePage";

const DetailPage = styled.main`
  border: solid 1px #f00;
  background: #f00;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
      <DetailPage>{children}</DetailPage>
    </LayoutBasePage>
  );
};

export default LayoutDetailPage;
