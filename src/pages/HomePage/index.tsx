import { useRecoilValue } from "recoil";
import styled from "styled-components";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import { selectedChildInfoState } from "../../recoil/atom";
import ChildInfo from "./components/ChildInfo";
import RecommendActivity from "./components/RecommendActivity";
import { NativeFunction } from "../../utils/NativeFunction";

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
        <button
          onClick={() => {
            NativeFunction("routeNativeScreen", "/coachingVideoDetail");
          }}
        >
          "/coachingVideoDetail"
        </button>
        <button
          onClick={() => {
            NativeFunction("routeNativeScreen", "on");
          }}
        >
          "/coachingVideoDetail"
        </button>
        <button
          onClick={() => {
            NativeFunction("routeNativeScreen", 80);
          }}
        >
          "/coachingVideoDetail"
        </button>
        <Devider />
        <RecommendActivity />
      </LayoutMainPage>
    </>
  );
};

export default HomePage;
