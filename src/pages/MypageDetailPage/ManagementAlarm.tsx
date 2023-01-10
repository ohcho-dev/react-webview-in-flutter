import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQueries, useQuery } from "react-query";
import styled from "styled-components";
import { getAlarmConfig, updateAlarmConfig } from "../../api/mypage";
import CustomToggleSwitch from "../../components/common/CustomToggleSwitch";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { alarmType } from "../../utils/type";
import PageTitle from "./components/PageTitle";

const PageLayout = styled.div`
  margin-top: 7rem;
  padding: 0 2.5rem;
`;
const AlarmContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;
const TypeLabel = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: -0.04rem;
  color: #000000;
`;

const ManagementAlarm = () => {
  const [coaching, setCoaching] = useState<alarmType>();
  const [event, setEvent] = useState<alarmType>();

  let { data } = useQuery(queryKeys.alarmConfig, () => getAlarmConfig());

  useEffect(() => {
    setCoaching(data[0][0]);
    setEvent(data[0][1]);
  }, [data]);

  const callUpdateAlarmConfig = useMutation(updateAlarmConfig, {
    onSuccess: () => {
      console.log("update success");
    },
    onError: error => {
      throw error;
    },
  });

  useEffect(() => {
    if (coaching?.newData) {
      callUpdateAlarmConfig.mutate({ type: coaching.type, value: coaching.value });
    }
  }, [coaching]);

  useEffect(() => {
    if (event?.newData) {
      callUpdateAlarmConfig.mutate({ type: event.type, value: event.value });
    }
  }, [event]);

  const toggleCoaching = () => {
    if (coaching) {
      coaching.value === 0 && setCoaching({ ...coaching, value: 1, newData: true });
      coaching.value === 1 && setCoaching({ ...coaching, value: 0, newData: true });
    }
  };

  const toggleEvent = () => {
    event?.value === 0 && setEvent({ ...event, value: 1, newData: true });
    event?.value === 1 && setEvent({ ...event, value: 0, newData: true });
  };

  return (
    <LayoutDetailPage>
      <PageTitle title="알림 설정" />
      <PageLayout>
        {coaching && (
          <AlarmContentWrap>
            <TypeLabel>{coaching.type_label}</TypeLabel>
            <CustomToggleSwitch data={coaching} handleValue={toggleCoaching}></CustomToggleSwitch>
          </AlarmContentWrap>
        )}

        {event && (
          <AlarmContentWrap>
            <TypeLabel>{event.type_label}</TypeLabel>
            <CustomToggleSwitch data={event} handleValue={toggleEvent}></CustomToggleSwitch>
          </AlarmContentWrap>
        )}
      </PageLayout>
    </LayoutDetailPage>
  );
};

export default ManagementAlarm;
