import Cookies from "js-cookie";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getClassList } from "../../api/programApi";
import { CHILD_ID_FIELD } from "../../constant/localStorage";
import { queryKeys } from "../../constant/queryKeys";
import { selectedChildInfoState } from "../../recoil/atom";
import { getDiscountPercentage } from "../../utils/getDiscountPercentage";
import ProgramCard from "./components/ProgramCard";
import { Divider } from "./components/styled";

const ProgramTitle = styled.span`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  margin-left: 0.4rem;
`;

const ClassList = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useRecoilValue(selectedChildInfoState);

  const { refetch, data: classList = [] } = useQuery(queryKeys.classList, () => getClassList(), {
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
      {classList[0] && (
        <ProgramTitle>
          🧑🏻‍⚕️ <Title>전문가와 함께하는 클래스</Title>
        </ProgramTitle>
      )}
      {classList.map((singleClass: { [key: string]: any }, index: number) => {
        return (
          <div key={index}>
            <ProgramCard
              id={singleClass.id}
              handleCardClick={() => handleCardClick(singleClass.id)}
              programImage={"/images/class/class_04.png" || singleClass.main_image}
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
