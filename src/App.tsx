import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./scss/_reset.scss";
import "./scss/_global.scss";

import Main from "./pages/Main/Main";

import Home from "./pages/Main/Home/Home";
import Note from "./pages/Main/Note/Note";
import Coaching from "./pages/Main/Coaching/Coaching";
import Program from "./pages/Main/Program/Program";
import Mypage from "./pages/Main/Mypage/Mypage";
import HomeDetail from "./pages/Detail/HomeDetail/HomeDetail";

const App: React.FC = () => {
  const navigate = useNavigate();
  // const location = useLocation();

  // const [prevDepth, setPrevDepth] = useState(location);

  useEffect(() => {
    // if (localStorage.getItem('jwt')) {
    let path = window.location.pathname;
    path === "/" ? navigate("/home") : navigate(path);
    // } else {
    //   navigate('/login');
    // }
  }, []);

  // const getPathDepth = (location: any) => {
  //   let pathArr = location.pathname.split("/");
  //   pathArr = pathArr.filter((n?: string) => n !== "");
  //   return pathArr.length;
  // };

  // useEffect(() => {
  //   getPathDepth(location);
  // }, [location]);

  // const currentKey = location.pathname.split("/")[1] || "/";

  return (
    // <TransitionGroup component="div" className="App">
    //   <CSSTransition
    //     key={currentKey}
    //     timeout={300}
    //     classNames="pageSlider"
    //     mountOnEnter={false}
    //     unmountOnExit
    //   >
    <div style={{ width: "100%", height: "100vh" }}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/note" element={<Note />}></Route>
          <Route path="/coaching" element={<Coaching />}></Route>
          <Route path="/program" element={<Program />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
        </Route>
        <Route path="/home/detail" element={<HomeDetail />}></Route>
      </Routes>
    </div>
    //   </CSSTransition>
    // </TransitionGroup>
  );
};

export default App;
