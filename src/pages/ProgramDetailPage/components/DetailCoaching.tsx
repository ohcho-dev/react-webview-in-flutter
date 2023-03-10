import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  applyCoaching,
  checkValidCoachingToApply,
  getSelectedCoachingInfo,
} from "../../../api/programApi";
import Button from "../../../components/common/Button";
import CustomBottomModal from "../../../components/common/CustomBottomModal";
import CustomModal from "../../../components/common/CustomModal";
import { queryKeys } from "../../../constant/queryKeys";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import { openBottomModalState, selectedChildInfoState } from "../../../recoil/atom";
import { getDate } from "../../../utils/getDateTime";
import { getDiscountPercentage } from "../../../utils/getDiscountPercentage";
import { applyCoachingSuccessedAction } from "../../../utils/google-analytics/events/ClickApplyBtn";
import { NativeFunction } from "../../../utils/NativeFunction";
import { ApiErrorResponseType, coachingType } from "../../../utils/type";
import ProgramPrice from "../../ProgramPage/components/ProgramPrice";

interface DetailCoachingProps {
  id: string;
}

const Thumbnail = styled.img`
  width: ${(prop: { image: string }) => (prop.image ? "37.5rem" : "25.9rem")};
  height: ${(prop: { image: string }) => (prop.image ? "25rem" : "9rem")};
`;

const ProductMainInfo = styled.div`
  position: relative;
  padding: 2.5rem 0;
  margin: 0 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const ProductDetailInfoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;

  img {
    width: 33.5rem;
    height: 17.5rem;
  }
`;

const GreySquare = styled.div`
  width: 100%;
  height: 1rem;

  margin: 4rem 0;
  background-color: #f6f6f6;
`;

const ProductName = styled.h1`
  margin: 0 0.5rem 1rem;

  font-weight: 500;
  font-size: 2rem;
  line-height: 2rem;
  color: #000000;
`;

const PriceWrap = styled.div`
  margin: 0 0.5rem;
`;

// const Favorites = styled.div`
//   position: absolute;
//   top: 5rem;
//   right: 0;
//   width: 2.8rem;
// `;

const ImageWrap = styled.div`
  width: 100%;
  margin: 0 auto;
`;

// const GiftBtn = styled.div`
//   min-width: 5rem;
//   height: 5rem;
//   border: 1px solid rgba(0, 0, 0, 0.15);
//   border-radius: 0.4rem;
//   margin-right: 1.2rem;

//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

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

