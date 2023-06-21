import React, { useEffect, useState } from "react";
import * as S from "./CustomRadioButton.styled";

type TypeProps = {
  name: string;
  value: any;
};

interface CustonRadioButtonProps {
  defaultValue: TypeProps;
  onChangeFunction: (e: any) => void;
  type: TypeProps[];
  id: string;
  modifiable?: boolean;
}

export function CustomRadioButton({
  id,
  type,
  defaultValue,
  onChangeFunction,
  modifiable,
}: CustonRadioButtonProps) {
  const [selectedColor, setSelectedColor] = useState<TypeProps>(defaultValue);

  useEffect(() => {
    if (defaultValue) {
      const selected = type.filter(item => item.value === defaultValue.value);
      setSelectedColor(selected[0]);
    }
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const selected = type.filter(item => String(item.value) === value);

    if (id === "childPremeture" && !modifiable) {
      return;
    }

    if (selected) {
      setSelectedColor(selected[0]);
    }
  };

  return (
    <>
      <S.ColorSelectorContainer>
        {type.map(item => (
          <S.RadioWrap key={item.name}>
            <S.RadioButton
              id={item.name}
              type="radio"
              name={id}
              value={item.value}
              checked={item.value === selectedColor.value}
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
