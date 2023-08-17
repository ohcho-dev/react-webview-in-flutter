import * as S from "./AppliedProgramListPage.styled";
import { useEffect, useState } from "react";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import usePurchasedClasses from "../../../queries/domain/my/usePurchasedClasses";
import usePurchasedCoaching from "../../../queries/domain/my/usePurchasedCoaching";
import NoAppliedProgram from "components/domain/my/NoAppliedProgram";
import { AppliedClassType, AppliedCoachingType } from "types/domain/my";
import AppliedProgramItem from "components/domain/my/AppliedProgramItem";
import AppliedProgramSwitch from "components/domain/my/AppliedProgramList/AppliedProgramSwitch";
import Text from "components/common/Text";
import EmptyBox from "components/common/EmptyBox";
import { ColorLightBlack12, TextLg1826Semibold } from "lds-common/src/constants/tokens/global";

const AppliedProgramListPage = () => {
  const [selectedTab, setSelectedTab] = useState(true);

  const { data: purchasedCoachingList, isLoading: coachingLoading } = usePurchasedCoaching();
  const { data: purchasedClassList, isLoading: classLoading } = usePurchasedClasses();

  useEffect(() => {
    document.getElementById("list-scroll")?.scrollTo({ top: 0 });
  }, [selectedTab]);

  return (
    <LayoutDetailPage>
      <S.TitleSection>
        <Text variant={TextLg1826Semibold} color={ColorLightBlack12}>
          프로그램 신청 내역
        </Text>
        <EmptyBox height="1.2rem" />
        <AppliedProgramSwitch
          toggle={selectedTab}
          handleToggle={() => setSelectedTab(prev => !prev)}
        />
        <EmptyBox height="1rem" />
      </S.TitleSection>
      <S.ListScroll id="list-scroll">
        {selectedTab &&
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
            <NoAppliedProgram selectedTab />
          ))}
        {!selectedTab &&
          (purchasedClassList[0]?.length ? (
            purchasedClassList[0].map((item: { data: AppliedClassType[]; purchase_date: string }) =>
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
            <NoAppliedProgram selectedTab={false} />
          ))}
      </S.ListScroll>
    </LayoutDetailPage>
  );
};

export default AppliedProgramListPage;
