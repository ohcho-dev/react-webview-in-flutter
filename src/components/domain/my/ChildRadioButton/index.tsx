import { CustomRadioButton } from "components/common/CustomRadioButton";
import { OptionType } from "types/common";

const GenderOption: OptionType[] = [
  { name: "여아", value: "F" },
  { name: "남아", value: "M" },
];
const PrematureOption: OptionType[] = [
  { name: "예정일 출산", value: 0 },
  { name: "이른둥이 출산", value: 1 },
];

interface ChildRadioButtomPropsType {
  id: "gender" | "premature_flag";
  selectedValue: string | number;
  modifiable?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChildRadioButton = ({
  id,
  selectedValue,
  handleChange,
  modifiable,
}: ChildRadioButtomPropsType) => {
  return (
    <CustomRadioButton
      id={id}
      options={id === "gender" ? GenderOption : PrematureOption}
      selectedValue={selectedValue}
      onChangeFunction={handleChange}
      modifiable={modifiable}
    />
  );
};

export default ChildRadioButton;
