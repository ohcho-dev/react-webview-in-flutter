import Icon from "components/common/Icon";
import UseImgix from "components/common/Imgix";
import { ColorLightSlate8 } from "constants/ldsConstants/global";
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
        <S.DayCareGroupName>{`${group_name}반`}</S.DayCareGroupName>
        <Icon icon={"chevron-right"} size={24} fill={ColorLightSlate8} />
      </S.GroupInfoSection>
    </S.BoxWrapper>
  );
};

export default AffiliatedOrganizationBox;
