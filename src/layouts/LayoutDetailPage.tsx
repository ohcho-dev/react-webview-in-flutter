import React, { ReactElement, Suspense } from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import LoadingSpinner from "../components/common/LoadingSpinner";
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
`;

interface LayoutDetailPageProps {
  children?: React.ReactNode;
  bottomBtn?: Boolean;
  bottomBtnElement?: ReactElement;
  style?: object;
}

const LayoutDetailPage: React.FC<LayoutDetailPageProps> = ({
  children,
  bottomBtn = false,
  bottomBtnElement,
  style,
}) => {
  return (
    <LayoutBasePage>
      <DetailPage id="main" bottomBtn={bottomBtn ? true : false} style={style}>
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </DetailPage>
      {bottomBtn && <BottomBtnWrap>{bottomBtnElement}</BottomBtnWrap>}
    </LayoutBasePage>
  );
};

export default LayoutDetailPage;
