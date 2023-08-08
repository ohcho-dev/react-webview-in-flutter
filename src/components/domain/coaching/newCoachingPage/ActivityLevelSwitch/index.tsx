import UseImgix from "components/common/Imgix";
import Switch, { SwitchProps } from "components/common/Switch";
import Text from "components/common/Text";
import { ColorLightBlack6, ContentsBase1626Regular } from "lds-common/src/constants/tokens/global";
import * as S from "./ActivityLevelSwitch.styled";

const ActivityLevelSwitch = ({
  toggle,
  handleToggle,
}: Pick<SwitchProps, "toggle" | "handleToggle">) => {
  return (
    <Switch
      handleToggle={handleToggle}
      toggle={toggle}
      leftSection={
        <S.Wrapper>
          <UseImgix srcUrl="/images/new-coaching/sprout.svg" />
          <Text variant={ContentsBase1626Regular} color={ColorLightBlack6}>
            놀이를 어려워해요
          </Text>
        </S.Wrapper>
      }
      rightSection={
        <S.Wrapper>
          <UseImgix srcUrl="/images/new-coaching/twingkle.svg" />
          <Text variant={ContentsBase1626Regular} color={ColorLightBlack6}>
            능숙하게 잘해요
          </Text>
        </S.Wrapper>
      }
    />
  );
};

export default ActivityLevelSwitch;
