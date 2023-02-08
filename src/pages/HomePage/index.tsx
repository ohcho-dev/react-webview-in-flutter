import styled from "styled-components";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import ChildInfo from "./components/ChildInfo";
import RecommendActivity from "./components/RecommendActivity";
import RecommendActivityBox from "./components/RecommendActivityBox";
import Visual from "./components/Visual";

const Devider = styled.div`
  width: 100%;
  height: 1rem;
  background: #f6f6f6;
`;

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
