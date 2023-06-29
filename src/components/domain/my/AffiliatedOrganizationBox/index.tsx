import UseImgix from "components/common/Imgix";
import * as S from "./affiliatedOrganizationBox.styled";

interface AffiliatedOrganizationBoxPropType {
  group_name: string;
  organization_name: string;
  handleClick: () => void;
}

const AffiliatedOrganizationBox = ({
  handleClick,
  group_name,
  organization_name,
}: AffiliatedOrganizationBoxPropType) => {
  return (
    <S.BoxWrapper onClick={handleClick}>
      <S.DayCareInfoSection>
        <UseImgix srcUrl={"/kindergarten_hat.svg"} />
        <S.DayCareName>{organization_name}</S.DayCareName>
      </S.DayCareInfoSection>
      <S.GroupInfoSection>
        <S.DayCareGroupName>{group_name}</S.DayCareGroupName>
        <UseImgix srcUrl="/images/icon-arrow-right.svg" alt="상세보기" />
      </S.GroupInfoSection>
    </S.BoxWrapper>
  );
};

export default AffiliatedOrganizationBox;
