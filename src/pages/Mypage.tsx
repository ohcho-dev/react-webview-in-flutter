import React from "react";
import { Link } from "react-router-dom";
import LayoutMainPage from "../layouts/LayoutMainPage";
const MyPage = () => {
  return (
    <LayoutMainPage>
      <Link to="/home/detail">
        <div style={{ fontSize: "3rem", background: "#f00" }}>
          MyPage!
          <br />
        </div>
      </Link>
    </LayoutMainPage>
  );
};

export default MyPage;
