import React, { useEffect, useState } from "react";
import styled from "styled-components";

type TypeProps = {
  name: string;
  value: any;
};

const ColorSelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const RadioWrap = styled.div`
  width: 100%;
  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.5rem;
  letter-spacing: -0.4px;
  color: rgba(10, 10, 10, 0.8);
`;

const RadioButton = styled.input`
  display: none;

  &:checked + ${Label} {
    background: rgba(90, 196, 177, 0.12);
    border: 1px solid #5ac4b1;
    color: #00c7b1;
  }
`;

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
      <ColorSelectorContainer>
        {type.map(item => (
          <RadioWrap key={item.name}>
            <RadioButton
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
            <Label htmlFor={item.name}>{item.name}</Label>
          </RadioWrap>
        ))}
      </ColorSelectorContainer>
    </>
  );
}
