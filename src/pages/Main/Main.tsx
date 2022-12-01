import React from "react";
import { Outlet } from "react-router-dom";
import LayoutMainPage from "../../layouts/LayoutMainPage";

const Main: React.FC = () => {
  return (
    <LayoutMainPage>
      <Outlet />
    </LayoutMainPage>
  );
};

export default Main;
