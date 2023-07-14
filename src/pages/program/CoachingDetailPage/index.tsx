import NoImage from "components/domain/program/NoMainImage";
import useApplyCoaching from "queries/domain/program/useApplyCoaching";
import useCheckValidCoachingToApply from "queries/domain/program/useCheckValidCoachingToApply";
import useSelectedCoachingInfo from "queries/domain/program/useSelectedCoachingInfo";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "../../../components/common/Button";
import CustomBottomModal from "../../../components/common/CustomBottomModal";
import CustomModal from "../../../components/common/CustomModal";
import UseImgix from "../../../components/common/Imgix";
import ProgramPrice from "../../../components/domain/program/programListPage/ProgramPrice";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import { openBottomModalState, selectedChildInfoState } from "../../../store/common";
import { coachingType } from "../../../types/domain/coaching";
import { getDate } from "../../../utils/date/getDateTime";
import { getDiscountPercentage } from "../../../utils/program/getDiscountPercentage";
import * as S from "./coachingDetailPage.styled";

interface DetailCoachingProps {
  id: string;
}

const CoachingDetailPage = ({ id }: DetailCoachingProps): JSX.Element => {
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
  const { data: selectedCoachingInfo } = useSelectedCoachingInfo(id);
  const { data: validCoaching } = useCheckValidCoachingToApply(id);
  const { mutate: applyCoaching } = useApplyCoaching(setOpenBottomModal);

  useEffect(() => {
    if (selectedCoachingInfo.length) {
      setCoachingInfo(selectedCoachingInfo[0]);
    }
  }, [selectedCoachingInfo]);

  const handleApplyBtnClick = () => {
    if (validCoaching?.message === "OK") {
      // 추후 결제 연동
      // const { id } = coachingInfo;
      // navigate(`/program/coaching/${id}/payment`);
      applyCoaching(coachingInfo.id.toString());
    } else {
      if (validCoaching?.code === "ONGOING_COACHING") {
        // 1.구매불가(해당 월령 구매한 동일상품)
        setOpenSameCoachingModal(true);
      } else if (validCoaching?.code === "ALMOST_MONTH_LIMIT") {
        // 2.경고(월령 변경까지 얼마 남지 않음)
        setOpenUsageDuration(true);
        setLeftDays(validCoaching?.detail?.left_days || 0);
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
          {coachingInfo.main_image ? (
            <S.Thumbnail src={coachingInfo.main_image} alt="main" />
          ) : (
            <NoImage />
          )}
          <S.ProductMainInfo>
            <S.ProductName>{coachingInfo.name}</S.ProductName>
            <S.PriceWrap>
              <ProgramPrice
                discountPercentage={getDiscountPercentage(
                  coachingInfo.base_price,
                  coachingInfo.price,
                )}
                originalPrice={coachingInfo.base_price ? coachingInfo.base_price : 0}
                price={coachingInfo?.price ? coachingInfo.price : 0}
              />
            </S.PriceWrap>
            {/* TODO: 즐겨찾기기능 구현하기 */}
            {/* <Favorites onClick={() => setFavorites(!favorites)}>
              <UseImgix
                srcUrl={favorites ? "/images/icon-favorites-on.svg" : "/images/icon-favorites-off.svg"}
                alt="즐겨찾기"
              />
            </Favorites> */}
          </S.ProductMainInfo>
          <S.ProductDetailInfoSection>
            <UseImgix
              srcUrl="/images/coaching/coaching-detail-info.png"
              alt="Coaching Detail Info"
            />
          </S.ProductDetailInfoSection>
          <S.GreySquare />
          <img src={coachingInfo.content_image} alt="content" style={{ width: "100%" }} />
          {/* <S.ImageWrap>
            <UseImgix
              srcUrl="/images/coaching/coaching_new_main_0220_01.png"
              alt="Coaching Detail Page 1"
            />
            <UseImgix
              srcUrl="/images/coaching/coaching_new_main_0220_02.png"
              alt="Coaching Detail Page 2"
            />
            <UseImgix
              srcUrl="/images/coaching/coaching_new_main_0220_03.png"
              alt="Coaching Detail Page 3"
            />
            <UseImgix
              srcUrl="/images/coaching/coaching_new_main_0220_04.png"
              alt="Coaching Detail Page 4"
            />
            <UseImgix
              srcUrl="/images/coaching/coaching_new_main_0220_05.png"
              alt="Coaching Detail Page 5"
            />
          </S.ImageWrap> */}
        </div>
      </LayoutDetailPage>
      <CustomBottomModal
        toggle={openBottomModal}
        handleToggle={() => setOpenBottomModal(!openBottomModal)}
      >
        <S.TitleText>신청 정보를 확인해 주세요.</S.TitleText>
        <S.SubText>아래 정보로 신청하시겠어요?</S.SubText>
        <S.ChildInfoWrap>
          <S.ProfileImageWrap>
            <UseImgix srcUrl="/images/icon-profile-default.svg" alt="profile icon" />
          </S.ProfileImageWrap>
          <div>
            {selectedChildInfo.name}
            <S.ChildInfo>({getDate(selectedChildInfo.birth_date)})</S.ChildInfo>
            <S.ChildInfo>{selectedChildInfo.gender === "M" ? "남아" : "여아"}</S.ChildInfo>
          </div>
        </S.ChildInfoWrap>
        <S.ButtonWrap>
          <Button theme="white" onClick={() => setOpenBottomModal(false)} content={"취소"} />
          <Button theme="black" content="신청하기" onClick={handleApplyBtnClick} />
        </S.ButtonWrap>
      </CustomBottomModal>
      <CustomModal
        cancelBtn={false}
        title="진행 중인 코칭이 있어요!"
        content="동일한 코칭은 동시에 진행할 수 없어요. 진행 중인 코칭 완료 후 다음 월령에 다시 신청해주세요."
        isOpen={openSameCoachingModal}
        toggleModal={() => {
          setOpenBottomModal(!openBottomModal);
          setOpenSameCoachingModal(!openSameCoachingModal);
        }}
      />
      <CustomModal
        cancelBtn={false}
        topImage={<UseImgix alt="warning icon" srcUrl="/images/icon-alert.svg" />}
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
        okBtnClick={() => applyCoaching(coachingInfo.id.toString())}
        cancelBtnClick={handleUsageDurationModalBtnClick}
        cancelBtnName="취소"
        okBtnName="신청하기"
      />
    </>
  );
};

export default CoachingDetailPage;
