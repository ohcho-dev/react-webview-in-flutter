import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RecommendActivityBox from "../../../components/domain/home/RecommendActivityBox";
import Visual from "../../../components/domain/home/Visual";
import LayoutMainPage from "../../../layouts/LayoutMainPage";

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
