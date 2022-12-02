import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import LayoutBasePage from "./LayoutBasePage";

const DetailPage = styled.div`
  border: solid 1px #f00;
  background: #f00;
  height: 50vh;
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
