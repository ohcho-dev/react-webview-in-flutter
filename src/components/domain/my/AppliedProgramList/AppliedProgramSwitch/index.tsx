import Switch, { SwitchProps } from "components/common/Switch";
import Text from "components/common/Text";
import {
  ColorLightBlack6,
  ColorLightBlack9Base,
  ContentsBase1626Medium,
  ContentsBase1626Regular,
  ContentsBase1626Semibold,
} from "lds-common/src/constants/tokens/global";
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
          <Text
            variant={toggle ? ContentsBase1626Semibold : ContentsBase1626Medium}
            color={toggle ? ColorLightBlack9Base : ColorLightBlack6}
          >
            코칭
          </Text>
        </S.Wrapper>
      }
      rightSection={
        <S.Wrapper>
          <Text
            variant={toggle ? ContentsBase1626Medium : ContentsBase1626Semibold}
            color={toggle ? ColorLightBlack6 : ColorLightBlack9Base}
          >
            클래스
          </Text>
        </S.Wrapper>
      }
    />
  );
};

export default AppliedProgramSwitch;
