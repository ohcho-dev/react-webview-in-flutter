import Cookies from "js-cookie";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getCoachingList } from "../../api/programApi";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { CHILD_ID_FIELD } from "../../constant/localStorage";
import { queryKeys } from "../../constant/queryKeys";
import { selectedChildInfoState } from "../../recoil/atom";
import { getDiscountPercentage } from "../../utils/getDiscountPercentage";
import { coachingType } from "../../utils/type";
import ProgramCard from "./components/ProgramCard";
import { Divider } from "./components/styled";

const CoachingList = () => {
  const navigate = useNavigate();
  const { id } = useRecoilValue(selectedChildInfoState);

  const {
    status,
    isFetching,
    refetch,
    data: coachingList = [[]],
  } = useQuery(queryKeys.coachingList, () => getCoachingList(), {
    enabled: !!Cookies.get("token") && !!window.localStorage.getItem(CHILD_ID_FIELD),
  });

  useEffect(() => {
    if (id) refetch();
  }, [id]);

  const handleCardClick = (id: number) => {
    navigate(`/program/coaching/${id}`);
  };

  return (
    <>
      {(status === "idle" || isFetching) && <LoadingSpinner height="30vw" />}
      {coachingList &&
        coachingList[0].map((coaching: coachingType, index: number) => {
          return (
            <div key={index}>
              <ProgramCard
                id={coaching.id}
                handleCardClick={() => handleCardClick(coaching.id)}
                programImage={coaching.main_image}
                title={coaching.name}
                originalPrice={coaching.base_price}
                price={coaching.price}
                discountPercentage={getDiscountPercentage(coaching.base_price, coaching.price)}
                utilVisible={false}
              />
              {index !== coachingList[0].length - 1 && <Divider />}
            </div>
          );
        })}
    </>
  );
};

export default CoachingList;
