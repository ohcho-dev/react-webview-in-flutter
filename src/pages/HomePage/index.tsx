import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import RecommendActivityBox from "./components/RecommendActivityBox";
import Visual from "./components/Visual";

const HomePage = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      const st = document.getElementById("main");
      st?.scrollTo(0, state);
    }
  }, [state]);

  return (
    <>
      <LayoutMainPage marginTop="-6rem">
        {/* <ChildInfo /> */}
        {/* <Devider /> */}
        {/* <RecommendActivity /> */}
        <Visual />
        <RecommendActivityBox />
      </LayoutMainPage>
    </>
  );
};

export default HomePage;
