import React, { ReactElement, useEffect, useRef, useState } from "react";

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
  titleBarBorder?: boolean;
  children?: React.ReactNode;
  bottomBtn?: Boolean;
  bottomBtnElement?: ReactElement;
  style?: object;
  leftBtn?: React.ReactNode;
  programDetailPage?: boolean;
  handleBackBtnClick?: () => void | undefined;
}

const LayoutDetailPage: React.FC<LayoutDetailPageProps> = ({
  children,
  hideTitleBar = false,
  titleBarBorder = false,
  bottomBtn = false,
  programDetailPage = false,
  bottomBtnElement,
  style,
  leftBtn,
  handleBackBtnClick,
}) => {
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (scrollY === scrollRef?.current?.scrollTop) {
        setScrolling(false);
      }
    }, 500);
  }, [scrollY]);

  return (
    <LayoutBasePage>
      {!hideTitleBar && (
        <DetailTitleBar
          style={titleBarBorder ? { borderBottom: "solid 0.5px rgba(0, 0, 0, 0.15)" } : {}}
          leftBtn={leftBtn}
          handleBackBtnClick={handleBackBtnClick}
        />
      )}
      <DetailPage
        id="main"
        bottomBtn={bottomBtn ? true : false}
        style={{ ...style }}
        ref={scrollRef}
        onScroll={() => {
          setScrollY(scrollRef?.current?.scrollTop);
          if (!scrolling) {
            setScrolling(true);
          }
        }}
      >
        {children}
      </DetailPage>
      {bottomBtn && (
        <BottomBtnWrap $scrolling={programDetailPage && scrolling}>
          {bottomBtnElement}
        </BottomBtnWrap>
      )}
    </LayoutBasePage>
  );
};

export default LayoutDetailPage;
