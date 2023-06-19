import { Suspense, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UseImgix from "../../../components/common/Imgix";
import LoadingSpinner from "../../../components/common/LoadingSpinner";
import PageTitle from "../../../components/domain/my/PageTitle";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import { getPurchaseClasses, getPurchaseCoaching } from "../../../queries/domain/my/mypage";
import { myQueryKeys } from "../../../queries/domain/my/myQueryKeys";
import { getDate } from "../../../utils/date/getDateTime";
import getGender from "../../../utils/user/getGender";

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
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  &::-webkit-scrollbar-thumb {
    display: none; /* Chrome, Safari, Opera*/
  }
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
  color: ${(prop: { status?: string }) =>
    prop.status === "결제 취소" ? "rgba(10, 10, 10, 0.5)" : "#5ac4b1"};
  background: #ffffff;
  border: 0.5px solid
    ${(prop: { status?: string }) =>
      prop.status === "결제 취소" ? "rgba(10, 10, 10, 0.5)" : "#5ac4b1"};
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
  display: grid;
  grid-template-columns: auto 10rem;
  width: 100%;
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

const ThumbnailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const NotFoundData = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 25.9rem;
    height: 9rem;
    margin-top: 11rem;
  }
`;

const NotFoundTitle = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-top: 2.9rem;
`;
const NotFoundDesc = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.45);
  margin-top: 0.6rem;
`;
const LinkBtn = styled.div`
  width: 100%;
  height: 5rem;
  background: #000;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 2.5rem;
`;

const AppliedProgramListPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(TabValue[0]);

  const { data: purchasedCoachingList } = useQuery(
    myQueryKeys.purchaseCoaching,
    getPurchaseCoaching,
    {
      enabled: selectedTab === "코칭",
    },
  );
  const { data: purchasedClassList } = useQuery(myQueryKeys.purchaseClasses, getPurchaseClasses, {
    enabled: selectedTab === "클래스",
  });

  useEffect(() => {
    document.getElementById("list-scroll")?.scrollTo({ top: 0 });
  }, [selectedTab]);

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
        <ListScroll id="list-scroll">
          <Suspense fallback={<LoadingSpinner />}>
            {selectedTab === "코칭" &&
              (purchasedCoachingList[0]?.length ? (
                purchasedCoachingList[0].map((item: { [key: string]: any }) =>
                  item.data.map((detailData: { [key: string]: any }) => {
                    return (
                      <ListWrap key={detailData.id}>
                        <ListHeader>
                          <div>
                            <PurchaseDate>{getDate(item.purchase_date)}</PurchaseDate>
                            <PaymentStatus status={detailData.payment_status_label}>
                              {detailData.payment_status_label}
                            </PaymentStatus>
                          </div>
                          <PaymentCode>{detailData.payment_code}</PaymentCode>
                        </ListHeader>
                        <ListContent>
                          <div>
                            <Title>{detailData.coaching_name}</Title>
                            {detailData.payment_price ? (
                              <Price>{detailData.payment_price.toLocaleString("ko-KR")}원</Price>
                            ) : (
                              <Price>무료</Price>
                            )}
                            <ChildInfo>
                              신청 아이 : {detailData.child_name} (
                              {getDate(detailData.child_birth_date)}){" "}
                              {getGender(detailData.child_gender)}아
                            </ChildInfo>
                          </div>
                          <ThumbnailWrapper>
                            <UseImgix
                              srcUrl="/images/coaching/coaching_new_main_0207.png"
                              alt="Coaching Thumbnail"
                              style={{
                                width: "8.5rem",
                                height: "7rem",
                                objectFit: "cover",
                                borderRadius: "0.5rem",
                              }}
                            />
                          </ThumbnailWrapper>
                        </ListContent>
                      </ListWrap>
                    );
                  }),
                )
              ) : (
                <NotFoundData>
                  <UseImgix srcUrl="/images/icon-sparkle.png" alt="thumbnail" />
                  <NotFoundTitle>아직 신청한 {selectedTab + "이"} 없어요.</NotFoundTitle>
                  <NotFoundDesc>우리 아이 맞춤 {selectedTab + "을"} 신청해 보세요.</NotFoundDesc>
                  <LinkBtn onClick={() => navigate("/program", { replace: true })}>
                    프로그램 보러가기
                  </LinkBtn>
                </NotFoundData>
              ))}
            {selectedTab === "클래스" &&
              (purchasedClassList[0]?.length ? (
                purchasedClassList[0].map((item: { [key: string]: any }) =>
                  item.data.map((detailData: { [key: string]: any }) => {
                    return (
                      <ListWrap key={detailData.id}>
                        <ListHeader>
                          <div>
                            <PurchaseDate>{getDate(item.purchase_date)}</PurchaseDate>
                            <PaymentStatus>{detailData.payment_status_label}</PaymentStatus>
                          </div>
                          <PaymentCode>{detailData.class_place_type_label}</PaymentCode>
                        </ListHeader>
                        <ListContent>
                          <div>
                            <Title>{detailData.class_name}</Title>
                            {detailData.payment_price ? (
                              <Price>{detailData.payment_price.toLocaleString("ko-KR")}원</Price>
                            ) : (
                              <Price>무료</Price>
                            )}
                            <ChildInfo>
                              신청 아이 : {detailData.child_name} (
                              {getDate(detailData.child_birth_date)}){" "}
                              {getGender(detailData.child_gender)}아
                            </ChildInfo>
                          </div>
                          <ThumbnailWrapper>
                            <UseImgix
                              srcUrl="/images/coaching/coaching_new_main_0207.png"
                              alt="Coaching Thumbnail"
                              style={{
                                width: "8.5rem",
                                height: "7rem",
                                objectFit: "cover",
                                borderRadius: "0.5rem",
                              }}
                            />
                          </ThumbnailWrapper>
                        </ListContent>
                      </ListWrap>
                    );
                  }),
                )
              ) : (
                <NotFoundData>
                  <UseImgix srcUrl="/images/icon-sparkle.png" alt="thumbnail" />
                  <NotFoundTitle>아직 신청한 {selectedTab + "가"} 없어요.</NotFoundTitle>
                  <NotFoundDesc>우리 아이 맞춤 {selectedTab + "를"} 신청해 보세요.</NotFoundDesc>
                  <LinkBtn onClick={() => navigate("/program", { replace: true })}>
                    프로그램 보러가기
                  </LinkBtn>
                </NotFoundData>
              ))}
          </Suspense>
        </ListScroll>
      </PageLayout>
    </LayoutDetailPage>
  );
};

export default AppliedProgramListPage;
