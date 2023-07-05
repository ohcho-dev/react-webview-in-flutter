import { CategoryListType } from "types/apis/coaching";
import * as S from "./TabComponent.styled";

interface TabComponentPropsType {
  list: CategoryListType[] | undefined;
  selectedCategory: number;
  handleCategoryClick: (id: number) => void;
}

const TabComponent = ({ list, selectedCategory, handleCategoryClick }: TabComponentPropsType) => {
  return (
    <S.TabWrapper>
      <S.TabItem selected={selectedCategory === 0} key={0} onClick={() => handleCategoryClick(0)}>
        <S.TabTitle selected={selectedCategory === 0}>종합</S.TabTitle>
      </S.TabItem>
      {list &&
        list.map(item => (
          <S.TabItem
            selected={selectedCategory === item.growth_category_id}
            key={item.growth_category_id}
            onClick={() => handleCategoryClick(item.growth_category_id)}
          >
            <S.TabTitle selected={selectedCategory === item.growth_category_id}>
              {item.growth_category_name}
            </S.TabTitle>
          </S.TabItem>
        ))}
      <S.TabItem selected={selectedCategory === 5} key={5} onClick={() => handleCategoryClick(5)}>
        <S.TabTitle selected={selectedCategory === 5}>언어</S.TabTitle>
      </S.TabItem>
    </S.TabWrapper>
  );
};

export default TabComponent;
