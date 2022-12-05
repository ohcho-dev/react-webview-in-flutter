import React, { Component, ReactNode, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import "./scss/_reset.scss";
import "./scss/_global.scss";
import "./scss/_slideTransition.scss";

import { RouterConfig } from "./RouteConfig";
import { useQueryErrorResetBoundary } from "react-query";

let oldLocation: any = null;

const ErrorSection = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 30%;
  }
`;

const FailSentence = styled.span`
  font-size: 1.6rem;
  margin: 3rem 0;
`;

const RetryButton = styled.button`
  width: 60%;
  height: 5rem;
  border: none;
  color: white;
  background-color: black;
  font-size: 1.6rem;
`;

interface Props {
  children?: ReactNode;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  // 에러 기록
  // public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //   console.error("Uncaught error:", error, errorInfo);
  // }

  onResetErrorBoundary = () => {
    const { onReset } = this.props;
    onReset == null ? void 0 : onReset();
    this.reset();
  };

  reset() {
    this.setState({ hasError: false });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorSection>
          <img src="/images/icon-sad.svg" alt="sad icon" />
          <FailSentence>요청사항을 처리하는데 실패하였습니다.</FailSentence>
          <RetryButton onClick={this.onResetErrorBoundary}>
            다시 시도하기
          </RetryButton>
        </ErrorSection>
      );
    }

    return this.props.children;
  }
}

const App: React.FC = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();
  const { pathname } = location;
  const { reset } = useQueryErrorResetBoundary();

  useEffect(() => {
    // if (localStorage.getItem('jwt')) {
    let path = window.location.pathname;
    path === "/"
      ? navigate("/home", { replace: true })
      : navigate(path, { replace: true });
    // } else {
    //   navigate('/login');
    // }
  }, []);

  const DEFAULT_SCENE_CONFIG = {
    enter: "from-right",
    exit: "to-exit",
  };

  const getSceneConfig = (location: object) => {
    const matchedRoute = RouterConfig.find((config) =>
      new RegExp(`^${config.path}$`).test(pathname)
    );

    return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
  };

  let classNames = "";
  if (navigationType === "PUSH" || navigationType === "REPLACE") {
    classNames = "forward-" + getSceneConfig(location).enter;
  } else if (navigationType === "POP") {
    classNames = "back-" + getSceneConfig(oldLocation).exit;
  }

  oldLocation = location;

  return (
    <TransitionGroup
      className={"router-wrapper"}
      childFactory={(child) => React.cloneElement(child, { classNames })}
    >
      <CSSTransition timeout={300} key={location.pathname}>
        <div style={{ width: "100%", height: "100vh" }}>
          <ErrorBoundary onReset={reset}>
            <Routes location={location}>
              {RouterConfig.map((config, index) => {
                return <Route key={index} {...config} />;
              })}
            </Routes>
          </ErrorBoundary>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
