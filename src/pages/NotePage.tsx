import React from "react";
import { Link } from "react-router-dom";
import LayoutMainPage from "../layouts/LayoutMainPage";
const NotePage = () => {
  return (
    <LayoutMainPage>
      <Link to="/detail">
        <div style={{ fontSize: "3rem", background: "#f00" }}>
          NotePage!
          <br />
        </div>
      </Link>
    </LayoutMainPage>
  );
};

export default NotePage;
