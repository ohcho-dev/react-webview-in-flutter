import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRecoilState, useRecoilValue } from 'recoil';
import {
  openCheckChildInfoModalState,
  selectedChildInfoState,
  useShareState,
} from '../../recoil/atom';

import LayoutDetailPage from '../../layouts/LayoutDetailPage';
import DetailClass from './components/DetailClass';
import DetailCoaching from './components/DetailCoaching';
import styled from 'styled-components';
import CustomBottomModal from '../../components/common/CustomBottomModal';
import Button from '../../components/common/Button';

export const PaymentBtnWrap = styled.div`
  width: 100%;
  height: 7.4rem;
  padding: 1.2rem 2rem;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  background: #fff;

  display: flex;
  align-items: center;
`;

const GiftBtn = styled.div`
  min-width: 5rem;
  height: 5rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.4rem;
  margin-right: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3.1rem;
  color: #000000;
  margin-bottom: 0.6rem;
`;
const SubText = styled.h4`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin-bottom: 3rem;
`;
const ChildInfoWrap = styled.div`
  background: #f6f6f6;
  border-radius: 0.8rem;
  padding: 1.5rem 1.6rem;
  margin-bottom: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #000000;

  div {
    margin-left: 0.8rem;
  }
`;

const ProfileImageWrap = styled.div`
  width: 3.2rem;
`;
const BirthDate = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  margin-left: 0.2rem;
`;
const ButtonWrap = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;

    &:first-child {
      background: #ffffff;
      border: 1px solid #a8a8a8;
      color: rgba(0, 0, 0, 0.9);
    }

    &:last-child {
      background: #000000;
      color: rgba(255, 255, 255, 0.9);
      margin-left: 1.1rem;
    }
  }
`;

const ProgramDetailPage = () => {
  const { coachingid, classid } = useParams();
  const [share, setShare] = useRecoilState(useShareState);
  const [applyBtnClick, setApplyBtnClick] = useState(false);

  const [openBottomModal, setOpenBottomModal] = useRecoilState(openCheckChildInfoModalState);
  const selectedChildInfo = useRecoilValue(selectedChildInfoState);

  const handleApplyBtnClick = () => {
    // 코칭 선택시
    if (coachingid) {
      setOpenBottomModal(!openBottomModal);
    }

    // 클래스 선택시
    if (classid) {
      setApplyBtnClick(true);
    }
  };

  const setApplyBtnState = () => {
    setApplyBtnClick(false);
  };

  useEffect(() => {
    setShare(true);
  }, []);

  return (
    <LayoutDetailPage bottomBtn>
      {coachingid && <DetailCoaching />}
      {classid && (
        <DetailClass
          id={classid}
          isApplyBtnClick={applyBtnClick}
          setApplyBtnState={setApplyBtnState}
        />
      )}
      <PaymentBtnWrap>
        {/* <GiftBtn>
          <img src="/images/icon-gift.svg" alt="선물하기" />
        </GiftBtn> */}
        <Button theme={'black'} content={'신청하기'} onClick={handleApplyBtnClick} />
      </PaymentBtnWrap>

      {openBottomModal && (
        <CustomBottomModal
          toggle={openBottomModal}
          handleToggle={() => setOpenBottomModal(!openBottomModal)}
        >
          <TitleText>신청 정보를 확인해 주세요.</TitleText>
          <SubText>아래 정보로 신청하시겠어요?</SubText>
          <ChildInfoWrap>
            <ProfileImageWrap>
              <img src="/images/icon-profile-default.svg" width="100%" />
            </ProfileImageWrap>
            <div>
              {selectedChildInfo.name}
              <BirthDate>({selectedChildInfo.birth_date})</BirthDate>
            </div>
          </ChildInfoWrap>

          <ButtonWrap>
            <div onClick={() => setOpenBottomModal(!openBottomModal)}>취소</div>

            {/* 결제조건 별 로직 필요 1.월령확인  2.구매불가(해당 월령 구매한 동일상품) 3.월령변경구간확인 */}
            <div onClick={() => {}}>신청하기</div>
          </ButtonWrap>
        </CustomBottomModal>
      )}
    </LayoutDetailPage>
  );
};

export default ProgramDetailPage;
