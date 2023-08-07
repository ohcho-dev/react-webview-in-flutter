import { BOTTOM_BTN_WRAP_HEIGHT_REM, TITLE_BAR_HEIGHT_REM } from "constants/size";
import { ColorLight1 } from "lds-common/src/constants/tokens/global";
import React, { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { layoutDetailScrollYState } from "store/common";

import styled from "styled-components";
import { DetailTitleBar } from "../components/domain/my/TitleBar";
import { BottomBtnWrap } from "../components/domain/program/programListPage/programListPage.styled";

import LayoutBasePage from "./LayoutBasePage";

const DetailPage = styled.main`
  background: ${ColorLight1};
  position: fixed;
  top: ${TITLE_BAR_HEIGHT_REM}rem;
  left: 0;
  width: 100%;
  height: ${({
    bottomBtn,
    customBottomSection,
    customBottomSectionHeight,
  }: {
    bottomBtn?: boolean;
    customBottomSection?: boolean;
    customBottomSectionHeight?: number;
  }) =>
    bottomBtn
      ? `calc(100vh - ${TITLE_BAR_HEIGHT_REM}rem - ${BOTTOM_BTN_WRAP_HEIGHT_REM}rem)`
      : customBottomSection
      ? `calc(100vh - ${TITLE_BAR_HEIGHT_REM}rem - ${customBottomSectionHeight}rem)`
      : `calc(100vh - ${TITLE_BAR_HEIGHT_REM}rem)`};
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
  children: React.ReactNode;
  bottomBtn?: boolean;
  bottomBtnElement?: React.ReactNode;
  style?: object;
  title?: string;
  leftBtn?: React.ReactNode;
  bottomScrollAnimationEffect?: boolean;
  handleBackBtnClick?: () => void | undefined;
  titleType?: "back" | "close";
  customBottomSection?: boolean;
  customBottomSectionElement?: React.ReactNode;
  customBottmoSectionHeight?: number;
}

const LayoutDetailPage: React.FC<LayoutDetailPageProps> = ({
  children,
  hideTitleBar = false,
  titleBarBorder = false,
  bottomBtn = false,
  bottomScrollAnimationEffect = false,
  bottomBtnElement,
  style,
  title,
  leftBtn,
  handleBackBtnClick,
  titleType,
  customBottomSection,
  customBottomSectionElement,
  customBottmoSectionHeight,
}) => {
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const setLayoutDetailScrollY = useSetRecoilState(layoutDetailScrollYState);
  const [scrollAtBottom, setScrollAtBottom] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (scrollY === scrollRef?.current?.scrollTop) {
        setScrolling(false);
      }
    }, 500);
  }, [scrollY]);

  useEffect(() => {
    // 댓글창의 크기가 커질때 스크롤이 제일 아래로 오게 함
    if (scrollRef.current) {
      if (scrollAtBottom) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }
  }, [customBottmoSectionHeight, scrollAtBottom]);

  return (
    <LayoutBasePage>
      {!hideTitleBar && (
        <DetailTitleBar
          style={titleBarBorder ? { borderBottom: "solid 0.5px rgba(0, 0, 0, 0.15)" } : {}}
          leftBtn={leftBtn}
          title={title}
          handleBackBtnClick={handleBackBtnClick}
          titleType={titleType}
        />
      )}
      <DetailPage
        id="main"
        bottomBtn={bottomBtn}
        customBottomSection={customBottomSection}
        customBottomSectionHeight={customBottmoSectionHeight}
        style={{ ...style }}
        ref={scrollRef}
        onScroll={() => {
          const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

          setScrollAtBottom(scrollHeight - scrollTop === clientHeight);
          setLayoutDetailScrollY(scrollTop);
          setScrollY(scrollY);
          if (!scrolling) {
            setScrolling(true);
          }
        }}
      >
        {children}
      </DetailPage>
      {customBottomSection && customBottomSectionElement}
      {bottomBtn && (
        <BottomBtnWrap $scrolling={bottomScrollAnimationEffect && scrolling}>
          {bottomBtnElement}
        </BottomBtnWrap>
      )}
    </LayoutBasePage>
  );
};

export default LayoutDetailPage;
