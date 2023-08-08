import * as S from "./Switch.styled";

export interface SwitchProps {
  toggle: boolean;
  handleToggle: () => void;
  rightSection: React.ReactNode;
  leftSection: React.ReactNode;
}

const Switch = ({ toggle, handleToggle, rightSection, leftSection }: SwitchProps) => {
  return (
    <S.SwitchWrapper onClick={handleToggle}>
      <S.Section>{leftSection}</S.Section>
      <S.Section>{rightSection}</S.Section>
      <S.Switch checked={toggle} />
    </S.SwitchWrapper>
  );
};

export default Switch;
