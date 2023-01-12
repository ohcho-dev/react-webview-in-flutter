import { useRecoilValue } from "recoil";
import styled from "styled-components";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import { selectedChildInfoState } from "../../recoil/atom";
import ChildInfo from "./components/ChildInfo";
import RecommendActivity from "./components/RecommendActivity";

const Devider = styled.div`
  width: 100%;
  height: 1rem;
  background: #f6f6f6;
`;

const HomePage = () => {
  const childData = useRecoilValue(selectedChildInfoState);

  return (
    <>
      <LayoutMainPage marginTop="-6rem">
        <ChildInfo childData={childData} />
        <Devider />
        <RecommendActivity />
      </LayoutMainPage>
    </>
  );
};

export default HomePage;
