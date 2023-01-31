import Cookies from "js-cookie";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getClassList } from "../../api/programApi";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { CHILD_ID_FIELD } from "../../constant/localStorage";
import { queryKeys } from "../../constant/queryKeys";
import { selectedChildInfoState } from "../../recoil/atom";
import { getDiscountPercentage } from "../../utils/getDiscountPercentage";
import ProgramCard from "./components/ProgramCard";
import { Divider } from "./components/styled";

const ClassList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useRecoilValue(selectedChildInfoState);

  const {
    status,
    isFetching,
    refetch,
    data: classList = [],
  } = useQuery(queryKeys.classList, () => getClassList(), {
    enabled: !!Cookies.get("token") && !!window.localStorage.getItem(CHILD_ID_FIELD),
  });

  useEffect(() => {
    if (id) refetch();
  }, [id]);

  const handleCardClick = (id: number) => {
    navigate(`/program/class/${id}`, { state: pathname });
  };

  return (
    <>
      {(status === "idle" || isFetching) && <LoadingSpinner height="30vw" />}
      {classList.map((singleClass: { [key: string]: any }, index: number) => {
        return (
          <div key={index}>
            <ProgramCard
              id={singleClass.id}
              handleCardClick={() => handleCardClick(singleClass.id)}
              programImage={singleClass.main_image}
              title={singleClass.name}
              originalPrice={singleClass.base_price}
              price={singleClass.price}
              discountPercentage={getDiscountPercentage(singleClass.base_price, singleClass.price)}
              utilVisible={false}
            />
            {index !== classList.length - 1 && <Divider />}
          </div>
        );
      })}
    </>
  );
};

export default ClassList;
