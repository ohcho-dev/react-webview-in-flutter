import Icon from "components/common/Icon";
import UseImgix from "components/common/Imgix";
import CategoryResultSection from "components/domain/coaching/DaycareResultPage/CategoryResultSection";
import LanguageResultSection from "components/domain/coaching/DaycareResultPage/LanguageResultSection";
import LevelSection from "components/domain/coaching/DaycareResultPage/LevleSection";
import TabComponent from "components/domain/coaching/DaycareResultPage/TabComponent";
import {
  ColorLightEltern10,
  ColorLightEltern6,
  ColorLightEltern7,
  ColorLightEltern9Base,
  ColorLightRed8,
} from "constants/ldsConstants/global";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import useSelectedDaycareResultInfo from "queries/domain/coaching/useDaycareResultPaper";
import { useEffect, useRef } from "react";
import { UseQueryResult } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedCategoryIdState } from "store/domain/coaching";
import { DaycareResultResponseType } from "types/apis/coaching";
import * as S from "./DaycareResultPage.styled";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

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

  const returnLevel = (level: string) => {
    if (level === "TTRL_LEVEL1") return 3;
    if (level === "TTRL_LEVEL2") return 2;
    if (level === "TTRL_LEVEL3") return 1;
  };

  const returnOverallText = () => {
    const level1_arr = resultPaperInfo?.level_group["TTRL_LEVEL1"];
    const level2_arr = resultPaperInfo?.level_group["TTRL_LEVEL2"];
    const level3_arr = resultPaperInfo?.level_group["TTRL_LEVEL3"];

    if (level1_arr && level2_arr && level3_arr) {
      if (level1_arr.length === 6) {
        return "good_balance";
      } else if (level3_arr.length > 0) {
        return "need_balance";
      } else {
        return "well_done";
      }
    }
  };

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
                <UseImgix srcUrl={`/images/${returnOverallText()}.svg`} />
              </S.OverallTitleSection>
              <S.GraphSection>
                <Radar
                  data={{
                    labels: resultPaperInfo?.list.map(item => item.growth_category_name),
                    datasets: [
                      {
                        data: resultPaperInfo?.list.map(item => returnLevel(item.level)),
                        borderColor: ColorLightEltern7,
                        borderWidth: 1,
                        backgroundColor: "rgba(194, 234, 229, 0.5)",
                        pointBorderWidth: 0,
                        pointBackgroundColor: function (context) {
                          switch (context.raw) {
                            case 3:
                              return "#00C7B1";
                            case 2:
                              return "#FFB937";
                            case 1:
                              return "#FD7473";
                          }
                        },
                        pointRadius: 4,
                      },
                      {
                        data: [3, 3, 3, 3, 3, 3],
                        borderColor: "transparent",
                        borderWidth: 1,
                        backgroundColor: "rgba(244, 252, 252, 0.5)",
                        pointBorderWidth: 0,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    responsive: true,
                    scales: {
                      r: {
                        angleLines: {
                          color: ColorLightEltern6,
                          lineWidth: 1.5,
                        },
                        grid: {
                          color: ColorLightEltern6,
                          lineWidth: 1.5,
                        },
                        pointLabels: {
                          color: ColorLightEltern10,
                          font: {
                            size: 14,
                            weight: "600",
                          },
                        },
                        max: 3,
                        min: 0,
                        ticks: { display: false, stepSize: 1 },
                      },
                    },
                  }}
                />
              </S.GraphSection>
              <UseImgix
                srcUrl={"/images/must_check.svg"}
                style={{ width: "100%", height: "22.1rem" }}
              />
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
              {filteredEmptyArr.map(
                ([levelTitle, levelArr], index) =>
                  levelArr.length > 0 && (
                    <LevelSection
                      level_title={levelTitle as "TTRL_LEVEL1" | "TTRL_LEVEL2" | "TTRL_LEVEL3"}
                      level_arr={levelArr}
                      last_section={index === filteredEmptyArr.length - 1}
                      key={levelTitle}
                    />
                  ),
              )}
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
                <UseImgix
                  srcUrl={"/images/development_img.svg"}
                  style={{ width: "100%", height: "22.8rem" }}
                />
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
