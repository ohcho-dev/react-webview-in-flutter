import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getClassList } from "../../api/programApi";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { CHILD_ID_FIELD } from "../../constant/localStorage";
import { queryKeys } from "../../constant/queryKeys";
import { getDiscountPercentage } from "../../utils/getDiscountPercentage";
import ProgramCard from "./components/ProgramCard";
import { Divider } from "./components/styled";

const ClassList = () => {
  const navigate = useNavigate();
  const { status, data: classList = [] } = useQuery(queryKeys.classList, () => getClassList(), {
    enabled: !!Cookies.get("token") && !!window.localStorage.getItem(CHILD_ID_FIELD),
  });

  const handleCardClick = (id: number) => {
    navigate(`/program/class/${id}`);
  };

  return (
    <>
      {status === "idle" && <LoadingSpinner height="30vw" />}
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
