import Icon from "components/common/Icon";
import UseImgix from "components/common/Imgix";
import CategoryResultSection from "components/domain/coaching/DaycareResultPage/CategoryResultSection";
import LanguageResultSection from "components/domain/coaching/DaycareResultPage/LanguageResultSection";
import LevelSection from "components/domain/coaching/DaycareResultPage/LevleSection";
import TabComponent from "components/domain/coaching/DaycareResultPage/TabComponent";
import { ColorLightEltern9Base, ColorLightRed8 } from "constants/ldsConstants/global";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import useSelectedDaycareResultInfo from "queries/domain/coaching/useDaycareResultPaper";
import { useEffect, useRef } from "react";
import { UseQueryResult } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedCategoryIdState } from "store/domain/coaching";
import { DaycareResultResponseType } from "types/apis/coaching";
import * as S from "./DaycareResultPage.styled";

export const GROWTH_CATEGORY_INFO = [
  "gross_motor_skills",
  "fine_motor_skills",
  "social_skills",
  "cognition",
  "expressive_language",
  "receptive_language",
];

const DaycareResultPage = () => {
  const { id } = useParams();
  const divRef = useRef<HTMLDivElement>(null);
  const { data: resultPaperInfo }: UseQueryResult<DaycareResultResponseType, unknown> =
    useSelectedDaycareResultInfo(id);
  const [selectedCategoryId, setSelectedCategoryId] = useRecoilState(selectedCategoryIdState);
  const filteredEmptyArr = resultPaperInfo?.level_group
    ? Object.entries(resultPaperInfo.level_group).filter(([_, levelArr]) => levelArr.length > 0)
    : [];

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = 0;
    }
  }, [selectedCategoryId]);

  return (
    <LayoutDetailPage>
      <div ref={divRef} style={{ height: "100%", overflowY: "auto" }}>
        <TabComponent
          list={resultPaperInfo?.list.filter(
            item => item.growth_category_id !== 5 && item.growth_category_id !== 6,
          )}
          selectedCategory={selectedCategoryId}
          handleCategoryClick={id => setSelectedCategoryId(id)}
        />
        {selectedCategoryId === 0 && (
          <>
            <S.OverallSection>
              <S.OverallSectionChildInfo>
                {resultPaperInfo?.child_name}({resultPaperInfo?.month_level.month_start} ~
                {resultPaperInfo?.month_level.month_end}개월) 발달 검사 결과
              </S.OverallSectionChildInfo>
              <S.OverallTitleSection>
                <S.OverallSectionHighlight>발달 균형</S.OverallSectionHighlight>
                <S.OverallSectionText>이 필요해요!</S.OverallSectionText>
              </S.OverallTitleSection>
              <S.GraphSection></S.GraphSection>
              <UseImgix srcUrl={"/images/must_check.svg"} />
            </S.OverallSection>
            <S.DividerSection />
            <S.ChecklistSection>
              <S.ChecklistTitleSection>
                <UseImgix srcUrl={"/clinic/images/icon_warning.svg"} />
                주의가 필요해요
              </S.ChecklistTitleSection>
              {resultPaperInfo?.checklist.map((content: string) => (
                <S.ListItem key={content}>
                  <S.IconDotSection>
                    <Icon icon={"point-filled"} size={16} fill={ColorLightRed8} />
                  </S.IconDotSection>
                  <S.ListContent>{content}</S.ListContent>
                </S.ListItem>
              ))}
            </S.ChecklistSection>
            <S.DividerSection />
            <S.Section>
              <S.TitleSection>
                <UseImgix srcUrl={"/images/graph.svg"} />
                영역별 발달 결과
              </S.TitleSection>
              {filteredEmptyArr.map(([levelTitle, levelArr], index) => {
                if (levelArr.length > 0) {
                  return (
                    <LevelSection
                      level_title={levelTitle as "TTRL_LEVEL1" | "TTRL_LEVEL2" | "TTRL_LEVEL3"}
                      level_arr={levelArr}
                      last_section={index === filteredEmptyArr.length - 1}
                      key={levelTitle}
                    />
                  );
                }
              })}
            </S.Section>
            <S.DividerSection />
            <S.Section>
              <S.TitleSection>
                <UseImgix
                  srcUrl={"/images/books.svg"}
                  style={{ width: "2.4rem", height: "2.4rem" }}
                />
                {resultPaperInfo?.month_level.month_start} ~{resultPaperInfo?.month_level.month_end}
                개월의 발달
              </S.TitleSection>
              <S.MonthImageSection>
                <UseImgix srcUrl={"/images/month_image.svg"} />
              </S.MonthImageSection>
              <S.MonthContentSection>
                {resultPaperInfo?.month_level.content.split("/n").map((content: string) => (
                  <S.ListItem key={content}>
                    <S.IconDotSection>
                      <Icon icon={"point-filled"} size={16} fill={ColorLightEltern9Base} />
                    </S.IconDotSection>
                    <S.ListContent>{content}</S.ListContent>
                  </S.ListItem>
                ))}
              </S.MonthContentSection>
            </S.Section>
            <S.DividerSection />
          </>
        )}
        {selectedCategoryId !== 0 && selectedCategoryId !== 5 && (
          <CategoryResultSection
            category={
              GROWTH_CATEGORY_INFO[selectedCategoryId - 1] as
                | "social_skills"
                | "cognition"
                | "gross_motor_skills"
                | "fine_motor_skills"
            }
            child_name={resultPaperInfo?.child_name}
            category_info={resultPaperInfo?.list.find(
              item => item.growth_category_id === selectedCategoryId,
            )}
            month_level={resultPaperInfo?.month_level}
          />
        )}
        {selectedCategoryId === 5 && (
          <LanguageResultSection
            child_name={resultPaperInfo?.child_name}
            category_info_arr={resultPaperInfo?.list.filter(
              item => item.growth_category_id === 5 || item.growth_category_id === 6,
            )}
            month_level={resultPaperInfo?.month_level}
            language_info={resultPaperInfo?.language_info}
          />
        )}
      </div>
    </LayoutDetailPage>
  );
};

export default DaycareResultPage;
