import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getVideoAssignmentResult } from "../../../queries/domain/coaching/coachingApi";
import Button from "../../../components/common/Button";
import { BODY_1, STB_20 } from "../../../constants/font";
import { queryKeys } from "../../../constants/queryKeys";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import { NativeFunction } from "../../../utils/app/NativeFunction";
import { getDate } from "../../../utils/date/getDateTime";
import UseImgix from "../../../components/common/Imgix";
import { VideoAssignmentResultType } from "../../../types/domain/coaching";
import { selectedChildInfoState } from "../../../store/common";
import * as S from "./videoAssignmentPage.styled";
export type collapseType = "" | "open" | "close";

const VideoAssignmentPage = (): JSX.Element => {
  const { id } = useParams();
  const childInfo = useRecoilValue(selectedChildInfoState);
  const [collapse, setCollapse] = useState<collapseType>("");
  const { data: videoAssignmentResult } = useQuery<VideoAssignmentResultType>(
    queryKeys.videoAssignmentResult,
    () => getVideoAssignmentResult(id),
  );

  const handleArrowClick = () => {
    if (!collapse || collapse === "open") {
      setCollapse("close");
    } else if (collapse === "close") {
      setCollapse("open");
    }
  };

  // function callNativeFunction() {
  //   return new Promise(function (resolve, reject) {
  //     NativeFunction("routeNativeScreen", `coachingVideoDetail@${state.task_id}@${childInfo.id}`);
  //     resolve("success");
  //   });
  // }

  return (
    <LayoutDetailPage
      bottomBtn={videoAssignmentResult?.status === "TSST_REJECT"}
      bottomBtnElement={
        <Button
          theme="black"
          content="다시 촬영하기"
          style={{ height: "5rem" }}
          onClick={() => {
            NativeFunction("routeNativeScreen", `coachingVideoDetail@${id}@${childInfo.id}`);
          }}
          // onClick={async () =>
          //   await callNativeFunction().then(function () {
          //     navigate(`/coaching/coaching-detail/${state.coaching_id}`);
          //   })
          // }
        />
      }
    >
      <S.PageWrapper>
        <S.PageTitleWrapper>
          <STB_20>촬영 영상</STB_20>
          <div onClick={handleArrowClick}>
            <UseImgix
              alt="arrow"
              srcUrl={
                collapse === "open" || collapse === ""
                  ? `/images/icon-videoAssignment-arrow-up.svg`
                  : `/images/icon-videoAssignment-arrow-down.svg`
              }
            />
          </div>
        </S.PageTitleWrapper>
        <S.VideoSection collapse={collapse}>
          <S.VideoWrapper collapse={collapse}>
            <video controls width={"100%"} height={"100%"} playsInline>
              <source src={videoAssignmentResult?.video} type="video/mp4"></source>
            </video>
          </S.VideoWrapper>
          <S.VideoInfoSection collapse={collapse}>
            <BODY_1 style={{ color: "rgba(0, 0, 0, 0.8)" }}>{videoAssignmentResult?.name}</BODY_1>
            <S.RecordDate>
              촬영일:{" "}
              {videoAssignmentResult &&
                videoAssignmentResult.video_at &&
                getDate(videoAssignmentResult.video_at)}{" "}
              ({videoAssignmentResult?.days_from_birth}일)
            </S.RecordDate>
          </S.VideoInfoSection>
        </S.VideoSection>
        <S.FileInformSection>
          <UseImgix
            alt="inform img"
            srcUrl={`/images/video-${videoAssignmentResult?.status}-img.svg`}
          />
          {videoAssignmentResult?.status === "TSST_REJECT" && (
            <S.RejectReasonSection>
              {videoAssignmentResult.admin_comment.map((comment: string, index: number) => (
                <div key={comment + index}>
                  <S.Reason notLastIndex={index !== videoAssignmentResult.admin_comment.length - 1}>
                    <span>{comment}</span>
                  </S.Reason>
                </div>
              ))}
            </S.RejectReasonSection>
          )}
        </S.FileInformSection>
      </S.PageWrapper>
    </LayoutDetailPage>
  );
};

export default VideoAssignmentPage;
