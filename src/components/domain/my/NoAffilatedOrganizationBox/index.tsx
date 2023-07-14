import Icon from "components/common/Icon";
import { ColorLightBlack8 } from "constants/ldsConstants/global";
import { NativeFunction } from "utils/app/NativeFunction";
import * as S from "./NoAffiliatedOrganizationBox.styled";

interface NoAffiliatedOrganizationBoxPropsType {
  childId: string | undefined;
}
const NoAffiliatedOrganizationBox = ({ childId }: NoAffiliatedOrganizationBoxPropsType) => {
  const handleSectionClick = () => {
    if (childId) NativeFunction("routeNativeScreen", `registerOrganization@${childId}`);
  };
  return (
    <S.BoxWrapper onClick={handleSectionClick}>
      <S.InformText>아직 등록한 기관이 없습니다.</S.InformText>
      <Icon icon={"home-plus"} size={24} fill={ColorLightBlack8} />
    </S.BoxWrapper>
  );
};

export default NoAffiliatedOrganizationBox;
