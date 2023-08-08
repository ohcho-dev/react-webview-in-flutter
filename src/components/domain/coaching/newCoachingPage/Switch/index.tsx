import * as S from "./Switch.styled";

interface SwitchProps {
  checked: boolean;
  toggleSwitch: () => void;
  rightSection: React.ReactNode;
  leftSection: React.ReactNode;
}

const Switch = ({ checked, toggleSwitch, rightSection, leftSection }: SwitchProps) => {
  return (
    <S.SwitchWrapper onClick={toggleSwitch}>
      <S.Section>{leftSection}</S.Section>
      <S.Section>{rightSection}</S.Section>
      <S.Switch checked={checked} />
    </S.SwitchWrapper>
  );
};

export default Switch;
