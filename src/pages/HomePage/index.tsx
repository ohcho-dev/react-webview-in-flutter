import Cookies from "js-cookie";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { getHomeData } from "../../api/homeApi";
import { CHILD_ID_FIELD } from "../../constant/localStorage";
import { queryKeys } from "../../constant/queryKeys";
import LayoutMainPage from "../../layouts/LayoutMainPage";
import { childrenListState, selectedChildInfoState } from "../../recoil/atom";
import ChildInfo from "./components/ChildInfo";
import RecommendActivity from "./components/RecommendActivity";

const Devider = styled.div`
  width: 100%;
  height: 1rem;
  background: #f6f6f6;
`;

const HomePage = () => {
  const [selectedChild, setSelectedChild] = useRecoilState(selectedChildInfoState);
  const [childrenList, setChildrenList] = useRecoilState(childrenListState);
  const { data, refetch } = useQuery(queryKeys.homeData, () => getHomeData(), {
    enabled: !!Cookies.get("token") && !!window.localStorage.getItem(CHILD_ID_FIELD),
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    refetch();
  }, [selectedChild.id]);

  return (
    <>
      <LayoutMainPage>
        <ChildInfo childData={data} />
        <Devider />
        <RecommendActivity childData={data} />
      </LayoutMainPage>
    </>
  );
};

export default HomePage;
