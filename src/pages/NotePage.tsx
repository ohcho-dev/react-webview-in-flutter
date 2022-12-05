import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { apis } from "../api/apis";
import LayoutMainPage from "../layouts/LayoutMainPage";
const NotePage = () => {
  //const { data } = useQuery("check", apis.getBerry);
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
