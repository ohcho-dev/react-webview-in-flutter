import CategoryResultSection from "components/domain/coaching/DaycareResultPage/CategoryResultSection";
import LanguageResultSection from "components/domain/coaching/DaycareResultPage/LanguageResultSection";
import OverallSection from "components/domain/coaching/DaycareResultPage/OverallSection";
import TabComponent from "components/domain/coaching/DaycareResultPage/TabComponent";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import useSelectedDaycareResultInfo from "queries/domain/coaching/useDaycareResultPaper";
import { useEffect, useRef } from "react";
import { UseQueryResult } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedCategoryIdState } from "store/domain/coaching";
import { DaycareResultResponseType } from "types/apis/coaching";

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

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = 0;
    }
  }, [selectedCategoryId]);

  return (
    <LayoutDetailPage>
      <div ref={divRef} style={{ height: "100%", overflowY: "auto" }}>
        <TabComponent
          selectedCategory={selectedCategoryId}
          handleCategoryClick={id => setSelectedCategoryId(id)}
        />
        {selectedCategoryId === 0 && resultPaperInfo && (
          <OverallSection resultPaperInfo={resultPaperInfo} />
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
