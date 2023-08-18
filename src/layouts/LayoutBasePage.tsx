import React, { useState, useRef, TouchEvent, useEffect } from "react";

import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { isIOS } from "react-device-detect";
import useWindowSize from "../hooks/useWindowSize";

const BasePage = styled.div`
  height: 100vh;
  width: 100vw;
`;
const LeftSwipe = styled.div`
  width: 1rem;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 120;
`;

interface LayoutBasePageProps {
  children?: React.ReactNode;
}
const LayoutBasePage: React.FC<LayoutBasePageProps> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const windowSize = useWindowSize();
  const bodyRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [gestureBack, setGestureBack] = useState(true);
  const [resetStyle, setResetStyle] = useState(true);
  const [touchStartTime, setTouchStartTime] = useState(0);
  useEffect(() => {
    const path = pathname.split("/");

    if (path.length === 5 && pathname.substring(0, 18) === "/coaching/content/") {
      setResetStyle(false);
    }
    if (pathname.indexOf("/my/management-child/") !== -1) {
      setGestureBack(false);
      return;
    }
    if (pathname.indexOf("/coaching/questionnarie/form/") !== -1) {
      setGestureBack(false);
      return;
    }
    setGestureBack(path.length > 2);
  }, [pathname]);

  const handleTouchStart = (event: TouchEvent) => {
    if (!isIOS) return;
    if (!gestureBack) return;
    setTouchStartTime(event.timeStamp);
  };
  const handleTouchMove = (event: TouchEvent) => {
    if (!isIOS) return;
    if (!gestureBack) return;
    bodyRef.current.style.transform = `translateX(${event.changedTouches[0].clientX}px)`;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (!isIOS) return;
    if (!gestureBack) return;
    if (
      event.timeStamp - touchStartTime < 200 &&
      event.changedTouches[0].clientX > windowSize.width / 12
    ) {
      navigate(-1);
    } else if (event.changedTouches[0].clientX > windowSize.width / 3.5) {
      navigate(-1);
    } else {
      bodyRef.current.style.transform = `translateX(0)`;
    }
  };

  return (
    <BasePage id="body" ref={bodyRef} className={resetStyle ? "reset-style" : "custom-style"}>
      <LeftSwipe
        id="left-swipe"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      ></LeftSwipe>
      {children}
    </BasePage>
  );
};

export default LayoutBasePage;
