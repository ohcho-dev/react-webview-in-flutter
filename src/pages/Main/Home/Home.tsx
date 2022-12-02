import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Link to="/detail">
      <div style={{ fontSize: "3rem", background: "#f00" }}>
        home!
        <br />
        scroll <br /> test <br />
      </div>
    </Link>
  );
};

export default Home;
