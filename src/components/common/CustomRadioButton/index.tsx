import {
  ColorLightBlack7,
  ColorLightEltern9Base,
  TextBase1624Medium,
  TextBase1624Regular,
} from "constants/ldsConstants/global";
import React from "react";
import Text from "../Text";
import * as S from "./CustomRadioButton.styled";

type TypeProps = {
  name: string;
  value: any;
};

interface CustonRadioButtonProps {
  selectedValue: string | number;
  onChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: TypeProps[];
  id: string;
  modifiable?: boolean;
}

export function CustomRadioButton({
  id,
  options,
  selectedValue,
  onChangeFunction,
  modifiable,
}: CustonRadioButtonProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (id === "childPremeture" && !modifiable) {
      return;
    }
  };

  return (
    <>
      <S.ColorSelectorContainer>
        {options.map(item => (
          <S.RadioWrap key={item.name}>
            <S.RadioButton
              id={item.name}
              type="radio"
              name={id}
              value={item.value}
              checked={item.value === selectedValue}
              onChange={e => {
                handleChange(e);
                onChangeFunction(e);
              }}
            />
            <S.Label htmlFor={item.name}>
              <Text
                variant={item.value === selectedValue ? TextBase1624Medium : TextBase1624Regular}
                color={item.value === selectedValue ? ColorLightEltern9Base : ColorLightBlack7}
              >
                {item.name}
              </Text>
            </S.Label>
          </S.RadioWrap>
        ))}
      </S.ColorSelectorContainer>
    </>
  );
}
