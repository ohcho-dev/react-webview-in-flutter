import Icon from "components/common/Icon";
import UseImgix from "components/common/Imgix";
import { ColorLightBlack6 } from "constants/ldsConstants/global";
import { GROWTH_CATEGORY_INFO } from "pages/coaching/DaycareResultPage";
import { useSetRecoilState } from "recoil";
import { selectedCategoryIdState } from "store/domain/coaching";
import * as S from "./LevelSection.styled";

interface LevelSectionPropsType {
  level_title: "TTRL_LEVEL1" | "TTRL_LEVEL2" | "TTRL_LEVEL3";
  level_arr: { growth_category_id: number; growth_category_name: string }[];
  last_section: boolean;
}

const LEVEL_INFO = {
  TTRL_LEVEL1: "또래보다 빨라요",
  TTRL_LEVEL2: "또래와 비슷해요",
  TTRL_LEVEL3: "조금 느려요",
};

const LevelSection = ({ level_title, level_arr, last_section }: LevelSectionPropsType) => {
  const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);
  const handleBtnClick = (id: number) => {
    setSelectedCategoryId(id === 5 || id === 6 ? 5 : id);
  };
  return (
    <S.CategoryLevelSection lastSection={last_section}>
      <S.LevelTitleSection>{LEVEL_INFO[level_title]}</S.LevelTitleSection>
      {level_arr.map((level: { growth_category_id: number; growth_category_name: string }) => (
        <S.CategoryButton
          key={level.growth_category_id}
          onClick={() => handleBtnClick(level.growth_category_id)}
        >
          <S.CategoryButtonTitle>
            <UseImgix
              srcUrl={`/images/${GROWTH_CATEGORY_INFO[level.growth_category_id - 1]}.svg`}
            />
            {level.growth_category_name}
          </S.CategoryButtonTitle>
          <Icon icon={"chevron-right"} size={24} fill={ColorLightBlack6} />
        </S.CategoryButton>
      ))}
    </S.CategoryLevelSection>
  );
};

export default LevelSection;
