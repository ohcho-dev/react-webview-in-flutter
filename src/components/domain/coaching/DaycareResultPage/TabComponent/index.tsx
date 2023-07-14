import { CategoryListType } from "types/apis/coaching";
import * as S from "./TabComponent.styled";

interface TabComponentPropsType {
  selectedCategory: number;
  handleCategoryClick: (id: number) => void;
}

const TAB_MENU = [
  { name: "종합", id: 0 },
  { name: "대근육", id: 1 },
  { name: "소근육", id: 2 },
  { name: "언어", id: 5 },
  { name: "인지", id: 4 },
  { name: "사회성", id: 3 },
];

const TabComponent = ({ selectedCategory, handleCategoryClick }: TabComponentPropsType) => {
  return (
    <S.TabWrapper>
      {TAB_MENU.map(({ name, id }) => (
        <S.TabItem
          selected={selectedCategory === id}
          key={id}
          onClick={() => handleCategoryClick(id)}
        >
          <S.TabTitle selected={selectedCategory === id}>{name}</S.TabTitle>
        </S.TabItem>
      ))}
    </S.TabWrapper>
  );
};

export default TabComponent;
