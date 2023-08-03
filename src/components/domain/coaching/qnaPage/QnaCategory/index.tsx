import * as S from "./QnaCategory.styled";
import Text from "components/common/Text";
import {
  TextSm1420Medium,
  ColorLight1,
  ColorLightSlate10,
} from "lds-common/src/constants/tokens/global";

interface QnaCategoryProps {
  selectedCategory: string;
  CategoryList: string[];
  handleCategoryClick: (category: string) => void;
}

const QnaCategory = ({ selectedCategory, CategoryList, handleCategoryClick }: QnaCategoryProps) => {
  return (
    <S.MenuWrapper>
      {CategoryList.map(item => (
        <S.MenuItem
          selected={selectedCategory === item}
          key={item}
          onClick={() => handleCategoryClick(item)}
        >
          <Text
            variant={TextSm1420Medium}
            color={selectedCategory === item ? ColorLight1 : ColorLightSlate10}
          >
            {item}
          </Text>
        </S.MenuItem>
      ))}
    </S.MenuWrapper>
  );
};

export default QnaCategory;
