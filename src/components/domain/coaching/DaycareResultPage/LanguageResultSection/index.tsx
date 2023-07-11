import Icon from "components/common/Icon";
import UseImgix from "components/common/Imgix";
import { ColorLightEltern9Base, ColorLightPurple8 } from "constants/ldsConstants/global";
import {
  DividerSection,
  IconDotSection,
  ListContent,
  ListItem,
  TitleSection,
} from "pages/coaching/DaycareResultPage/DaycareResultPage.styled";
import { useNavigate } from "react-router-dom";
import { CategoryListType, DaycareMonthLevelType, LanguageInfoType } from "types/apis/coaching";
import * as S from "../CategoryResultSection/CategoryResultSection.styled";
import { LanguageExplanationBtn, LanguageLevelInfoSection } from "./LanguageResultSection.styled";

interface CategoryResultSectionPropsType {
  child_name: string | undefined;
  category_info_arr: CategoryListType[] | undefined;
  month_level: DaycareMonthLevelType | undefined;
  language_info: LanguageInfoType | undefined;
}

const LEVEL_TEXT = {
  TTRL_LEVEL1: "또래보다 우수해요!",
  TTRL_LEVEL2: "또래와 비슷해요.",
  TTRL_LEVEL3: "또래보다 조금 느려요.",
};

const LanguageResultSection = ({
  child_name,
  category_info_arr,
  month_level,
  language_info,
}: CategoryResultSectionPropsType) => {
  const navigate = useNavigate();
  if (!category_info_arr || !month_level || !language_info) return null;
  const { activity_content, activity_image, comment, importance } = language_info;
  return (
    <S.Layout>
      <S.PaddingWrapper>
        <UseImgix srcUrl={`/images/language_main.svg`} style={{ width: "100%", height: "13rem" }} />
        <LanguageExplanationBtn
          onClick={() => navigate("/coaching/daycare/resultPaper/languageDesc")}
        >
          <span>표현 언어, 수용 언어란?</span>
          <Icon icon={"chevron-right"} size={20} fill={ColorLightPurple8} />
        </LanguageExplanationBtn>
        {category_info_arr.map(
          ({ growth_category_id, growth_category_name, level, gap, result_month_level }, index) => (
            <div key={growth_category_id}>
              <LanguageLevelInfoSection firstSection={index === 0}>
                <S.LevelSection>
                  <S.LevelInfoSection>
                    <S.LevelTitle>{`${child_name}의 ${growth_category_name} 발달은`}</S.LevelTitle>
                    <S.LevelTitle secondLine>{LEVEL_TEXT[level]}</S.LevelTitle>
                    <S.MonthTitle>{`현재 월령 : ${month_level.month_start} ~ ${month_level.month_end}개월`}</S.MonthTitle>
                    {gap > -3 && (
                      <S.MonthTitle
                        secondLine
                      >{`발달 예상 월령 : ${result_month_level.month_start} ~ ${result_month_level.month_end}개월`}</S.MonthTitle>
                    )}
                  </S.LevelInfoSection>
                  <S.DecoImageSection>
                    <UseImgix
                      srcUrl="/images/result_paper_deco.svg"
                      style={{ width: "7.8rem", height: "5.8rem" }}
                    />
                  </S.DecoImageSection>
                </S.LevelSection>
                <UseImgix
                  srcUrl={`/images/${level}.svg`}
                  style={{ width: "100%", height: "15.7rem" }}
                />
              </LanguageLevelInfoSection>
              {index === 0 && (
                <UseImgix srcUrl={`/images/dotted_divider.svg`} style={{ width: "100%" }} />
              )}
            </div>
          ),
        )}
        <S.CommentSection>{comment}</S.CommentSection>
      </S.PaddingWrapper>
      <DividerSection />
      <S.PaddingWrapper>
        <S.RecommendedActivitySection>
          <TitleSection>
            <UseImgix srcUrl={"/images/heart-filled.svg"} />
            추천 활동
          </TitleSection>
          <S.RecommendActivityImgSection>
            {activity_image && <S.ActivityImage src={activity_image} alt="activity" />}
          </S.RecommendActivityImgSection>
          <S.RecommendCommentSection>
            <ListItem>
              <IconDotSection>
                <Icon icon={"point-filled"} size={16} fill={ColorLightEltern9Base} />
              </IconDotSection>
              <ListContent>{activity_content}</ListContent>
            </ListItem>
          </S.RecommendCommentSection>
        </S.RecommendedActivitySection>
      </S.PaddingWrapper>
      <DividerSection />
      <S.PaddingWrapper>
        <S.ImportantSection>
          <TitleSection>
            <UseImgix srcUrl={"/images/coaching_star.svg"} />
            {`언어 발달이 중요한 이유`}
          </TitleSection>
          <S.CommentSection>{importance}</S.CommentSection>
        </S.ImportantSection>
      </S.PaddingWrapper>
    </S.Layout>
  );
};

export default LanguageResultSection;
