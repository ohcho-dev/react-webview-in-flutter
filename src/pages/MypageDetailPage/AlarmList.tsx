import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
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
  width: 25.9rem;
  height: 9rem;
`;
const NoneTitle = styled.span`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: -0.04rem;
  color: #0a0a0a;
  margin-top: 2.8rem;
`;
const NoneDesc = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.04rem;
  color: rgba(10, 10, 10, 0.45);
  margin: 0.6rem auto 2.7rem;
`;

const AlarmListWrap = styled.div`
  height: calc(100vh - 13rem);
  overflow-y: auto;
  margin-top: 6rem;
`;

const AlarmWrap = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${(prop: { new: any }) => (prop.new ? "#EEF9F7" : "fff")};

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

const DateTime = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: rgba(10, 10, 10, 0.3);
  margin-top: 0.5rem;
`;

const AlarmList = () => {
  const navigate = useNavigate();
  const setNewNotificationFlag = useSetRecoilState(newNotificationFlagstate);
  const { data } = useQuery(queryKeys.notificationList, getNotificationList);
  const setNotificationTime = useMutation(updateNotificationCheckTime);

  useEffect(() => {
    setNewNotificationFlag(false);
    // last_checked_at api 호출
    setNotificationTime.mutate();
  }, []);

  return (
    <LayoutDetailPage style={{ overflowY: "hidden" }}>
      <PageTitle title={"알림"} />
      {data.list.length ? (
        <AlarmListWrap>
          {data.list.map((noti: NotificationType) => (
            <AlarmWrap
              new={new Date(noti.created_at) > new Date(data.last_checked_at)}
              onClick={() =>
                navigate(`/coaching/videoAssignment/${noti.detail?.task_id}`, {
                  state: { task_id: noti.detail.coaching_id },
                })
              }
              key={noti.id}
            >
              <img src={`/images/icon-alarm-${noti.type}.svg`} />
              <div>
                <Title>{noti.title}</Title>
                <Desc>{noti.body}</Desc>
                <DateTime>{getDate(noti.created_at.substring(0, 10))}</DateTime>
              </div>
            </AlarmWrap>
          ))}
        </AlarmListWrap>
      ) : (
        <ImgWrap>
          <NoneImg src="/images/icon-sparkle.png" alt="도착한 알림이 없어요." />
          <NoneTitle>도착한 알림이 없어요.</NoneTitle>
          <NoneDesc>중요한 정보가 생기면 바로 알려드릴게요.</NoneDesc>
        </ImgWrap>
      )}
    </LayoutDetailPage>
  );
};

export default AlarmList;
