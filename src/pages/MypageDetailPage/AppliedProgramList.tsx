import { useState } from "react";
import { useQueries } from "react-query";
import styled from "styled-components";
import { getPurchaseClasses, getPurchaseCoaching } from "../../api/mypage";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import PageTitle from "./components/PageTitle";

const TabValue = ["코칭", "클래스"];

const PageLayout = styled.div`
  margin-top: 7rem;
`;

const TabWrapper = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f6f6f6;
  border-radius: 2.45rem;
  padding: 0.5rem;
  margin: 0 2.5rem 1rem;
`;
const TabItem = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  font-weight: ${(prop: { tab?: string; selectedTab?: string }) =>
    prop.tab === prop.selectedTab ? 600 : 400};
  color: ${(prop: { tab?: string; selectedTab?: string }) =>
    prop.tab === prop.selectedTab ? "#000" : "rgba(10, 10, 10, 0.5)"};
  background: ${(prop: { tab?: string; selectedTab?: string }) =>
    prop.tab === prop.selectedTab ? "#fff" : "none"};
  border-radius: 2.45rem;
`;
const ListScroll = styled.div`
  padding: 0 2.5rem 1rem;
  height: calc(100vh - 20rem);
  overflow: scroll;
`;
const ListWrap = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);

  &:last-child {
    border-bottom: none;
  }
`;

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const PurchaseDate = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.3);
`;

const PaymentStatus = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: center;
  letter-spacing: -0.04rem;
  color: #5ac4b1;
  background: #ffffff;
  border: 0.5px solid #5ac4b1;
  border-radius: 0.2rem;
  padding: 0 0.4rem;
  margin-left: 0.5rem;
`;

const PaymentCode = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  text-align: right;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.3);
`;

const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-bottom: 0.8rem;
`;

const Price = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
`;

const ChildInfo = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.5);
`;

const Thumbnail = styled.div`
  width: 8.5rem;
  height: 7rem;
  background-image: url(${(prop: { imgUrl?: string }) => prop.imgUrl});
  background-size: cover;
  background-position: 50% 50%;
`;

const AppliedProgramList = () => {
  const [selectedTab, setSelectedTab] = useState(TabValue[0]);
  const [purchaseCoachingData, setPurchaseCoachingData] = useState<object[]>([]);
  const [purchaseClassesData, setPurchaseClassesData] = useState<object[]>([]);

  useQueries([
    {
      queryKey: queryKeys.purchaseCoaching,
      queryFn: () => getPurchaseCoaching(),
      onSuccess: (data: any[]) => {
        setPurchaseCoachingData(data[0]);
      },
    },
    {
      queryKey: queryKeys.purchaseClasses,
      queryFn: () => getPurchaseClasses(),
      onSuccess: (data: any[]) => {
        setPurchaseClassesData(data[0]);
      },
    },
  ]);

  return (
    <LayoutDetailPage>
      <PageTitle title="프로그램 신청 내역" />
      <PageLayout>
        <TabWrapper>
          {TabValue.map(tab => (
            <TabItem
              key={tab}
              tab={tab}
              selectedTab={selectedTab}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </TabItem>
          ))}
        </TabWrapper>

        <ListScroll>
          <>
            {selectedTab === "코칭" &&
              purchaseCoachingData.map((item: { [key: string]: any }) =>
                item.data.map((detailData: { [key: string]: any }) => {
                  return (
                    <ListWrap key={detailData.payment_code}>
                      <ListHeader>
                        <div>
                          <PurchaseDate>{item.purchase_date}</PurchaseDate>
                          <PaymentStatus>{detailData.payment_status_label}</PaymentStatus>
                        </div>
                        <PaymentCode>{detailData.payment_code}</PaymentCode>
                      </ListHeader>
                      <ListContent>
                        <div>
                          <Title>{detailData.coaching_name}</Title>
                          <Price>{detailData.payment_price}</Price>
                          <ChildInfo>
                            신청아이 : {detailData.child_name} ({detailData.child_birth_date})
                          </ChildInfo>
                        </div>
                        <Thumbnail />
                      </ListContent>
                    </ListWrap>
                  );
                }),
              )}
            {selectedTab === "클래스" &&
              purchaseClassesData.map((item: { [key: string]: any }) =>
                item.data.map((detailData: { [key: string]: any }) => {
                  return (
                    <ListWrap key={detailData.payment_code}>
                      <ListHeader>
                        <div>
                          <PurchaseDate>{item.purchase_date}</PurchaseDate>
                          <PaymentStatus>{detailData.payment_status_label}</PaymentStatus>
                        </div>
                        <PaymentCode>{detailData.class_place_type_label}</PaymentCode>
                      </ListHeader>
                      <ListContent>
                        <div>
                          <Title>{detailData.class_name}</Title>
                          <Price>{detailData.payment_price}</Price>
                          <ChildInfo>
                            신청아이 : {detailData.child_name} ({detailData.child_birth_date})
                          </ChildInfo>
                        </div>
                        <Thumbnail />
                      </ListContent>
                    </ListWrap>
                  );
                }),
              )}
          </>
        </ListScroll>
      </PageLayout>
    </LayoutDetailPage>
  );
};

export default AppliedProgramList;
