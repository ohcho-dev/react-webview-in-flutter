import UseImgix from "components/common/Imgix";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import * as S from "./Coupon.styled";
import CouponItem from "components/domain/my/CouponItem";
import Button from "components/common/Button";
import EmptyBox from "components/common/EmptyBox";
import Text from "components/common/Text";
import {
  ColorLightBlack12,
  ColorLightBlack7,
  ColorLightBlack9Base,
  ColorLightSlate3,
  ContentsXxl2232Semibold,
  TextLg1826Medium,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import CustomModal from "components/common/CustomModal";
import NameInput from "components/domain/my/ModalInput";

const Coupon = () => {
  const navigate = useNavigate();
  const [couponValue, setCouponValue] = useState("");
  const [openRegistModal, setOpenRegistModal] = useState<boolean>(false);
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [openRejectModal, setOpenRejectModal] = useState<boolean>(true);

  return (
    <LayoutDetailPage
      bottomBtn
      bottomBtnElement={
        <Button theme={"black"} content={"+ 쿠폰 등록"} onClick={() => setOpenRegistModal(true)} />
      }
    >
      <EmptyBox height="0.8rem" />
      <Text
        variant={ContentsXxl2232Semibold}
        color={ColorLightBlack9Base}
        style={{ padding: "0 2.5rem" }}
      >
        쿠폰
      </Text>
      <EmptyBox height="1.6rem" />

      {/* <S.ListNone>
        <S.ImageWrap>
          <UseImgix srcUrl="/images/common/charactor_empty.svg" />
        </S.ImageWrap>
        <Text
          variant={TextLg1826Medium}
          color={ColorLightBlack12}
          style={{ display: "block", textAlign: "center" }}
        >
          사용 가능한 쿠폰이 없어요.
        </Text>
      </S.ListNone> */}

      <S.Container>
        <CouponItem
          item={{
            title: "3000원",
            desc: "신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰",
            date: "~2023.06.31까지",
          }}
        />
        <CouponItem
          item={{
            title: "3000원",
            desc: "신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰",
            date: "~2023.06.31까지",
          }}
        />
        <CouponItem
          item={{
            title: "3000원",
            desc: "신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰",
            date: "~2023.06.31까지",
          }}
        />
        <CouponItem
          item={{
            title: "3000원",
            desc: "신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰",
            date: "~2023.06.31까지",
          }}
        />
        <CouponItem
          item={{
            title: "3000원",
            desc: "신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰",
            date: "~2023.06.31까지",
          }}
        />
        <CouponItem
          item={{
            title: "3000원",
            desc: "신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰",
            date: "~2023.06.31까지",
          }}
        />
        <CouponItem
          item={{
            title: "3000원",
            desc: "신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰 신규 가입 축하 할인 쿠폰",
            date: "~2023.06.31까지",
          }}
        />
      </S.Container>

      <CustomModal
        isOpen={openRegistModal}
        toggleModal={() => setOpenRegistModal(false)}
        title="쿠폰 등록"
        cancelBtn
        cancelBtnName="취소"
        cancelBtnClick={() => setOpenRegistModal(false)}
        okBtnName="등록"
        okBtnClick={() => {
          setOpenRegistModal(false);
        }}
      >
        <NameInput
          placeholder="쿠폰 코드를 입력해 주세요."
          id="couponValue"
          value={couponValue}
          handleChange={e => setCouponValue(e.target.value)}
        />
      </CustomModal>

      <CustomModal
        isOpen={openSuccessModal}
        toggleModal={() => setOpenSuccessModal(false)}
        topImage={<UseImgix srcUrl="/images/checking.svg" />}
        title="쿠폰 등록이 완료되었어요."
      >
        <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
          신규 가입 축하 기념 3,000원 쿠폰이 발급되었어요.
        </Text>
      </CustomModal>

      <CustomModal
        isOpen={openRejectModal}
        toggleModal={() => setOpenRejectModal(false)}
        topImage={<UseImgix srcUrl="/images/icon-sad-circle.svg" />}
        title="쿠폰 등록에 실패했어요."
      >
        <Text variant={TextSm1420Regular} color={ColorLightBlack7}>
          고객센터로 문의해 주세요.
        </Text>
      </CustomModal>
    </LayoutDetailPage>
  );
};

export default Coupon;
