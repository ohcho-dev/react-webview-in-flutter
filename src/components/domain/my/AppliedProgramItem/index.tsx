import Chip from "components/common/Chip";
import { AppliedClassType, AppliedCoachingType } from "types/domain/my";
import { getDate } from "utils/date/getDateTime";
import getGender from "utils/user/getGender";
import * as S from "./AppliedProgram.styled";
import Text from "components/common/Text";
import {
  ColorLightBlack12,
  ColorLightBlack8,
  ColorLightSlate11,
  ColorLightSlate9Base,
  TextBase1624Semibold,
  TextSm1420Regular,
  TextSm1420Semibold,
} from "lds-common/src/constants/tokens/global";
import EmptyBox from "components/common/EmptyBox";

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
          <Chip status="PYST_CANCEL" />
          <Text variant={TextSm1420Semibold} color={ColorLightSlate9Base}>
            20230903-1234(데이터 필요!)
          </Text>
        </S.DateAndChipWrapper>
      </S.ListHeader>
      <S.ListContent>
        <div>
          <Text variant={TextBase1624Semibold} color={ColorLightBlack12}>
            {name}
          </Text>
          <EmptyBox height="0.8rem" />
          <div>
            {payment_price ? (
              <>
                <Text variant={TextSm1420Semibold} color={ColorLightBlack8}>
                  {payment_price.toLocaleString("ko-KR") + "원"}
                </Text>
                <EmptyBox height="0.4rem" />
              </>
            ) : (
              <>
                <Text variant={TextSm1420Semibold} color={ColorLightBlack8}>
                  무료
                </Text>
                <EmptyBox height="0.4rem" />
              </>
            )}
          </div>
          <div>
            <Text variant={TextSm1420Regular} color={ColorLightSlate11}>
              {"신청 아이 : " +
                child_name.substring(0, 5) +
                "(" +
                getDate(child_birth_date) +
                ")" +
                getGender(child_gender) +
                "아"}
            </Text>
          </div>
          <EmptyBox height="0.4rem" />
          <div>
            <Text variant={TextSm1420Regular} color={ColorLightSlate11}>
              {"신청 날짜 : " + purchase_date}
            </Text>
          </div>
          <EmptyBox height="2.4rem" />
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
