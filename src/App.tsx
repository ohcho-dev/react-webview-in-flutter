import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, useNavigate, useNavigationType, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Cookies from "js-cookie";

import "./scss/_reset.scss";
import "./scss/_global.scss";
import "./scss/_slideTransition.scss";
import "./scss/_customReactDatepicker.scss";

import { RouterConfig } from "./RouteConfig";
import { useQueries, useQueryErrorResetBoundary } from "react-query";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  childrenKeyState,
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
import { ErrorBoundary } from "./pages/ErrorPage";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { getLoginDev } from "./api/loginDevApi";

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
  const [thirdPath, setThirdPath] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    let count = pathname.split("/").length - 1;
    let firstPath = pathname.split("/")[1];
    let secondPath = pathname.split("/")[2];
    let thirdPath = pathname.split("/")[3];
    setPathState(count);
    setFirstPath(firstPath);
    secondPath && setSecontPath(secondPath);
    thirdPath && setThirdPath(thirdPath);
  }, [pathname]);

  const [selectedChild, setSelectedChild] = useRecoilState(selectedChildInfoState);
  const [childrenList, setChildrenList] = useRecoilState(childrenListState);
  const setChildrenKey = useSetRecoilState(childrenKeyState);
  const setCommonCodeList = useSetRecoilState(commonCodeState);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      function reactRefrash(value) {
        window.location.reload();
      }
    `;
    document.body.appendChild(script);
  }, []);

  useQueries([
    // {
    //   queryKey: queryKeys.loginDev,
    //   queryFn: () => getLoginDev(),
    //   onSuccess: async (loginToken: { access_token: string }) => {
    //     process.env.NODE_ENV === "development" &&
    //       (await Cookies.set("token", loginToken.access_token));
    //   },
    // },
    {
      queryKey: queryKeys.childrenList,
      queryFn: () => getChildrenList(),
      onSuccess: (data: any[]) => {
        if (data.length) {
          let id = window.localStorage.getItem(CHILD_ID_FIELD) || data[0].id.toString();
          setSelectedChild(data.filter((child: childType) => child.id.toString() === id)[0]);

          if (!window.localStorage.getItem(CHILD_ID_FIELD)) {
            window.localStorage.setItem(CHILD_ID_FIELD, id);
          }
          setChildrenList(data);
        }
      },
      enabled: !!Cookies.get("token"),
      refetchOnWindowFocus: true,
      refetchInterval: 1000,
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
  useEffect(() => {
    if (childrenList.length) {
      let profileKey = Object.keys(childrenList).find(
        key => childrenList[key].id === selectedChild.id,
      );
      setChildrenKey(String(profileKey));
    }
  }, [childrenList, window.localStorage.getItem(CHILD_ID_FIELD)]);

  const DEFAULT_SCENE_CONFIG = {
    enter: "from-bottom",
    exit: "to-bottom",
  };

  const SURVEY_SCENE_CONFIG = {
    enter: "from-right",
    exit: "from-right",
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

    return matchedRoute
      ? matchedRoute.sceneConfig
      : secondPath === "questionnarie"
      ? SURVEY_SCENE_CONFIG
      : DEFAULT_SCENE_CONFIG;
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
      <TransitionGroup
        className={"router-wrapper"}
        childFactory={child => React.cloneElement(child, { classNames })}
      >
        <CSSTransition timeout={200} key={location.pathname}>
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
