import styled from "styled-components";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
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

const AlarmList = () => {
  return (
    <LayoutDetailPage>
      <PageTitle title={"알림"} />

      <PageLayout>
        {/* <NoneImg src="/images/alarmlist-none-img.svg" alt="도착한 알림이 없어요." /> */}

        <AlarmListWrap new={true}>
          <img src="/images/icon-alarm-1.svg" />
          <div>
            <Title>영상 재등록이 필요해요.</Title>
            <Desc>나나의 소근육 검사 영상 재등록이 필요합니다.</Desc>
            <Date>2022.09.20</Date>
          </div>
        </AlarmListWrap>
        <AlarmListWrap new={true}>
          <img src="/images/icon-alarm-1.svg" />
          <div>
            <Title>영상 재등록이 필요해요.</Title>
            <Desc>나나의 소근육 검사 영상 재등록이 필요합니다.</Desc>
            <Date>2022.09.20</Date>
          </div>
        </AlarmListWrap>
        <AlarmListWrap new={true}>
          <img src="/images/icon-alarm-1.svg" />
          <div>
            <Title>영상 재등록이 필요해요.</Title>
            <Desc>나나의 소근육 검사 영상 재등록이 필요합니다.</Desc>
            <Date>2022.09.20</Date>
          </div>
        </AlarmListWrap>
        <AlarmListWrap new={true}>
          <img src="/images/icon-alarm-1.svg" />
          <div>
            <Title>영상 재등록이 필요해요.</Title>
            <Desc>나나의 소근육 검사 영상 재등록이 필요합니다.</Desc>
            <Date>2022.09.20</Date>
          </div>
        </AlarmListWrap>
        <AlarmListWrap new={true}>
          <img src="/images/icon-alarm-1.svg" />
          <div>
            <Title>영상 재등록이 필요해요.</Title>
            <Desc>나나의 소근육 검사 영상 재등록이 필요합니다.</Desc>
            <Date>2022.09.20</Date>
          </div>
        </AlarmListWrap>
        <AlarmListWrap new={true}>
          <img src="/images/icon-alarm-1.svg" />
          <div>
            <Title>영상 재등록이 필요해요.</Title>
            <Desc>나나의 소근육 검사 영상 재등록이 필요합니다.</Desc>
            <Date>2022.09.20</Date>
          </div>
        </AlarmListWrap>
      </PageLayout>
    </LayoutDetailPage>
  );
};

export default AlarmList;
