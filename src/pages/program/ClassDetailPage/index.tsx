import useSelectedClassInfo from "queries/domain/program/useSelectedClassInfo";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "../../../components/common/Button";
import UseImgix from "../../../components/common/Imgix";
import ProgramPrice from "../../../components/domain/program/programListPage/ProgramPrice";
import {
  AgeRange,
  OnlineOffline,
} from "../../../components/domain/program/programListPage/programListPage.styled";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import { commonCodeState } from "../../../store/common";
import { getDateTime } from "../../../utils/date/getDateTime";
import { getMonthLevelString } from "../../../utils/date/getMonthLevelString";
import { getDiscountPercentage } from "../../../utils/program/getDiscountPercentage";
import * as S from "./classDetailPage.styled";
import NoImage from "components/domain/program/NoMainImage";

interface ClassDetailPageProps {
  id: string;
}

const ClassDetailPage = ({ id }: ClassDetailPageProps): JSX.Element => {
  const navigate = useNavigate();
  const { data: selectedClassInfo } = useSelectedClassInfo(id);
  const commonCodeList = useRecoilValue<{ [key: string]: any }>(commonCodeState);

  return (
    <LayoutDetailPage
      bottomScrollAnimationEffect={true}
      titleBarBorder={true}
      bottomBtn
      bottomBtnElement={
        <>
          {/* <GiftBtn>
          <UseImgix srcUrl="/images/icon-gift.svg" alt="선물하기" />
        </GiftBtn> */}
          <Button
            theme={"black"}
            content={"신청하기"}
            onClick={() => navigate(`/program/class/apply-class/${id}`)}
          />
        </>
      }
    >
      <S.ClassWrapper>
        {selectedClassInfo.main_image ? (
          <S.Thumbnail src={selectedClassInfo.main_image} alt="main" />
        ) : (
          <NoImage />
        )}
        <S.ClassInfoWrapper>
          <S.ClassInfo>
            <OnlineOffline>{commonCodeList[selectedClassInfo.place_type]}</OnlineOffline>
            <AgeRange>{getMonthLevelString(selectedClassInfo.month_level)}</AgeRange>
          </S.ClassInfo>
          <S.ClassTitle>{selectedClassInfo.name}</S.ClassTitle>
          <S.ClassSubSection>
            {selectedClassInfo.place_type === "CLPLT_ONLINE"
              ? getDateTime(selectedClassInfo.class_datetime)
              : selectedClassInfo.location}
          </S.ClassSubSection>
          <ProgramPrice
            discountPercentage={getDiscountPercentage(
              selectedClassInfo.base_price,
              selectedClassInfo.price,
            )}
            price={selectedClassInfo.price}
            originalPrice={selectedClassInfo.base_price}
            perNum={selectedClassInfo.total_session}
          />
        </S.ClassInfoWrapper>
        <S.Divider />
        {selectedClassInfo.content_image && (
          <UseImgix srcUrl="/images/class/class_04_detail_01.png" alt="Class Detail Page" />
        )}
      </S.ClassWrapper>
    </LayoutDetailPage>
  );
};

export default ClassDetailPage;
