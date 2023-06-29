import { useEffect, useState } from "react";
import styled from "styled-components";
import { AlarmConfigItemType } from "types/apis/my";
import CustomToggle from "../../../../components/common/CustomToggle";
import PageTitle from "../../../../components/domain/my/PageTitle";
import LayoutDetailPage from "../../../../layouts/LayoutDetailPage";
import useAlarmConfig from "../../../../queries/domain/my/useAlarmConfig";
import useUpdateAlarmConfig from "../../../../queries/domain/my/useUpdateAlarmConfig";

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

const AlarmManagementPage = () => {
  const [coaching, setCoaching] = useState<AlarmConfigItemType>();
  const [event, setEvent] = useState<AlarmConfigItemType>();

  const { data: alarmConfigList } = useAlarmConfig();
  const { mutate: callUpdateAlarmConfig } = useUpdateAlarmConfig();

  useEffect(() => {
    if (alarmConfigList[0].length) {
      setCoaching(
        alarmConfigList[0].find((alarm: AlarmConfigItemType) => alarm.type === "NTTY_COACHING"),
      );
      setEvent(
        alarmConfigList[0].find((alarm: AlarmConfigItemType) => alarm.type === "NTTY_MARKETING"),
      );
    }
  }, [alarmConfigList]);

  const handleToggleChange = (type: "NTTY_COACHING" | "NTTY_MARKETING") => {
    callUpdateAlarmConfig({
      type: type,
      value:
        type === "NTTY_COACHING" ? (coaching?.value === 1 ? 0 : 1) : event?.value === 1 ? 0 : 1,
    });
  };

  return (
    <LayoutDetailPage>
      <PageTitle title="알림 설정" />
      <PageLayout>
        {coaching && (
          <AlarmContentWrap>
            <TypeLabel>{coaching.type_label}</TypeLabel>
            <CustomToggle
              value={coaching.value === 1}
              handleValue={() => handleToggleChange("NTTY_COACHING")}
              size="md"
            />
          </AlarmContentWrap>
        )}

        {event && (
          <AlarmContentWrap>
            <TypeLabel>{event.type_label}</TypeLabel>
            <CustomToggle
              value={event.value === 1}
              handleValue={() => handleToggleChange("NTTY_MARKETING")}
              size="md"
            />
          </AlarmContentWrap>
        )}
      </PageLayout>
    </LayoutDetailPage>
  );
};

export default AlarmManagementPage;
