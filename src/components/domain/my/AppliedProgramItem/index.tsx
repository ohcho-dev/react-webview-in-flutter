import Chip from "components/common/Chip";
import { AppliedClassType, AppliedCoachingType } from "types/domain/my";
import { getDate } from "utils/date/getDateTime";
import getGender from "utils/user/getGender";
import * as S from "./AppliedProgram.styled";

interface AppliedProgramItemProps {
  programInfo: AppliedClassType | AppliedCoachingType;
  purchase_date: string;
  name: string;
}

const AppliedProgramItem = ({ programInfo, purchase_date, name }: AppliedProgramItemProps) => {
  const {
    id,
    payment_status,
    payment_code,
    main_image,
    payment_price,
    child_name,
    child_gender,
    child_birth_date,
  } = programInfo;
  return (
    <S.ListWrap key={id}>
      <S.ListHeader>
        <S.DateAndChipWrapper>
          <S.PurchaseDate>{getDate(purchase_date)}</S.PurchaseDate>
          <Chip status={payment_status} />
        </S.DateAndChipWrapper>
        <S.PaymentCode>{payment_code}</S.PaymentCode>
      </S.ListHeader>
      <S.ListContent>
        <div>
          <S.Title>{name}</S.Title>
          {payment_price ? (
            <S.Price>{payment_price.toLocaleString("ko-KR")}원</S.Price>
          ) : (
            <S.Price>무료</S.Price>
          )}
          <S.ChildInfo>
            신청 아이 : {child_name} ({getDate(child_birth_date)}) {getGender(child_gender)}아
          </S.ChildInfo>
        </div>
        <S.ThumbnailWrapper>
          {main_image ? (
            <S.ThumbnailImg alt="coaching thumbnail" src={main_image} />
          ) : (
            <S.NoThumbnailImg />
          )}
        </S.ThumbnailWrapper>
      </S.ListContent>
    </S.ListWrap>
  );
};

export default AppliedProgramItem;
