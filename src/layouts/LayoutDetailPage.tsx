import React from "react";
import styled from "styled-components";
import LayoutBasePage from "./LayoutBasePage";
import MainTitleBar, { DetailTitleBar } from "../components/TitleBar";

const DetailPage = styled.div``;

interface LayoutDetailPageProps {
  children?: React.ReactNode;
}

const LayoutDetailPage: React.FC<LayoutDetailPageProps> = ({ children }) => {
  return (
    <LayoutBasePage>
      <DetailPage>{children}</DetailPage>
    </LayoutBasePage>
  );
};

export default LayoutDetailPage;
