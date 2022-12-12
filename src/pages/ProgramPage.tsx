import React, { useState } from "react";
import { Link } from "react-router-dom";
import LayoutMainPage from "../layouts/LayoutMainPage";
const ProgramPage = () => {
  return (
    <LayoutMainPage>
      <div style={{ fontSize: "3rem", background: "#f00" }}>
        ProgramPage!
        <br />
      </div>
    </LayoutMainPage>
  );
};

export default ProgramPage;
