import { useNavigate, useParams } from "react-router-dom";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import Button from "../../../components/common/Button";
import styled from "styled-components";
import UseImgix from "../../../components/common/Imgix";
import Accordion from "../../../components/common/Accordion";
import { useQuery } from "react-query";
import { queryKeys } from "../../../constant/queryKeys";
import { getSelectedCoachingInfo } from "../../../apis/programApi";
import { useRecoilValue } from "recoil";
import { selectedChildInfoState } from "../../../store/atom";
import getGender from "../../../utils/user/getGender";
import { RefObject, useRef, useState } from "react";
import CustomModal from "../../../components/common/CustomModal";
import { NativeFunction } from "../../../utils/app/NativeFunction";
import { ApplyCoachingBodyType } from "../../../types/apis/program";

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

const Base = styled.div`
  background: white;
  width: 100%;

  padding: 2.5rem;
  margin-bottom: 1rem;
`;

const USER_SECTION_HEIGHT = 37;
const UserSection = styled(Base)`
  height: ${USER_SECTION_HEIGHT}rem;
`;

const ProductWrap = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;

const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 10rem auto;
  width: 100%;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-bottom: 0.8rem;
`;

const Label = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.5);
`;

const Value = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

const TotalLabel = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;

const TotalValue = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;

const ChildInfo = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.5);
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
const ProductInfoWrap = styled.div`
  margin-top: 1rem;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const InputTitle = styled.div`
  margin-bottom: 1rem;

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 25px;

  color: rgba(10, 10, 10, 0.8);
`;

const InputBox = styled.input`
  width: 100%;
  border: none;

  font-weight: 500;
  font-size: 18px;
  line-height: 25px;

  color: rgba(0, 0, 0, 0.8);

  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  :focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
  margin: 2rem 0;
`;
const TotalPrice = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PayAgreement = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin: 2rem;
`;

const ApplyCoachingPayment = () => {
  const navigate = useNavigate();
  const { coachingid } = useParams();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneNumberInputRef = useRef<HTMLInputElement>(null);
  const selectedChild = useRecoilValue(selectedChildInfoState);
  const [openValidationModal, setOpenValidationModal] = useState<boolean>(false);
  const { data: selectedCoachingInfo } = useQuery(queryKeys.selectedCoacingInfo, () =>
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
        <ProductWrap>
          <ProductContent>
            <ThumbnailWrapper>
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
            </ThumbnailWrapper>
            <div>
              <Title>{selectedCoachingInfo[0].name}</Title>
              <ChildInfo>
                신청 아이 : {selectedChild.name} ({getGender(selectedChild.gender)})
              </ChildInfo>
              <ProductInfoWrap>
                <FlexBox>
                  <Label>상품금액</Label>
                  <Value>{selectedCoachingInfo[0].base_price.toLocaleString("ko-KR")} 원</Value>
                </FlexBox>
                <FlexBox>
                  <Label>상품할인</Label>
                  <Value>
                    {(
                      selectedCoachingInfo[0].base_price - selectedCoachingInfo[0].price
                    ).toLocaleString("ko-KR")}{" "}
                    원
                  </Value>
                </FlexBox>
                <FlexBox>
                  <Label>쿠폰할인</Label>
                  <Value>없음</Value>
                </FlexBox>
              </ProductInfoWrap>
            </div>
          </ProductContent>
        </ProductWrap>
      </Accordion>
      <Accordion title="주문자">
        <InputTitle ref={nameInputRef}>이름</InputTitle>
        <InputBox
          onFocus={() => handleFocusInput(nameInputRef)}
          placeholder="이름을 입력해주세요."
          id="parentName"
          maxLength={30}
          value={requiredInfo.parent_name || ""}
          onChange={handleTypeInformation}
        />
        <InputTitle ref={phoneNumberInputRef}>휴대전화 번호</InputTitle>
        <InputBox
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
        <ProductInfoWrap>
          <FlexBox>
            <Label>상품합계</Label>
            <Value>{selectedCoachingInfo[0].base_price.toLocaleString("ko-KR")} 원</Value>
          </FlexBox>
          <FlexBox>
            <Label>상품할인</Label>
            <Value>
              {(selectedCoachingInfo[0].base_price - selectedCoachingInfo[0].price).toLocaleString(
                "ko-KR",
              )}{" "}
              원
            </Value>
          </FlexBox>
        </ProductInfoWrap>
        <Divider />
        <TotalPrice>
          <TotalLabel>총 결제금액</TotalLabel>
          <TotalValue>{selectedCoachingInfo[0].price.toLocaleString("ko-KR")} 원</TotalValue>
        </TotalPrice>
      </Accordion>
      <PayAgreement>주문 내용을 확인하였으며, 약관 및 개인정보제공에 동의합니다.</PayAgreement>
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
