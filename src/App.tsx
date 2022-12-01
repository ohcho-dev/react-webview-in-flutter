import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./scss/_reset.scss";
import "./scss/_global.scss";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Main/Home/Home";
import Note from "./pages/Main/Note/Note";
import Coaching from "./pages/Main/Coaching/Coaching";
import Program from "./pages/Main/Program/Program";
import Mypage from "./pages/Main/Mypage/Mypage";

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // if (localStorage.getItem('jwt')) {
    let path = window.location.pathname;
    path === "/" ? navigate("/home") : navigate(path);
    // } else {
    //   navigate('/login');
    // }
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/note" element={<Note />}></Route>
          <Route path="/coaching" element={<Coaching />}></Route>
          <Route path="/program" element={<Program />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
        </Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </div>
  );
};

export default App;
