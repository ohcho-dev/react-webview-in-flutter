import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getSelectedClassInfo } from "../../../api/programApi";
import CustomModal from "../../../components/common/CustomModal";
import { queryKeys } from "../../../constant/queryKeys";
import { commonCodeState } from "../../../recoil/atom";
import { getDateTime } from "../../../utils/getDateTime";
import { getDiscountPercentage } from "../../../utils/getDiscountPercentage";
import { getMonthLevelString } from "../../../utils/getMonthLevelString";
import ProgramPrice from "../../ProgramPage/components/ProgramPrice";
import { AgeRange, OnlineOffline } from "../../ProgramPage/components/styled";

interface DetailClassProps {
  id: string;
  isApplyBtnClick: boolean;
  setApplyBtnState: () => void;
}

const ClassWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;

  img {
    width: 37.5rem;
    height: 25rem;
  }
`;

const ClassInfoWrapper = styled.div`
  padding: 2.5rem;
`;

const ClassInfo = styled.div`
  display: flex;
  margin: 0 0 1rem 0;
  align-items: center;
`;

const ClassTitle = styled.div`
  font-weight: 500;
  font-size: 2rem;
`;

const ClassSubSection = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  color: rgba(10, 10, 10, 0.8);

  margin: 1rem 0;
`;

const Divider = styled.div`
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
  padding: 0 2.5rem;
`;

const DetailClass: React.FC<DetailClassProps> = props => {
  const navigate = useNavigate();
  const { id, isApplyBtnClick, setApplyBtnState } = props;
  const [openInformForPaymentModal, setOpenInformForPaymentModal] = useState(false);
  const { data: selectedClassInfo } = useQuery(queryKeys.selectedClassInfo, () =>
    getSelectedClassInfo(id),
  );
  const commonCodeList = useRecoilValue<{ [key: string]: any }>(commonCodeState);

  const toggleInformPaymentModal = () => {
    setOpenInformForPaymentModal(!openInformForPaymentModal);
  };

  useEffect(() => {
    if (isApplyBtnClick) {
      navigate(`/program/class/apply-class/${id}`);
    }
  }, [isApplyBtnClick]);

  useEffect(() => {
    if (!openInformForPaymentModal) setApplyBtnState();
  }, [openInformForPaymentModal]);

  return (
    <>
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
      {/* <CustomModal
        isOpen={openInformForPaymentModal}
        toggleModal={toggleInformPaymentModal}
        title="현장 결제 프로그램입니다."
        content="신청 시 예약만 진행됩니다."
      /> */}
    </>
  );
};

export default DetailClass;