const DetailCoaching = (props: DetailCoachingProps): JSX.Element => {
  const navigate = useNavigate();
  const { id } = props;
  const [leftDays, setLeftDays] = useState<number>(0);
  const [openBottomModal, setOpenBottomModal] = useRecoilState(openBottomModalState);
  const [openSameCoachingModal, setOpenSameCoachingModal] = useState(false);
  const [openCheckUsageDuration, setOpenUsageDuration] = useState(false);
  const selectedChildInfo = useRecoilValue(selectedChildInfoState);
  const [coachingInfo, setCoachingInfo] = useState<coachingType>({
    base_price: 0,
    code: "",
    content_image: "",
    counsel_flag: 0,
    created_at: "",
    display_flag: 0,
    id: 0,
    main_image: "",
    name: "",
    price: 0,
    updated_at: "",
    valid_day: 0,
  });
  const { data: selectedCoachingInfo } = useQuery(queryKeys.selectedCoacingInfo, () =>
    getSelectedCoachingInfo(id),
  );
  const { data: res } = useQuery<ApiErrorResponseType>(queryKeys.checkValidCoachingToApply, () =>
    checkValidCoachingToApply(id),
  );
  const callApplyCoaching = useMutation(applyCoaching, {
    onSuccess: res => {
      NativeFunction("ga4logNativeEventLog", `${applyCoachingSuccessedAction}`);
      setOpenBottomModal(!openBottomModal);
      navigate("/program/class/apply-coaching/success", {
        state: { id: res.purchase_id },
        replace: true,
      });
    },
    onError: error => {
      throw error;
    },
  });

  useEffect(() => {
    if (selectedCoachingInfo.length) {
      setCoachingInfo(selectedCoachingInfo[0]);
    }
  }, [selectedCoachingInfo]);

  const handleApplyBtnClick = () => {
    if (res?.message === "OK") {
      callApplyCoaching.mutate({ id: coachingInfo.id.toString() });
    } else {
      if (res?.code === "ONGOING_COACHING") {
        // 1.구매불가(해당 월령 구매한 동일상품)
        setOpenSameCoachingModal(true);
      } else if (res?.code === "ALMOST_MONTH_LIMIT") {
        // 2.경고(월령 변경까지 얼마 남지 않음)
        setOpenUsageDuration(true);
        setLeftDays(res?.detail?.left_days || 0);
      }
    }
  };

  const handleUsageDurationModalBtnClick = () => {
    setOpenUsageDuration(false);
    setOpenBottomModal(false);
  };

  return (
    <>
      <LayoutDetailPage
        bottomScrollAnimationEffect={true}
        titleBarBorder={true}
        bottomBtn
        bottomBtnElement={
          <Button theme={"black"} content={"신청하기"} onClick={() => setOpenBottomModal(true)} />
        }
      >
        <div>
          {coachingInfo.main_image && (
            <Thumbnail
              alt="thumnail"
              src={coachingInfo.main_image}
              image={coachingInfo.main_image}
            />
          )}
          <ProductMainInfo>
            <ProductName>{coachingInfo?.name}</ProductName>
            <PriceWrap>
              <ProgramPrice
                discountPercentage={getDiscountPercentage(
                  coachingInfo.base_price,
                  coachingInfo.price,
                )}
                originalPrice={coachingInfo.base_price ? coachingInfo.base_price : 0}
                price={coachingInfo?.price ? coachingInfo.price : 0}
              />
            </PriceWrap>
            {/* TODO: 즐겨찾기기능 구현하기 */}
            {/* <Favorites onClick={() => setFavorites(!favorites)}>
              <img
                src={favorites ? "/images/icon-favorites-on.svg" : "/images/icon-favorites-off.svg"}
                alt="즐겨찾기"
              />
            </Favorites> */}
          </ProductMainInfo>
          <ProductDetailInfoSection>
            <img alt="detail info" src="/images/coaching-detail-info.png" />
          </ProductDetailInfoSection>
          <GreySquare />
          <ImageWrap>
            <img
              src={selectedCoachingInfo[0].content_image}
              width="100%"
              alt="coaching content"
              loading="lazy"
            />
          </ImageWrap>
        </div>
      </LayoutDetailPage>
      <CustomBottomModal
        toggle={openBottomModal}
        handleToggle={() => setOpenBottomModal(!openBottomModal)}
      >
        <TitleText>신청 정보를 확인해 주세요.</TitleText>
        <SubText>아래 정보로 신청하시겠어요?</SubText>
        <ChildInfoWrap>
          <ProfileImageWrap>
            <img src="/images/icon-profile-default.svg" width="100%" alt="profile icon" />
          </ProfileImageWrap>
          <div>
            {selectedChildInfo.name}
            <BirthDate>({getDate(selectedChildInfo.birth_date)})</BirthDate>
          </div>
        </ChildInfoWrap>
        <ButtonWrap>
          <Button theme="white" onClick={() => setOpenBottomModal(false)} content={"취소"} />
          <Button theme="black" content="신청하기" onClick={handleApplyBtnClick} />
        </ButtonWrap>
      </CustomBottomModal>
      <CustomModal
        cancelbtn={false}
        title="진행 중인 코칭이 있어요!"
        content="동일한 코칭은 동시에 진행할 수 없어요. 진행 중인 코칭 완료 후 다음 월령에 다시 신청해주세요."
        isOpen={openSameCoachingModal}
        toggleModal={() => {
          setOpenBottomModal(!openBottomModal);
          setOpenSameCoachingModal(!openSameCoachingModal);
        }}
      />
      <CustomModal
        cancelbtn={false}
        topImage={<img alt="warning icon" src="/images/icon-alert.svg" />}
        title="이용기간을 확인해주세요!"
        contentMarkup={
          <div style={{ lineHeight: "2.2rem" }}>
            {`${leftDays}일 내에 아이 검사 월령 구간이 변경됩니다. 지금 신청하시는 경우, 코칭 종료 전 월령이
            변경되더라도 신청 지점 월령을 기준으로 결과지가 작성됩니다. 위의 내용에 동의하신다면
            신청을 선택해주세요.`}
          </div>
        }
        isOpen={openCheckUsageDuration}
        toggleModal={() => setOpenUsageDuration(!openCheckUsageDuration)}
        okBtnClick={() => callApplyCoaching.mutate({ id: coachingInfo.id.toString() })}
        cancelBtnClick={handleUsageDurationModalBtnClick}
        cancelBtnName="취소"
        okBtnName="신청하기"
      />
    </>
  );
};

export default DetailCoaching;
