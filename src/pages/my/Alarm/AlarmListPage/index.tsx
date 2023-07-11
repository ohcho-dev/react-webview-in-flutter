import UseImgix from "components/common/Imgix";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import PageTitle from "../../../../components/domain/my/PageTitle";
import LayoutDetailPage from "../../../../layouts/LayoutDetailPage";
import useNotificationList from "../../../../queries/common/notification/useNotificationList";
import useUpdateNotificationCheckTime from "../../../../queries/common/notification/useUpdateNotificationCheckTime";
import { newNotificationFlagstate } from "../../../../store/common";
import { NotificationType } from "../../../../types/common";
import { getDate } from "../../../../utils/date/getDateTime";
import * as S from "./AlarmListPage.styled";

const AlarmListPage = () => {
  const navigate = useNavigate();
  const setNewNotificationFlag = useSetRecoilState(newNotificationFlagstate);
  const { data } = useNotificationList();
  const { mutate: updateNotificationTime } = useUpdateNotificationCheckTime();

  useEffect(() => {
    setNewNotificationFlag(false);
    updateNotificationTime();
  }, []);

  return (
    <LayoutDetailPage style={{ overflowY: "hidden" }}>
      <PageTitle title={"알림"} />
      {data.list.length ? (
        <S.AlarmListWrap>
          {data.list.map(
            ({
              created_at,
              detail: { task_id, paper_type, paper_url, test_id },
              id,
              title,
              body,
              type,
            }: NotificationType) => (
              <S.AlarmWrap
                new={new Date(created_at) > new Date(data.last_checked_at)}
                onClick={() => {
                  if (type === "NTCH_VIDEO_REJECT") {
                    navigate(`/coaching/videoAssignment/${task_id}`);
                  } else if (type === "NTCH_RESULT_PAPER") {
                    if (paper_type === "TTPTY_EXTERNAL_URL") {
                      navigate(paper_url);
                    } else {
                      navigate(`/coaching/daycare/resultPaper/${test_id}`);
                    }
                  }
                }}
                key={id}
              >
                {/* 아이콘 하나로 통일했습니다. 추후 알림 종류가 여러개로 나눠질 경우 그에 맞게 수정 필요합니다. */}
                <UseImgix srcUrl={`/images/icon-alarm-NTCH_VIDEO_REJECT.svg`} alt="alarm icon" />
                <div>
                  <S.Title>{title}</S.Title>
                  <S.Desc>{body}</S.Desc>
                  <S.DateTime>{getDate(created_at.substring(0, 10))}</S.DateTime>
                </div>
              </S.AlarmWrap>
            ),
          )}
        </S.AlarmListWrap>
      ) : (
        <S.ImgWrap>
          <S.NoneImg>
            <UseImgix
              srcUrl="/images/icon-sparkle.png"
              alt="도착한 알림이 없어요."
              style={{ width: "100%" }}
            />
          </S.NoneImg>
          <S.NoneTitle>도착한 알림이 없어요.</S.NoneTitle>
          <S.NoneDesc>중요한 정보가 생기면 바로 알려드릴게요.</S.NoneDesc>
        </S.ImgWrap>
      )}
    </LayoutDetailPage>
  );
};

export default AlarmListPage;
