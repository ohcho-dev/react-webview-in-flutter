import React from "react";
import * as S from "./CustomRadioButton.styled";

type TypeProps = {
  name: string;
  value: any;
};

interface CustonRadioButtonProps {
  selectedValue: string | number;
  onChangeFunction: (e: any) => void;
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
            <S.Label htmlFor={item.name}>{item.name}</S.Label>
          </S.RadioWrap>
        ))}
      </S.ColorSelectorContainer>
    </>
  );
}
