import { CustomChip } from "components/common/Chip/Chip.styled";
import {
  ColorLightBlack5,
  ColorTransparentTransparent,
  ColorLightSlate3,
} from "lds-common/src/constants/tokens/global";
import * as S from "./Organization.styled";

interface OrganizationRowProps {
  title: string;
  name: string;
}

const OrganizationRow = ({ title, name }: OrganizationRowProps) => {
  return (
    <S.OrganizationRow>
      <CustomChip
        color={ColorLightBlack5}
        borderColor={ColorTransparentTransparent}
        backgroundColor={ColorLightSlate3}
      >
        {title}
      </CustomChip>
      <S.OrganizationText>{name}</S.OrganizationText>
    </S.OrganizationRow>
  );
};

export default OrganizationRow;
