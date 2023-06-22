import * as Sentry from "@sentry/react";
import Cookies from "js-cookie";
import React, { Suspense, useEffect, useState } from "react";
import { useQueries, useQueryClient, useQueryErrorResetBoundary } from "react-query";
import { Route, Routes, useNavigate, useNavigationType, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./styles/_reset.scss";
import "./styles/_global.scss";
import "./styles/_slideTransition.scss";
import "./styles/_customReactDatepicker.scss";

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { RouterConfig } from "./RouteConfig";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { CHILD_ID_FIELD, USER_KEY } from "./constants/localStorage";
import { ErrorBoundary } from "./pages/common/ErrorPage/ErrorPage";
import { NativeFunction } from "./utils/app/NativeFunction";
import { ChildType } from "./types/common";
import {
  childrenKeyState,
  childrenListState,
  commonCodeState,
  selectedChildInfoState,
  selectedHomeDataState,
} from "./store/common";
import { currentTaskIdState } from "./store/domain/coaching";
import { commonQueryKeys } from "./queries/common/commonQueryKeys";
import { homeQueryKeys } from "./queries/domain/home/homeQueryKeys";
import { coachingQueryKeys } from "./queries/domain/coaching/coachingQueryKeys";
import { myQueryKeys } from "./queries/domain/my/myQueryKeys";
import { getHomeData } from "./queries/domain/home/useHomeData";
import { getChildrenList } from "./queries/domain/my/child/useChildrenList";
import { getUserInfo } from "./queries/common/auth/useAuthMe";
import { getCommonCodeList } from "./queries/common/useCommonCodeList";
import useGetBaseDate from "hooks/useGetBaseData";

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
  const setSelectedHomeData = useSetRecoilState(selectedHomeDataState);
  const [childrenList, setChildrenList] = useRecoilState(childrenListState);
  const setChildrenKey = useSetRecoilState(childrenKeyState);
  const setCommonCodeList = useSetRecoilState(commonCodeState);
  const currentTaskId = useRecoilValue(currentTaskIdState);
  const [resultId, setResultId] = useState("");
  const [videoId, setVideoId] = useState("");
  const data = useGetBaseDate();

  function refetchData() {
    return new Promise(function (resolve, reject) {
      queryClient.invalidateQueries(coachingQueryKeys.appliedCoachingInfo);
      resolve("success");
    });
  }

  useEffect(() => {
    const paramsToken = params.get("token");
    if (paramsToken) {
      Cookies.set("token", String(paramsToken));
      setToken(String(paramsToken));
    }
  }, [params]);

  useEffect(() => {
    if (token) {
      if (params.get("token") === token) {
        const path = window.location.pathname;
        path === "/" ? navigate("/home", { replace: true }) : navigate(path, { replace: true });
      }
    }
  }, [token]);

  // const getBaseData = useQueries([
  //   {
  //     queryKey: myQueryKeys.userInfo,
  //     queryFn: () => getUserInfo(),
  //     onSuccess: (data: any) => {
  //       window.localStorage.setItem(CHILD_ID_FIELD, data.last_selected_child);
  //       window.localStorage.setItem(USER_KEY, data.id);
  //     },
  //     enabled: !!Cookies.get("token"),
  //   },
  //   {
  //     queryKey: myQueryKeys.childrenList,
  //     queryFn: () => getChildrenList(),
  //     onSuccess: (data: any[]) => {
  //       if (data.length) {
  //         const id = window.localStorage.getItem(CHILD_ID_FIELD) || data[0].id.toString();
  //         setSelectedChild(data.filter((child: ChildType) => child.id.toString() === id)[0]);

  //         setChildrenList(data);
  //       }
  //     },
  //     enabled: !!Cookies.get("token"),
  //   },
  //   {
  //     queryKey: homeQueryKeys.homeData,
  //     queryFn: () => getHomeData(),
  //     onSuccess: (data: any) => {
  //       if (data) {
  //         setSelectedHomeData(data);
  //       }
  //     },
  //     enabled: !!selectedChild && !!window.localStorage.getItem(CHILD_ID_FIELD),
  //   },
  //   {
  //     queryKey: commonQueryKeys.commonCodeList,
  //     queryFn: () => getCommonCodeList(),
  //     onSuccess: (commonCodeList: any[]) => {
  //       const codeObj: { [key: string]: string | number | object } = {};

  //       if (commonCodeList[0].length) {
  //         commonCodeList[0].map(
  //           (code: { name: string; label: string }) => (codeObj[code.name] = code.label),
  //         );
  //         setCommonCodeList(codeObj);
  //       }
  //     },
  //     enabled: !!Cookies.get("token"),
  //   },
  // ]);

  useEffect(() => {
    const secondPath = pathname.split("/")[2];
    secondPath && setSecontPath(secondPath);
  }, [pathname]);

  useEffect(() => {
    if (currentTaskId) {
      window.addEventListener("videoReUpload", async () => {
        await refetchData().then(function () {
          navigate(`/coaching/coaching-detail/${currentTaskId}`);
        });
      });
    }
  }, [currentTaskId]);

  useEffect(() => {
    window.localStorage.removeItem(CHILD_ID_FIELD);
    window.addEventListener("refetchChildData", () => {
      queryClient.invalidateQueries(myQueryKeys.childrenList);
    });

    window.addEventListener("refetchPushList", () => {
      queryClient.invalidateQueries(commonQueryKeys.notificationList);
    });

    window.addEventListener("coachingResult", (res: any) => {
      setResultId(res.detail.id);
    });

    window.addEventListener("coachingVideoAssignment", (res: any) => {
      alert(res.detail.id);
      setVideoId(res.detail.id);
    });
  }, []);

  useEffect(() => {
    const { name, id } = selectedChild;
    if (window.localStorage.getItem(USER_KEY) && selectedChild.id) {
      if (window.navigator.userAgent.indexOf("InApp") > -1) {
        Sentry.setUser({
          id: window.localStorage.getItem(USER_KEY) || "",
          child_id: id,
          child_name: name,
        });
      }
    }
  }, [window.localStorage.getItem(USER_KEY), selectedChild]);

  useEffect(() => {
    if (resultId) {
      navigate(`/coaching/result/${resultId}`);
    }
    if (videoId) {
      navigate(`/coaching/videoAssignment${videoId}`);
    }
  }, [resultId, videoId]);

  useEffect(() => {
    if (childrenList.length) {
      const profileKey = Object.keys(childrenList).find(
        key => childrenList[key].id === selectedChild.id,
      );
      setChildrenKey(String(profileKey));
    }
  }, [childrenList, window.localStorage.getItem(CHILD_ID_FIELD)]);

  // GA_pageview 정보 전송
  useEffect(() => {
    const pathname = location.pathname;
    const regexDeleteNumber = /[0-9]/g;
    const regexIsNumber = /[^0-9]/g;
    const isNumber = pathname.replace(regexIsNumber, "");
    const deleteNumber = pathname.replace(regexDeleteNumber, "");
    const newPathname = isNumber ? deleteNumber + "[id]" : deleteNumber;

    NativeFunction("ga4logNativeLog", `${newPathname}`);
  }, [location]);

  const DEFAULT_SCENE_CONFIG = {
    enter: "from-right",
    exit: "to-right",
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

    return matchedRoute ? matchedRoute.sceneConfig : DEFAULT_SCENE_CONFIG;
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

export default Sentry.withProfiler(App);
