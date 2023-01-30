import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, useNavigate, useNavigationType, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Cookies from "js-cookie";

import "./scss/_reset.scss";
import "./scss/_global.scss";
import "./scss/_slideTransition.scss";
import "./scss/_customReactDatepicker.scss";

import { RouterConfig } from "./RouteConfig";
import { useQueries, useQueryClient, useQueryErrorResetBoundary } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  childrenKeyState,
  childrenListState,
  commonCodeState,
  selectedChildInfoState,
  selectedHomeDataState,
} from "./recoil/atom";
import { childType } from "./utils/type";
import { queryKeys } from "./constant/queryKeys";
import { getChildrenList } from "./api/childApi";
import { CHILD_ID_FIELD } from "./constant/localStorage";
import { getCommonCodeList } from "./api/commonApi";
import { ErrorBoundary } from "./pages/ErrorPage";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { getLoginDev } from "./api/loginDevApi";
import { getUserInfo } from "./api/mypage";
import { getHomeData } from "./api/homeApi";

let oldLocation: any = null;

const App: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const params = new URLSearchParams(window.location.search);
  const navigationType = useNavigationType();
  const location = useLocation();

  const { reset } = useQueryErrorResetBoundary();

  const { pathname } = useLocation();
  const [secondPath, setSecontPath] = useState("");

  const [token, setToken] = useState("");
  const [selectedChild, setSelectedChild] = useRecoilState(selectedChildInfoState);
  const [selectedHomeData, setSelectedHomeData] = useRecoilState(selectedHomeDataState);
  const [childrenList, setChildrenList] = useRecoilState(childrenListState);
  const setChildrenKey = useSetRecoilState(childrenKeyState);
  const setCommonCodeList = useSetRecoilState(commonCodeState);
  const [imageUpload, setImageUpload] = useState(false);

  useEffect(() => {
    let paramsToken = params.get("token");
    if (paramsToken) {
      Cookies.set("token", String(paramsToken));
      setToken(String(paramsToken));
    }
  }, [params]);

  useEffect(() => {
    if (token) {
      if (params.get("token") === token) {
        let path = window.location.pathname;
        path === "/" ? navigate("/home", { replace: true }) : navigate(path, { replace: true });
      }
    }
  }, [token]);

  const getBaseData = useQueries([
    {
      queryKey: queryKeys.userInfo,
      queryFn: () => getUserInfo(),
      onSuccess: (data: any) => {
        window.localStorage.setItem(CHILD_ID_FIELD, data.last_selected_child);
      },
      enabled: !!Cookies.get("token"),
    },
    {
      queryKey: queryKeys.childrenList,
      queryFn: () => getChildrenList(),
      onSuccess: (data: any[]) => {
        if (data.length) {
          let id = window.localStorage.getItem(CHILD_ID_FIELD) || data[0].id.toString();
          setSelectedChild(data.filter((child: childType) => child.id.toString() === id)[0]);

          setChildrenList(data);
        }
      },
      enabled: !!Cookies.get("token"),
    },
    {
      queryKey: queryKeys.homeData,
      queryFn: () => getHomeData(),
      onSuccess: (data: any) => {
        if (data) {
          setSelectedHomeData(data);
        }
      },
      enabled: !!selectedChild && !!window.localStorage.getItem(CHILD_ID_FIELD),
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
    let secondPath = pathname.split("/")[2];
    secondPath && setSecontPath(secondPath);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("refetchChildData", () => {
      queryClient.invalidateQueries(queryKeys.childrenList);
    });

    window.addEventListener("coachingResult", (res: any) => {
      console.log("coaching" + res);
      console.log("coaching" + res.detail.id);
    });

    window.addEventListener("coachingVideoAssignment", (res: any) => {
      console.log("video" + res);
      console.log("coaching" + res.detail.id);
    });
  }, []);

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
