import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRecoilState, useRecoilValue } from "recoil";
import { openBottomModalState, selectedChildInfoState, useShareState } from "../../recoil/atom";

import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import DetailClass from "./components/DetailClass";
import DetailCoaching from "./components/DetailCoaching";
import styled from "styled-components";
import CustomBottomModal from "../../components/common/CustomBottomModal";
import Button from "../../components/common/Button";
import { BottomBtnWrap } from "../ProgramPage/components/styled";
import LoadingSpinner from "../../components/common/LoadingSpinner";

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
  column-gap: 1rem;
`;

const ProgramDetailPage = () => {
  const navigate = useNavigate();
  const { coachingid, classid } = useParams();
  const [share, setShare] = useRecoilState(useShareState);
  const [applyBtnClick, setApplyBtnClick] = useState(false);

  const [openBottomModal, setOpenBottomModal] = useRecoilState(openBottomModalState);
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
      <Suspense fallback={<LoadingSpinner />}>{coachingid && <DetailCoaching />}</Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        {classid && (
          <DetailClass
            id={classid}
            isApplyBtnClick={applyBtnClick}
            setApplyBtnState={setApplyBtnState}
          />
        )}
      </Suspense>
      <BottomBtnWrap>
        {/* <GiftBtn>
          <img src="/images/icon-gift.svg" alt="선물하기" />
        </GiftBtn> */}
        <Button theme={"black"} content={"신청하기"} onClick={handleApplyBtnClick} />
      </BottomBtnWrap>

      <CustomBottomModal toggle={openBottomModal} handleToggle={handleApplyBtnClick}>
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
          <Button
            theme="white"
            onClick={() => {
              handleApplyBtnClick();
              navigate(-1);
            }}
            content={"취소"}
          />

          {/* 결제조건 별 로직 필요 1.월령확인  2.구매불가(해당 월령 구매한 동일상품) 3.월령변경구간확인 */}
          <Button theme="black" content="신청하기" onClick={() => {}} />
        </ButtonWrap>
      </CustomBottomModal>
    </LayoutDetailPage>
  );
};

export default ProgramDetailPage;
