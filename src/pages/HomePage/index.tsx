import LayoutMainPage from "../../layouts/LayoutMainPage";
import RecommendActivityBox from "./components/RecommendActivityBox";
import Visual from "./components/Visual";

const HomePage = () => {
  return (
    <>
      <LayoutMainPage marginTop="-6rem">
        {/* <ChildInfo />
        <Devider />
        <RecommendActivity /> */}
        <Visual />
        <RecommendActivityBox />
      </LayoutMainPage>
    </>
  );
};

export default HomePage;
