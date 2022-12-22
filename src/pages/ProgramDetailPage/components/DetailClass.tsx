import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomModal from '../../../components/common/CustomModal';
import ProgramPrice from '../../ProgramPage/components/ProgramPrice';
import { AgeRange, OnlineOffline } from '../../ProgramPage/components/styled';

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
  const [classInfo, setClassInfo] = useState({
    isOnline: true,
    ageRange: '12~15개월',
    title: '[모집10명] 아빠랑 같이 하는 모래놀이 클래스',
    location: '서울 송파구 어린이 문화회관',
    price: 70000,
    originalPrice: 150000,
    discountPercentage: 53,
    perNum: '1회당',
    dateTime: '2022.11.22(화) 21:00',
  });
  const [openInformForPaymentModal, setOpenInformForPaymentModal] = useState(false);

  const toggleInformPaymentModal = () => {
    setOpenInformForPaymentModal(!openInformForPaymentModal);
  };

  useEffect(() => {
    if (!classInfo.isOnline && isApplyBtnClick) {
      toggleInformPaymentModal();
    } else if (classInfo.isOnline && isApplyBtnClick) {
      navigate(`/program/class/apply-class/${id}`);
    }
  }, [isApplyBtnClick]);

  useEffect(() => {
    if (!openInformForPaymentModal) setApplyBtnState();
  }, [openInformForPaymentModal]);

  return (
    <>
      <ClassWrapper>
        <img alt="class image" src="/images/class-img.png" />
        <ClassInfoWrapper>
          <ClassInfo>
            <OnlineOffline>{classInfo.isOnline ? '온라인' : '오프라인'}</OnlineOffline>
            <AgeRange>{classInfo.ageRange}</AgeRange>
          </ClassInfo>
          <ClassTitle>{classInfo.title}</ClassTitle>
          <ClassSubSection>
            {classInfo.isOnline ? classInfo.dateTime : classInfo.location}
          </ClassSubSection>
          <ProgramPrice
            price={classInfo.price}
            discountPercentage={classInfo.discountPercentage}
            originalPrice={classInfo.originalPrice}
            perNum={'1회당'}
          />
        </ClassInfoWrapper>
        <Divider />
      </ClassWrapper>
      <CustomModal
        isOpen={openInformForPaymentModal}
        toggleModal={toggleInformPaymentModal}
        title="현장 결제 프로그램입니다."
        content="신청 시 예약만 진행됩니다."
      />
    </>
  );
};

export default DetailClass;
