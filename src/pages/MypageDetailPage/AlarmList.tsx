import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getNotificationList, updateNotificationCheckTime } from "../../api/notificationApi";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { newNotificationFlagstate } from "../../recoil/atom";
import { getDate } from "../../utils/getDateTime";
import { NotificationType } from "../../utils/type";
import PageTitle from "./components/PageTitle";

const ImgWrap = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NoneImg = styled.img`
  width: 26rem;
  height: 17rem;
`;

const AlarmListWrap = styled.div`
  height: 100%;
  overflow-y: auto;
  margin-top: 6rem;
`;

const AlarmWrap = styled.div`
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

const AlarmList = () => {
  const setNewNotificationFlag = useSetRecoilState(newNotificationFlagstate);
  const { data } = useQuery(queryKeys.notificationList, getNotificationList);
  const setNotificationTime = useMutation(updateNotificationCheckTime);

  useEffect(() => {
    setNewNotificationFlag(false);
    // last_checked_at api 호출
    setNotificationTime.mutate();
  }, []);

  return (
    <LayoutDetailPage>
      <PageTitle title={"알림"} />
      {data.list.length ? (
        <AlarmListWrap>
          {data.list.map((noti: NotificationType) => (
            <AlarmWrap new={noti.created_at > data.last_checked_at}>
              <img src={`/images/icon-alarm-${noti.type}.svg`} />
              <div>
                <Title>{noti.title}</Title>
                <Desc>{noti.body}</Desc>
                <Date>{getDate(noti.created_at.substring(0, 10))}</Date>
              </div>
            </AlarmWrap>
          ))}
        </AlarmListWrap>
      ) : (
        <ImgWrap>
          <NoneImg src="/images/alarmlist-none-img.svg" alt="도착한 알림이 없어요." />
        </ImgWrap>
      )}
    </LayoutDetailPage>
  );
};

export default AlarmList;
