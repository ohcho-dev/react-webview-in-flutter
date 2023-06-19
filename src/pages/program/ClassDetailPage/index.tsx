import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "../../../components/common/Button";
import UseImgix from "../../../components/common/Imgix";
import { queryKeys } from "../../../constants/queryKeys";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import { getSelectedClassInfo } from "../../../queries/domain/program/programApi";
import { commonCodeState } from "../../../store/common";
import { getDateTime } from "../../../utils/date/getDateTime";
import { getMonthLevelString } from "../../../utils/date/getMonthLevelString";
import { getDiscountPercentage } from "../../../utils/program/getDiscountPercentage";
import ProgramPrice from "../ProgramListPage/components/ProgramPrice";
import { AgeRange, OnlineOffline } from "../ProgramListPage/components/styled";
import * as S from "./classDetailPage.styled";

interface ClassDetailPageProps {
  id: string;
}

const ClassDetailPage: React.FC<ClassDetailPageProps> = props => {
  const navigate = useNavigate();
  const { id } = props;
  const { data: selectedClassInfo } = useQuery(queryKeys.selectedClassInfo, () =>
    getSelectedClassInfo(id),
  );
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
        <UseImgix srcUrl="/images/class/class_04.png" alt="Class Thumbnail" />
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
