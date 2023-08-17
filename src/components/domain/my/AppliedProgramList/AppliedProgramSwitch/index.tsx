import Switch, { SwitchProps } from "components/common/Switch";
import Text from "components/common/Text";
import { ColorLightBlack6, ContentsBase1626Regular } from "lds-common/src/constants/tokens/global";
import * as S from "./AppliedProgramSwitch.styled";

const AppliedProgramSwitch = ({
  toggle,
  handleToggle,
}: Pick<SwitchProps, "toggle" | "handleToggle">) => {
  return (
    <Switch
      handleToggle={handleToggle}
      toggle={toggle}
      leftSection={
        <S.Wrapper>
          <Text variant={ContentsBase1626Regular} color={ColorLightBlack6}>
            코칭
          </Text>
        </S.Wrapper>
      }
      rightSection={
        <S.Wrapper>
          <Text variant={ContentsBase1626Regular} color={ColorLightBlack6}>
            클래스
          </Text>
        </S.Wrapper>
      }
    />
  );
};

export default AppliedProgramSwitch;
