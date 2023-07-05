import Icon from "components/common/Icon";
import UseImgix from "components/common/Imgix";
import { ColorLightEltern9Base } from "constants/ldsConstants/global";
import {
  DividerSection,
  IconDotSection,
  ListContent,
  ListItem,
  TitleSection,
} from "pages/coaching/DaycareResultPage/DaycareResultPage.styled";
import { CategoryListType, DaycareMonthLevelType } from "types/apis/coaching";
import * as S from "./CategoryResultSection.styled";

interface CategoryResultSectionPropsType {
  category: "social_skills" | "cognition" | "gross_motor_skills" | "fine_motor_skills";
  child_name: string | undefined;
  category_info: CategoryListType | undefined;
  month_level: DaycareMonthLevelType | undefined;
}

const CATEGORY_NAME = {
  social_skills: "사회성",
  cognition: "인지",
  gross_motor_skills: "대근육",
  fine_motor_skills: "소근육",
};

const LEVEL_TEXT = {
  TTRL_LEVEL1: "또래보다 우수해요!",
  TTRL_LEVEL2: "또래와 비슷해요.",
  TTRL_LEVEL3: "또래보다 조금 느려요.",
};

const CategoryResultSection = ({
  category = "gross_motor_skills",
  child_name,
  category_info,
  month_level,
}: CategoryResultSectionPropsType) => {
  if (!category_info || !month_level) return null;
  return (
    <S.Layout>
      <S.PaddingWrapper>
        <UseImgix
          srcUrl={`/images/${category}_main.svg`}
          style={{ width: "100%", height: "13rem" }}
        />
        <S.LevelSection>
          <S.LevelInfoSection>
            <S.LevelTitle>{`${child_name}의 ${CATEGORY_NAME[category]}발달은`}</S.LevelTitle>
            <S.LevelTitle secondLine>{LEVEL_TEXT[category_info.level]}</S.LevelTitle>
            <S.MonthTitle>{`현재 월령 : ${month_level.month_start} ~ ${month_level.month_end}개월`}</S.MonthTitle>
            <S.MonthTitle>{`발달 예상 월령 : ${category_info.result_month_level.month_start} ~ ${category_info.result_month_level.month_end}개월`}</S.MonthTitle>
          </S.LevelInfoSection>
          <S.DecoImageSection>
            <UseImgix
              srcUrl="/images/result_paper_deco.svg"
              style={{ width: "7.8rem", height: "5.8rem" }}
            />
          </S.DecoImageSection>
        </S.LevelSection>
        <UseImgix
          srcUrl={`/images/${category_info.level}.svg`}
          style={{ width: "100%", height: "15.7rem" }}
        />
        <S.CommentSection>{category_info.comment}</S.CommentSection>
      </S.PaddingWrapper>
      <DividerSection />
      <S.PaddingWrapper>
        <S.RecommendedActivitySection>
          <TitleSection>
            <UseImgix srcUrl={"/images/heart-filled.svg"} />
            추천 활동
          </TitleSection>
          <S.RecommendActivityImgSection>
            <UseImgix
              srcUrl={"/images/recommend_activity.svg"}
              style={{ width: "100%", height: "22.8rem" }}
            />
          </S.RecommendActivityImgSection>
          <S.RecommendCommentSection>
            {category_info.activity_content.split("\n").map((content: string) => (
              <ListItem key={content}>
                <IconDotSection>
                  <Icon icon={"point-filled"} size={16} fill={ColorLightEltern9Base} />
                </IconDotSection>
                <ListContent>{content}</ListContent>
              </ListItem>
            ))}
          </S.RecommendCommentSection>
        </S.RecommendedActivitySection>
      </S.PaddingWrapper>
      <DividerSection />
      <S.PaddingWrapper>
        <S.ImportantSection>
          <TitleSection>
            <UseImgix srcUrl={"/images/coaching_star.svg"} />
            {`${CATEGORY_NAME[category]}발달이 중요한 이유`}
          </TitleSection>
          <S.CommentSection>{`${CATEGORY_NAME[category]} 발달은 중추 신경계나 말초 신경계, 혹은 근골격계의 정상적인 발달에 문제가 있을 때 나타나는 운동 장애와 직접적인 관련이 있으므로 주의 깊게 살펴야 합니다.`}</S.CommentSection>
        </S.ImportantSection>
      </S.PaddingWrapper>
    </S.Layout>
  );
};

export default CategoryResultSection;
