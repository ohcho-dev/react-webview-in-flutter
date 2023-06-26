import UseImgix from "components/common/Imgix";
import * as S from "./affiliatedOrganizationBox.styled";

interface AffiliatedOrganizationBoxPropType {
  handleClick: () => void;
}

const AffiliatedOrganizationBox = ({ handleClick }: AffiliatedOrganizationBoxPropType) => {
  return (
    <S.BoxWrapper onClick={handleClick}>
      <S.DayCareInfoSection>
        <UseImgix srcUrl={"/kindergarten_hat.svg"} />
        <S.DayCareName>루먼랩 어린이집</S.DayCareName>
      </S.DayCareInfoSection>
      <S.GroupInfoSection>
        <S.DayCareGroupName>병아리반</S.DayCareGroupName>
        <UseImgix srcUrl="/images/icon-arrow-right.svg" alt="상세보기" />
      </S.GroupInfoSection>
    </S.BoxWrapper>
  );
};

export default AffiliatedOrganizationBox;
