import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getSelectedClassInfo } from "../../../api/programApi";
import Button from "../../../components/common/Button";
import { queryKeys } from "../../../constant/queryKeys";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import { commonCodeState } from "../../../recoil/atom";
import { getDateTime } from "../../../utils/getDateTime";
import { getDiscountPercentage } from "../../../utils/getDiscountPercentage";
import { getMonthLevelString } from "../../../utils/getMonthLevelString";
import ProgramPrice from "../../ProgramPage/components/ProgramPrice";
import { AgeRange, OnlineOffline } from "../../ProgramPage/components/styled";

interface DetailClassProps {
  id: string;
}

const ClassWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;

  img {
    width: 37.5rem;
  }
`;

const ClassInfoWrapper = styled.div`
  padding: 2.5rem;
`;

const ClassInfo = styled.div`
  display: flex;
  margin: 0 0 0.8rem 0;
  align-items: center;
`;

const ClassTitle = styled.div`
  font-weight: 500;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.04rem;
  color: #000000;
`;

const ClassSubSection = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin-bottom: 0.5rem;
`;

const Divider = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  padding: 0 2.5rem;
  margin: 0 2rem;
`;

const DetailClass: React.FC<DetailClassProps> = props => {
  const navigate = useNavigate();
  const { id } = props;
  const { data: selectedClassInfo } = useQuery(queryKeys.selectedClassInfo, () =>
    getSelectedClassInfo(id),
  );
  const commonCodeList = useRecoilValue<{ [key: string]: any }>(commonCodeState);

  return (
    <LayoutDetailPage
      programDetailPage={true}
      handleBackBtnClick={() => navigate("/program")}
      titleBarBorder={true}
      bottomBtn
      bottomBtnElement={
        <>
          {/* <GiftBtn>
          <img src="/images/icon-gift.svg" alt="선물하기" />
        </GiftBtn> */}
          <Button
            theme={"black"}
            content={"신청하기"}
            onClick={() => navigate(`/program/class/apply-class/${id}`)}
          />
        </>
      }
    >
      <ClassWrapper>
        <img alt="class image" src={selectedClassInfo.main_image} />
        <ClassInfoWrapper>
          <ClassInfo>
            <OnlineOffline>{commonCodeList[selectedClassInfo.place_type]}</OnlineOffline>
            <AgeRange>{getMonthLevelString(selectedClassInfo.month_level)}</AgeRange>
          </ClassInfo>
          <ClassTitle>{selectedClassInfo.name}</ClassTitle>
          <ClassSubSection>
            {selectedClassInfo.place_type === "CLPLT_ONLINE"
              ? getDateTime(selectedClassInfo.class_datetime)
              : selectedClassInfo.location}
          </ClassSubSection>
          <ProgramPrice
            discountPercentage={getDiscountPercentage(
              selectedClassInfo.base_price,
              selectedClassInfo.price,
            )}
            price={selectedClassInfo.price}
            originalPrice={selectedClassInfo.base_price}
            perNum={selectedClassInfo.total_session}
          />
        </ClassInfoWrapper>
        <Divider />
        {selectedClassInfo.content_image && (
          <img alt="content image" src={selectedClassInfo.content_image} />
        )}
      </ClassWrapper>
    </LayoutDetailPage>
  );
};

export default DetailClass;
