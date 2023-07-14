import Icon from "components/common/Icon";
import UseImgix from "components/common/Imgix";
import { ColorLightRed8, ColorLightEltern9Base } from "constants/ldsConstants/global";
import {
  DividerSection,
  IconDotSection,
  ListContent,
  ListItem,
  Section,
  TitleSection,
} from "pages/coaching/DaycareResultPage/DaycareResultPage.styled";
import { DaycareResultResponseType } from "types/apis/coaching";
import CustomRadarChart from "../CustomRadarChart";
import LevelSection from "../LevleSection";
import * as S from "./OverallSection.styled";

interface OverallSectionPropsType {
  resultPaperInfo: DaycareResultResponseType;
}

const OverallSection = ({ resultPaperInfo }: OverallSectionPropsType) => {
  const filteredEmptyArr = resultPaperInfo?.level_group
    ? Object.entries(resultPaperInfo.level_group).filter(([_, levelArr]) => levelArr.length > 0)
    : [];
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
          <CustomRadarChart categoryList={resultPaperInfo?.list} />
        </S.GraphSection>
        <UseImgix srcUrl={"/images/must_check.svg"} style={{ width: "100%", height: "22.1rem" }} />
      </S.OverallSection>
      <DividerSection />
      <S.ChecklistSection>
        <S.ChecklistTitleSection>
          <UseImgix srcUrl={"/clinic/images/icon_warning.svg"} />
          주의가 필요해요
        </S.ChecklistTitleSection>
        {resultPaperInfo.checklist.length > 0 && (
          <>
            <ListItem>
              <IconDotSection>
                <Icon icon={"point-filled"} size={16} fill={ColorLightRed8} />
              </IconDotSection>
              <ListContent>
                아래와 같은 행동을 보인다면 좀 더 주의깊은 관찰이 필요합니다. 일시적인 행동이 아닌
                지속적으로 관찰되는 경우는 소아과 등의 병원 진료를 권유합니다.
              </ListContent>
            </ListItem>
            {resultPaperInfo.checklist.map((content: string) => (
              <ListItem key={content}>
                <IconDotSection>
                  <Icon icon={"point-filled"} size={16} fill={ColorLightRed8} />
                </IconDotSection>
                <ListContent>{content}</ListContent>
              </ListItem>
            ))}
          </>
        )}
      </S.ChecklistSection>
      <DividerSection />
      <Section>
        <TitleSection>
          <UseImgix srcUrl={"/images/graph.svg"} />
          영역별 발달 결과
        </TitleSection>
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
      </Section>
      <DividerSection />
      <Section>
        <TitleSection>
          <UseImgix srcUrl={"/images/books.svg"} style={{ width: "2.4rem", height: "2.4rem" }} />
          {resultPaperInfo?.month_level.month_start} ~{resultPaperInfo?.month_level.month_end}
          개월의 발달
        </TitleSection>
        <S.MonthImageSection>
          <UseImgix
            srcUrl={"/images/development_img.svg"}
            style={{ width: "100%", height: "22.8rem" }}
          />
        </S.MonthImageSection>
        <S.MonthContentSection>
          {resultPaperInfo?.month_level.content.split("/n").map((content: string) => (
            <ListItem key={content}>
              <IconDotSection>
                <Icon icon={"point-filled"} size={16} fill={ColorLightEltern9Base} />
              </IconDotSection>
              <ListContent>{content}</ListContent>
            </ListItem>
          ))}
        </S.MonthContentSection>
      </Section>
      <DividerSection />
    </>
  );
};

export default OverallSection;
