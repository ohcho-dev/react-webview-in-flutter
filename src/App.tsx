import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./scss/_reset.scss";
import "./scss/_global.scss";
import "./scss/_slideTransition.scss";

import { RouterConfig } from "./RouteConfig";

let oldLocation: any = null;

const App: React.FC = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    // if (localStorage.getItem('jwt')) {
    let path = window.location.pathname;
    path === "/" ? navigate("/home") : navigate(path);
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
  if (navigationType === "PUSH") {
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
          <Routes location={location}>
            {RouterConfig.map((config, index) => {
              return <Route key={index} {...config} />;
            })}
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
