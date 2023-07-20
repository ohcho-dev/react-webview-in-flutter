import * as S from "./AppliedProgramListPage.styled";
import { Suspense, useEffect, useState } from "react";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import PageTitle from "../../../components/domain/my/PageTitle";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import usePurchasedClasses from "../../../queries/domain/my/usePurchasedClasses";
import usePurchasedCoaching from "../../../queries/domain/my/usePurchasedCoaching";
import NoAppliedProgram from "components/domain/my/NoAppliedProgram";
import { AppliedClassType, AppliedCoachingType } from "types/domain/my";
import AppliedProgramItem from "components/domain/my/AppliedProgramItem";

const TabValue = ["코칭", "클래스"];

const AppliedProgramListPage = () => {
  const [selectedTab, setSelectedTab] = useState(TabValue[0]);

  const { data: purchasedCoachingList } = usePurchasedCoaching(selectedTab);
  const { data: purchasedClassList } = usePurchasedClasses(selectedTab);

  useEffect(() => {
    document.getElementById("list-scroll")?.scrollTo({ top: 0 });
  }, [selectedTab]);

  return (
    <LayoutDetailPage>
      <PageTitle title="프로그램 신청 내역" />
      <S.PageLayout>
        <S.TabWrapper>
          {TabValue.map(tab => (
            <S.TabItem
              key={tab}
              tab={tab}
              selectedTab={selectedTab}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </S.TabItem>
          ))}
        </S.TabWrapper>
        <S.ListScroll id="list-scroll">
          <Suspense fallback={<LoadingSpinner />}>
            {selectedTab === "코칭" &&
              (purchasedCoachingList[0]?.length ? (
                purchasedCoachingList[0].map(
                  (item: { data: AppliedCoachingType[]; purchase_date: string }) =>
                    item.data.map(coaching => {
                      return (
                        <AppliedProgramItem
                          key={coaching.id}
                          programInfo={coaching}
                          purchase_date={item.purchase_date}
                          name={coaching.coaching_name}
                        />
                      );
                    }),
                )
              ) : (
                <NoAppliedProgram selectedTab="코칭" />
              ))}
            {selectedTab === "클래스" &&
              (purchasedClassList[0]?.length ? (
                purchasedClassList[0].map(
                  (item: { data: AppliedClassType[]; purchase_date: string }) =>
                    item.data.map(appliedClass => {
                      return (
                        <AppliedProgramItem
                          key={appliedClass.id}
                          programInfo={appliedClass}
                          purchase_date={item.purchase_date}
                          name={appliedClass.class_name}
                        />
                      );
                    }),
                )
              ) : (
                <NoAppliedProgram selectedTab="클래스" />
              ))}
          </Suspense>
        </S.ListScroll>
      </S.PageLayout>
    </LayoutDetailPage>
  );
};

export default AppliedProgramListPage;
