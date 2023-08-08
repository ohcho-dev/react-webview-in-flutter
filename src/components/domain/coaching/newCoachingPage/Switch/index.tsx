import * as S from "./Switch.styled";

interface SwitchProps {
  checked: boolean;
  toggleSwitch: () => void;
  rightSection: React.ReactNode;
  leftSection: React.ReactNode;
  customSelectedRightSection?: React.ReactNode;
  customSelectedLeftSection?: React.ReactNode;
}

const Switch = ({
  checked,
  toggleSwitch,
  rightSection,
  leftSection,
  customSelectedLeftSection,
  customSelectedRightSection,
}: SwitchProps) => {
  return (
    <S.SwitchWrapper onClick={toggleSwitch}>
      <S.Section location="left">{leftSection}</S.Section>
      <S.Section location="right">{rightSection}</S.Section>
      <S.Switch checked={checked}>
        {checked
          ? customSelectedLeftSection
            ? customSelectedLeftSection
            : leftSection
          : customSelectedRightSection
          ? customSelectedRightSection
          : rightSection}
      </S.Switch>
    </S.SwitchWrapper>
  );
};

export default Switch;
