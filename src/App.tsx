import React, { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useNavigate, useNavigationType, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Cookies from "js-cookie";

import "./scss/_reset.scss";
import "./scss/_global.scss";
import "./scss/_slideTransition.scss";
import "./scss/_customReactDatepicker.scss";

import { RouterConfig } from "./RouteConfig";
import { useQueries, useQueryErrorResetBoundary } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  childrenListState,
  commonCodeState,
  mainPageScrollValueState,
  selectedChildInfoState,
} from "./recoil/atom";
import { childType } from "./utils/type";
import { queryKeys } from "./constant/queryKeys";
import { getChildrenList } from "./api/childApi";
import { CHILD_ID_FIELD } from "./constant/localStorage";
import { getCommonCodeList } from "./api/commonApi";
import MainTitleBar, { DetailTitleBar, MypageTitleBar } from "./components/TitleBar";
import { ErrorBoundary } from "./pages/ErrorPage";
import LoadingSpinner from "./components/common/LoadingSpinner";

let oldLocation: any = null;

const App: React.FC = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const navigationType = useNavigationType();
  const location = useLocation();

  const { reset } = useQueryErrorResetBoundary();

  const { pathname } = useLocation();
  const [pathState, setPathState] = useState(0);
  const [firstPath, setFirstPath] = useState("");
  const [secondPath, setSecontPath] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    let count = pathname.split("/").length - 1;
    let firstPath = pathname.split("/")[1];
    let secondPath = pathname.split("/")[2];
    setPathState(count);
    setFirstPath(firstPath);
    secondPath && setSecontPath(secondPath);
  }, [pathname]);

  const setSelectedChild = useSetRecoilState(selectedChildInfoState);
  const setChildrenList = useSetRecoilState(childrenListState);
  const setCommonCodeList = useSetRecoilState(commonCodeState);
  const scroll = useRecoilValue(mainPageScrollValueState);

  useQueries([
    {
      queryKey: queryKeys.childrenList,
      queryFn: () => getChildrenList(),
      onSuccess: (data: any[]) => {
        if (data[0].length) {
          let id = window.localStorage.getItem(CHILD_ID_FIELD) || data[0][0].id.toString();
          setSelectedChild(data[0].filter((child: childType) => child.id.toString() === id)[0]);

          if (!window.localStorage.getItem(CHILD_ID_FIELD)) {
            window.localStorage.setItem(CHILD_ID_FIELD, id);
          }
          setChildrenList(data[0]);
        }
      },
      enabled: !!Cookies.get("token"),
    },
    {
      queryKey: queryKeys.commonCodeList,
      queryFn: () => getCommonCodeList(),
      onSuccess: (commonCodeList: any[]) => {
        let codeObj: { [key: string]: string | number | object } = {};

        if (commonCodeList[0].length) {
          commonCodeList[0].map(
            (code: { name: string; label: string }) => (codeObj[code.name] = code.label),
          );
          setCommonCodeList(codeObj);
        }
      },
      enabled: !!Cookies.get("token"),
    },
  ]);

  useEffect(() => {
    if (params.get("token")) {
      Cookies.set("token", String(params.get("token")));
    }
  }, [params]);

  useEffect(() => {
    if (Cookies.get("token")) {
      setToken(String(params.get("token")));
    }
  }, [Cookies.get("token")]);

  useEffect(() => {
    if (token) {
      if (params.get("token") === token) {
        let path = window.location.pathname;
        path === "/" ? navigate("/home", { replace: true }) : navigate(path, { replace: true });
      }
    }
  }, [token]);

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
    <>
      {pathState === 1 && firstPath !== "my" && firstPath !== "home" && <MainTitleBar />}
      {pathState === 1 && firstPath === "home" && (
        <MainTitleBar style={scroll === 0 ? { background: "none", borderBottom: "0" } : {}} />
      )}
      {pathState === 1 && firstPath === "my" && <MypageTitleBar />}
      {pathState > 1 && firstPath !== "my" && secondPath !== "coaching-detail" && (
        <DetailTitleBar border={true} />
      )}
      {pathState > 1 && (firstPath === "my" || secondPath === "coaching-detail") && (
        <DetailTitleBar border={false} />
      )}

      <TransitionGroup
        className={"router-wrapper"}
        childFactory={child => React.cloneElement(child, { classNames })}
      >
        <CSSTransition timeout={150} key={location.pathname}>
          <div style={{ width: "100%", height: "100vh" }}>
            <ErrorBoundary onReset={reset}>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes location={location}>
                  {RouterConfig.map((config, index) => {
                    return <Route key={index} {...config} />;
                  })}
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
