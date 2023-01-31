import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getNotificationList } from "../../api/notificationApi";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { newNotificationFlagstate, notificationListstate } from "../../recoil/atom";
import { getDate } from "../../utils/getDateTime";
import { NotificationType } from "../../utils/type";
import PageTitle from "./components/PageTitle";

const PageLayout = styled.div`
  margin-top: 7rem;
`;
const NoneImg = styled.img`
  width: 100%;
  margin-top: 12rem;
`;

const AlarmListWrap = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${(prop: { new: boolean }) => (prop.new ? "#EEF9F7" : "fff")};

  img {
    width: 2.8rem;
    margin-right: 1rem;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
`;

const Desc = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.8);
  margin-top: 0.5rem;
`;

const Date = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: rgba(10, 10, 10, 0.3);
  margin-top: 0.5rem;
`;

/**
 * 알람 리스트 로직
 * 1. 이전 notificationListState에 있던 알람 아이디들을 previousIdList에 push
 * 2. 새로 호출한 api 데이터를 notificationListState에 할당
 * 3. 리스트 그릴때 previousIdList안에 notificationListState에 있는 아이디가 없으면 new를 true로 할당
 */

const AlarmList = () => {
  const [notificationListState, setNotificationList] = useRecoilState(notificationListstate);
  const setNewNotificationFlag = useSetRecoilState(newNotificationFlagstate);
  const [previousIdList, setPreviousIdList] = useState<number[]>([]);
  const { data } = useQuery(queryKeys.notificationList, getNotificationList, {
    onSuccess: data => {
      const previousIdArr: number[] = [];

      if (notificationListState.length) {
        notificationListState.map((noti: NotificationType) => {
          previousIdArr.push(noti.id);
        });
      }
      setPreviousIdList(previousIdArr);
      setNotificationList(data);
    },
  });

  useEffect(() => {
    setNewNotificationFlag(false);
  }, []);

  return (
    <LayoutDetailPage>
      <PageTitle title={"알림"} />
      <PageLayout>
        {notificationListState.length ? (
          notificationListState.map((noti: NotificationType) => (
            <AlarmListWrap new={!previousIdList.includes(noti.id)}>
              <img src={`/images/icon-alarm-${noti.type}.svg`} />
              <div>
                <Title>{noti.title}</Title>
                <Desc>{noti.body}</Desc>
                <Date>{getDate(noti.created_at.substring(0, 10))}</Date>
              </div>
            </AlarmListWrap>
          ))
        ) : (
          <NoneImg src="/images/alarmlist-none-img.svg" alt="도착한 알림이 없어요." />
        )}
      </PageLayout>
    </LayoutDetailPage>
  );
};

export default AlarmList;
