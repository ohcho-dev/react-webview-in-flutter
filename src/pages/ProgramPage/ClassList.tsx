import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getClassList } from "../../api/programApi";
import { queryKeys } from "../../constant/queryKeys";
import { getDiscountPercentage } from "../../utils/getDiscountPercentage";
import ProgramCard from "./components/ProgramCard";
import { Divider } from "./components/styled";

const ClassList = () => {
  const navigate = useNavigate();
  const { data: classList } = useQuery(queryKeys.classList, () => getClassList());

  const handleCardClick = (id: number) => {
    navigate(`/program/class/${id}`);
  };
  return (
    <>
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
