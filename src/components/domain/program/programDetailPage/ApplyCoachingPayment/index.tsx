import { useNavigate, useParams } from "react-router-dom";
import LayoutDetailPage from "../../../../../layouts/LayoutDetailPage";
import Button from "../../../../common/Button";

import UseImgix from "../../../../common/Imgix";
import Accordion from "../../../../common/Accordion";
import { useQuery } from "react-query";
import { getSelectedCoachingInfo } from "../../../../../queries/domain/program/programApi";
import { useRecoilValue } from "recoil";
import getGender from "../../../../../utils/user/getGender";
import { RefObject, useRef, useState } from "react";
import CustomModal from "../../../../common/CustomModal";
import { NativeFunction } from "../../../../../utils/app/NativeFunction";
import { ApplyCoachingBodyType } from "../../../../../types/apis/program";
import { selectedChildInfoState } from "../../../../../store/common";
import { programQueryKeys } from "../../../../../queries/domain/program/programQueryKeys";
import * as S from "./ApplyCoachingPayment.styled";

// interface TypeProps {
//   name: string;
//   value: any;
// }
// const PaymentMethods: TypeProps[] = [
//   { name: "신용카드", value: "credit" },
//   { name: "네이버페이", value: "naver" },
//   { name: "카카오페이", value: "kakao" },
// ];
// const DEFAULT_PaymentMethods = { name: "신용카드", value: "credit" };

const ApplyCoachingPayment = () => {
  const navigate = useNavigate();
  const { coachingid } = useParams();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);
  const selectedChild = useRecoilValue(selectedChildInfoState);
  const [openValidationModal, setOpenValidationModal] = useState<boolean>(false);
  const { data: selectedCoachingInfo } = useQuery(programQueryKeys.selectedCoacingInfo, () =>
    getSelectedCoachingInfo(coachingid),
  );

  const [requiredInfo, setRequiredInfo] = useState<ApplyCoachingBodyType>({
    coaching_id: "",
    child_id: "",
    parent_name: "",
    parent_phone: "",
    payment_method: "credit",
  });

  const handleFocusInput = (ref: RefObject<HTMLInputElement>) => {
    document.getElementById("main")?.scrollTo();
  };

  const handleTypeInformation = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const id = evt.target.id;
    const value = evt.target.value;
    const maxLength = evt.target.maxLength;
    console.log(value);
    // 최대 글자 수 제한
    if (maxLength && maxLength < value.length) return;

    if (id === "parentName") {
      setRequiredInfo({ ...requiredInfo, parent_name: value });
    } else if (id === "parentPhoneNumber") {
      setRequiredInfo({ ...requiredInfo, parent_phone: value });
    }
  };
  console.log(requiredInfo.parent_name);

  const handleApplyBtnClick = () => {
    const { parent_name, parent_phone, payment_method } = requiredInfo;
    if (parent_name && parent_phone && payment_method && coachingid && selectedChild.id) {
      NativeFunction(
        "routeNativeScreen",
        `payment@${selectedCoachingInfo[0].price.toString()}@${parent_name}@${parent_phone}`,
      );
    } else {
      setOpenValidationModal(true);
    }
  };
  return (
    <LayoutDetailPage
      bottomBtn
      titleBarBorder
      bottomBtnElement={
        <Button
          theme={"black"}
          content={`${selectedCoachingInfo[0].price.toLocaleString("ko-KR")}원 결제하기`}
          onClick={() => handleApplyBtnClick()}
        />
      }
      title="주문서"
    >
      <Accordion title="주문상품">
        <S.ProductWrap>
          <S.ProductContent>
            <S.ThumbnailWrapper>
              <UseImgix
                srcUrl="/images/coaching/coaching_new_main_0207.png"
                alt="Coaching Thumbnail"
                style={{
                  width: "8.5rem",
                  height: "7rem",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                }}
              />
            </S.ThumbnailWrapper>
            <div>
              <S.Title>{selectedCoachingInfo[0].name}</S.Title>
              <S.ChildInfo>
                신청 아이 : {selectedChild.name} ({getGender(selectedChild.gender)})
              </S.ChildInfo>
              <S.ProductInfoWrap>
                <S.FlexBox>
                  <S.Label>상품금액</S.Label>
                  <S.Value>{selectedCoachingInfo[0].base_price.toLocaleString("ko-KR")} 원</S.Value>
                </S.FlexBox>
                <S.FlexBox>
                  <S.Label>상품할인</S.Label>
                  <S.Value>
                    {(
                      selectedCoachingInfo[0].base_price - selectedCoachingInfo[0].price
                    ).toLocaleString("ko-KR")}{" "}
                    원
                  </S.Value>
                </S.FlexBox>
                <S.FlexBox>
                  <S.Label>쿠폰할인</S.Label>
                  <S.Value>없음</S.Value>
                </S.FlexBox>
              </S.ProductInfoWrap>
            </div>
          </S.ProductContent>
        </S.ProductWrap>
      </Accordion>
      <Accordion title="주문자">
        <S.InputTitle ref={nameInputRef}>이름</S.InputTitle>
        <S.InputBox
          onFocus={() => handleFocusInput(nameInputRef)}
          placeholder="이름을 입력해주세요."
          id="parentName"
          maxLength={30}
          value={requiredInfo.parent_name || ""}
          onChange={handleTypeInformation}
        />
        <S.InputTitle ref={phoneNumberInputRef}>휴대전화 번호</S.InputTitle>
        <S.InputBox
          onFocus={() => handleFocusInput(phoneNumberInputRef)}
          placeholder="번호를 입력해주세요."
          type={"number"}
          id="parentPhoneNumber"
          pattern="[0-9]*"
          maxLength={11}
          value={requiredInfo.parent_phone || ""}
          onChange={handleTypeInformation}
        />
      </Accordion>
      {/* <Accordion title="결제수단">
        <CustomRadioButton
          id="paymentMethod"
          type={PaymentMethods}
          defaultValue={DEFAULT_PaymentMethods}
          onChangeFunction={(e: React.ChangeEvent<HTMLInputElement>) => {
            setRequiredInfo({ ...requiredInfo, payment_method: e.target.value });
          }}
        />
      </Accordion> */}
      <Accordion title="결제 정보">
        <S.ProductInfoWrap>
          <S.FlexBox>
            <S.Label>상품합계</S.Label>
            <S.Value>{selectedCoachingInfo[0].base_price.toLocaleString("ko-KR")} 원</S.Value>
          </S.FlexBox>
          <S.FlexBox>
            <S.Label>상품할인</S.Label>
            <S.Value>
              {(selectedCoachingInfo[0].base_price - selectedCoachingInfo[0].price).toLocaleString(
                "ko-KR",
              )}{" "}
              원
            </S.Value>
          </S.FlexBox>
        </S.ProductInfoWrap>
        <S.Divider />
        <S.TotalPrice>
          <S.TotalLabel>총 결제금액</S.TotalLabel>
          <S.TotalValue>{selectedCoachingInfo[0].price.toLocaleString("ko-KR")} 원</S.TotalValue>
        </S.TotalPrice>
      </Accordion>
      <S.PayAgreement>주문 내용을 확인하였으며, 약관 및 개인정보제공에 동의합니다.</S.PayAgreement>
      <CustomModal
        cancelbtn={false}
        title="필수 정보를 모두 입력해주세요."
        content="필수 정보를 모두 입력해야 신청이 가능해요."
        isOpen={openValidationModal}
        toggleModal={() => setOpenValidationModal(!openValidationModal)}
      />
    </LayoutDetailPage>
  );
};

export default ApplyCoachingPayment;
