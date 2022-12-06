import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { apis } from "../api/apis";
import Button from "../components/common/Button";
import LoadingSpinner from "../components/common/LoadingSpinner";

import LayoutMainPage from "../layouts/LayoutMainPage";

const NotePage = () => {
  const { data, isLoading } = useQuery("check", apis.getList);
  return (
    <LayoutMainPage>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        // <Link to="/detail">
        //   <div style={{ fontSize: "3rem", background: "#f00" }}>
        //     NotePage!
        //     <br />
        //   </div>
        // </Link>
        <Button
          theme={"black"}
          onClick={() => console.log("click")}
          id="button"
          content={"신청하기"}
        />
      )}
    </LayoutMainPage>
  );
};

export default NotePage;
