import React, { Component, ReactNode, Suspense, useEffect } from "react";
import { Route, Routes, useNavigate, useNavigationType, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import "./scss/_reset.scss";
import "./scss/_global.scss";
import "./scss/_slideTransition.scss";

import { RouterConfig } from "./RouteConfig";
import { useQuery, useQueryErrorResetBoundary } from "react-query";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { useSetRecoilState } from "recoil";
import { childrenListState, selectedChildInfoState } from "./recoil/atom";
import { childType } from "./utils/type";
import { queryKeys } from "./constant/queryKeys";
import { getChildrenList } from "./api/childApi";
import { CHILD_ID_FIELD } from "./constant/localStorage";

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

export class ErrorBoundary extends Component<Props, State> {
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
          <RetryButton onClick={this.onResetErrorBoundary}>다시 시도하기</RetryButton>
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
  const { reset } = useQueryErrorResetBoundary();
  const { data } = useQuery(queryKeys.childrenList, () => getChildrenList(), {
    refetchOnWindowFocus: false,
  });
  const setSelectedChild = useSetRecoilState(selectedChildInfoState);
  const setChildrenList = useSetRecoilState(childrenListState);

  useEffect(() => {
    // if (localStorage.getItem('jwt')) {
    let path = window.location.pathname;
    path === "/" ? navigate("/home", { replace: true }) : navigate(path, { replace: true });
    // } else {
    //   navigate('/login');
    // }
  }, []);

  useEffect(() => {
    if (data[0].length) {
      let id = window.localStorage.getItem(CHILD_ID_FIELD) || data[0][0].id.toString();
      setSelectedChild(data[0].filter((child: childType) => child.id.toString() === id)[0]);

      if (!window.localStorage.getItem(CHILD_ID_FIELD)) {
        window.localStorage.setItem(CHILD_ID_FIELD, id);
      }
      setChildrenList(data[0]);
    }
  }, [data]);

  const DEFAULT_SCENE_CONFIG = {
    enter: "from-bottom",
    exit: "to-bottom",
  };

  const getSceneConfig = (location: {
    pathname: string;
    search: string;
    hash: string;
    state: null;
    key: string;
  }) => {
    // 동적페이지의 경우 비교 로직이 필요하지만 무조건 상세페이지로 사용될 것으로 예상되어 따로 로직을 만들지 않고 default 값을 bottom으로 지정하여 해결
    const matchedRoute =
      location &&
      RouterConfig.find(config => new RegExp(`^${config.path}$`).test(location.pathname));

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
      childFactory={child => React.cloneElement(child, { classNames })}
    >
      <CSSTransition timeout={150} key={location.pathname}>
        <div style={{ width: "100%", height: "100vh" }}>
          <Suspense fallback={<LoadingSpinner />}>
            <ErrorBoundary onReset={reset}>
              <Routes location={location}>
                {RouterConfig.map((config, index) => {
                  return <Route key={index} {...config} />;
                })}
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
