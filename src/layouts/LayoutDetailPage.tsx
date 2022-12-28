import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import LayoutBasePage from './LayoutBasePage';
// import { DetailTitleBar } from "../components/TitleBar";

const DetailPage = styled.main`
  background: #fff;
  position: fixed;
  top: 6rem;
  left: 0;
  width: 100%;
  height: ${(props: { bottomBtn?: boolean }) =>
    props.bottomBtn ? 'calc(100vh - 13.4rem)' : 'calc(100vh - 6rem)'};
  z-index: 100;
  overflow-y: scroll;
  overflow-x: hidden;
`;

interface LayoutDetailPageProps {
  children?: React.ReactNode;
  bottomBtn?: Boolean;
  style?: object;
}

const LayoutDetailPage: React.FC<LayoutDetailPageProps> = ({
  children,
  bottomBtn = false,
  style,
}) => {
  const location = useLocation();
  return (
    <LayoutBasePage>
      <DetailPage id="main" bottomBtn={bottomBtn ? true : false} style={style}>
        {children}
      </DetailPage>
    </LayoutBasePage>
  );
};

export default LayoutDetailPage;
