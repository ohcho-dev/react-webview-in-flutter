import Switch, { SwitchProps } from "components/common/Switch";
import Text from "components/common/Text";
import {
  ContentsBase1626Medium,
  ColorLightBlack9Base,
  ColorLightBlack6,
  ContentsBase1626Semibold,
} from "lds-common/src/constants/tokens/global";
import * as S from "./CoachingStatusSwitch.styled";

const CoachingStatusSwitch = ({
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
            진행 중인 코칭
          </Text>
        </S.Wrapper>
      }
      rightSection={
        <S.Wrapper>
          <Text
            variant={toggle ? ContentsBase1626Medium : ContentsBase1626Semibold}
            color={toggle ? ColorLightBlack6 : ColorLightBlack9Base}
          >
            종료된 코칭
          </Text>
        </S.Wrapper>
      }
    />
  );
};

export default CoachingStatusSwitch;
