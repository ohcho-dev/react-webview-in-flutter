import React, { ReactElement } from "react";
import styled from "styled-components";
import { DetailTitleBar } from "../components/TitleBar";
import { BottomBtnWrap } from "../pages/ProgramPage/components/styled";

import LayoutBasePage from "./LayoutBasePage";

const DetailPage = styled.main`
  background: #fff;
  position: fixed;
  top: 6rem;
  left: 0;
  width: 100%;
  height: ${(props: { bottomBtn?: boolean }) =>
    props.bottomBtn ? "calc(100vh - 13.4rem)" : "calc(100vh - 6rem)"};
  z-index: 100;
  transform: translate3d(0, 0, 0);
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  &::-webkit-scrollbar-thumb {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

interface LayoutDetailPageProps {
  hideTitleBar?: boolean;
  children?: React.ReactNode;
  bottomBtn?: Boolean;
  bottomBtnElement?: ReactElement;
  style?: object;
  leftBtn?: React.ReactNode;
  goBackURL?: string;
}

const LayoutDetailPage: React.FC<LayoutDetailPageProps> = ({
  children,
  hideTitleBar = false,
  bottomBtn = false,
  bottomBtnElement,
  style,
  leftBtn,
  goBackURL = "",
}) => {
  return (
    <LayoutBasePage>
      {!hideTitleBar && <DetailTitleBar leftBtn={leftBtn} goBackURL={goBackURL} />}
      <DetailPage id="main" bottomBtn={bottomBtn ? true : false} style={{ ...style }}>
        {children}
      </DetailPage>
      {bottomBtn && <BottomBtnWrap>{bottomBtnElement}</BottomBtnWrap>}
    </LayoutBasePage>
  );
};

export default LayoutDetailPage;
