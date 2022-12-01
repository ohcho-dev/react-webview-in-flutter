import React from "react";
import { Outlet } from "react-router-dom";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";

const Main: React.FC = () => {
  return (
    <LayoutDetailPage>
      <Outlet />
    </LayoutDetailPage>
  );
};

export default Main;
