import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { apis } from "../../../api/apis";

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
