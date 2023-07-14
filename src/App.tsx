import * as Sentry from "@sentry/react";
import Cookies from "js-cookie";
import React, { Suspense, useEffect, useState } from "react";
import { useQueryClient, useQueryErrorResetBoundary } from "react-query";
import { Route, Routes, useNavigate, useNavigationType, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./styles/_reset.scss";
import "./styles/_global.scss";
import "./styles/_slideTransition.scss";
import "./styles/_customReactDatepicker.scss";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { RouterConfig } from "./RouteConfig";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { CHILD_ID_FIELD, USER_KEY } from "./constants/localStorage";
import { ErrorBoundary } from "./pages/common/ErrorPage/ErrorPage";
import { NativeFunction } from "./utils/app/NativeFunction";
import {
  childrenKeyState,
  childrenListState,
  newNotificationFlagstate,
  selectedChildInfoState,
} from "./store/common";
import { currentTaskIdState } from "./store/domain/coaching";
import { commonQueryKeys } from "./queries/common/commonQueryKeys";
import { coachingQueryKeys } from "./queries/domain/coaching/coachingQueryKeys";
import { myQueryKeys } from "./queries/domain/my/myQueryKeys";
import useGetBaseDate from "hooks/useGetBaseData";
import useUpdateNotificationCheckTime from "queries/common/notification/useUpdateNotificationCheckTime";

let oldLocation: any = null;

const App: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const params = new URLSearchParams(window.location.search);
  const navigationType = useNavigationType();
  const location = useLocation();
  const { reset } = useQueryErrorResetBoundary();
  const [token, setToken] = useState("");
  const selectedChild = useRecoilValue(selectedChildInfoState);
  const childrenList = useRecoilValue(childrenListState);
  const setChildrenKey = useSetRecoilState(childrenKeyState);
  const currentTaskId = useRecoilValue(currentTaskIdState);
  const setNewNotificationFlag = useSetRecoilState(newNotificationFlagstate);
  const { mutate: updateNotificationTime } = useUpdateNotificationCheckTime();
  const data = useGetBaseDate();

  function refetchData() {
    return new Promise(function (resolve) {
      queryClient.invalidateQueries(coachingQueryKeys.videoAssignmentResult);
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

  useEffect(() => {
    if (currentTaskId) {
      window.addEventListener("videoReUpload", async () => {
        await refetchData().then(function () {
          queryClient.invalidateQueries(coachingQueryKeys.appliedCoachingInfo);
        });
      });
    }
  }, [currentTaskId]);

  useEffect(() => {
    window.addEventListener("refetchChildData", () => {
      queryClient.invalidateQueries(myQueryKeys.childrenList);
    });

    window.addEventListener("refetchSelectedChildDate", () => {
      queryClient.invalidateQueries(myQueryKeys.selectedChildInfo);
    });

    window.addEventListener("refetchPushList", () => {
      queryClient.invalidateQueries(commonQueryKeys.notificationList);
    });

    // 결과지 푸시 메세지 클릭
    window.addEventListener("coachingResult", ({ detail }: any) => {
      setNewNotificationFlag(false);
      updateNotificationTime();
      detail.paper_type === "TTPTY_EXTERNAL_URL"
        ? navigate(detail.url)
        : navigate(`/coaching/daycare/resultPaper/${detail.id}`);
    });

    // 동영상 반려 푸시 메세지 클릭
    window.addEventListener("coachingVideoAssignment", async (res: any) => {
      await new Promise(function (resolve) {
        setNewNotificationFlag(false);
        updateNotificationTime();
        resolve("success");
      }).then(() => navigate(`/coaching/videoAssignment/${res.detail.id}`));
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
