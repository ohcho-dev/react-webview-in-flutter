import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainTitleBar, { DetailTitleBar } from "../components/TitleBar";
import { useLocation } from "react-router-dom";

const BasePage = styled.div``;

interface LayoutBasePageProps {
  children?: React.ReactNode;
}
const LayoutBasePage: React.FC<LayoutBasePageProps> = ({ children }) => {
  const { pathname } = useLocation();
  const [pathState, setPathState] = useState(0);

  useEffect(() => {
    let count = pathname.split("/").length - 1;
    setPathState(count);
  }, [pathname]);

  return (
    <BasePage id="body">
      {pathState === 1 && <MainTitleBar />}
      {pathState > 1 && <DetailTitleBar />}
      {children}
    </BasePage>
  );
};

export default LayoutBasePage;
