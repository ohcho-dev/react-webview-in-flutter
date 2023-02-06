import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Button from "../../components/common/Button";
import { BODY_1, STB_20 } from "../../constant/font";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { useQuery } from "react-query";
import { queryKeys } from "../../constant/queryKeys";
import { getVideoAssignmentResult } from "../../api/coachingApi";
import { useLocation, useParams } from "react-router-dom";
import { VideoAssignmentResultType } from "../../utils/type";
import { getDate } from "../../utils/getDateTime";
import { NativeFunction } from "../../utils/NativeFunction";
import { useRecoilValue } from "recoil";
import { selectedChildInfoState } from "../../recoil/atom";

type collapseType = "" | "open" | "close";

const PageWrapper = styled.div`
  padding: 2rem;
`;

const PageTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;

  img {
    width: 2.4rem;
  }
`;

const closeVideoAnimation = keyframes`
  0% {
    height: 20rem;
  }
  100%{
    height: 0rem;
  }
`;

const closeVideoSectionAnimation = keyframes`
  0% {
    height: 27rem;
  }

  100%{
    height: 7rem;
  }
`;

const openVideoAnimation = keyframes`
  0% {
    height: 0rem;
  }
  100%{
    height: 20rem;
  }
`;

const openVideoSectionAnimation = keyframes`
  0% {
    height: 7rem;
  }

  100%{
    height: 27rem;
  }
`;

const VideoSection = styled.div`
  width: 100%;
  height: ${(props: { collapse: collapseType }) => {
    if (props.collapse === "open" || !props.collapse) {
      return "27rem";
    } else if (props.collapse === "close") {
      return "7rem";
    }
  }};

  margin-bottom: 1.5rem;
  animation: ${(props: { collapse: collapseType }) => {
    if (props.collapse === "open") {
      return css`
        ${openVideoSectionAnimation} 0.5s
    linear
      `;
    } else if (props.collapse === "close") {
      return css`
        ${closeVideoSectionAnimation} 0.5s
    linear
      `;
    }
  }};
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: ${(props: { collapse: collapseType }) => {
    if (props.collapse === "open" || !props.collapse) {
      return "20rem";
    } else if (props.collapse === "close") {
      return "0rem";
    }
  }};
  animation: ${(props: { collapse: collapseType }) => {
    if (props.collapse === "open") {
      return css`
        ${openVideoAnimation} 0.5s
    linear
      `;
    } else if (props.collapse === "close") {
      return css`
        ${closeVideoAnimation} 0.5s
    linear
      `;
    }
  }};

  video {
    border-radius: 0.8rem 0.8rem 0rem 0rem;
    /* position: relative; */
    isolation: isolate;
    overflow: hidden;
  }
`;

const VideoInfoSection = styled.div`
  height: 7rem;

  display: flex;
  flex-direction: column;

  background-color: #f6f6f6;

  border: 1px solid #cdcdcd;
  border-radius: ${(props: { collapse: collapseType }) => {
    if (props.collapse === "open" || !props.collapse) {
      return "0rem 0rem 0.8rem 0.8rem";
    } else if (props.collapse === "close") {
      return "0.8rem";
    }
  }};

  padding: 1.2rem;
`;

const RecordDate = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  color: rgba(10, 10, 10, 0.5);

  margin-top: 0.5rem;
`;

const FileInformSection = styled.div`
  width: 100%;
  min-height: 20rem;

  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #eef9f7;
  border-radius: 0.8rem;
  border: 1px solid rgba(90, 196, 177, 0.45);

  img {
    width: 100%;
  }
`;

const RejectReasonSection = styled.div`
  width: 100%;
  margin-top: 2.5rem;
`;

const Reason = styled.div`
  width: 100%;
  height: 4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 1.8rem;
  border-bottom: ${(props: { notLastIndex: boolean }) =>
    props.notLastIndex ? "0.1rem solid #d6d6d6" : "none"};

  span {
    font-weight: 400;
    font-size: 1.4rem;
    color: rgba(10, 10, 10, 0.8);
  }
`;

const VideoAssignmentPage = (): JSX.Element => {
  const { state } = useLocation();
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
          onClick={() => {
            NativeFunction(
              "routeNativeScreen",
              `coachingVideoDetail@${state.task_id}@${childInfo.id}`,
            );
          }}
          // onClick={async () =>
          //   await callNativeFunction().then(function () {
          //     navigate(`/coaching/coaching-detail/${state.coaching_id}`);
          //   })
          // }
        />
      }
    >
      <PageWrapper>
        <PageTitleWrapper>
          <STB_20>촬영 영상</STB_20>
          <img
            alt="arrow"
            src={
              collapse === "open" || collapse === ""
                ? `/images/icon-videoAssignment-arrow-up.svg`
                : `/images/icon-videoAssignment-arrow-down.svg`
            }
            onClick={handleArrowClick}
          />
        </PageTitleWrapper>
        <VideoSection collapse={collapse}>
          <VideoWrapper collapse={collapse}>
            <video controls width={"100%"} height={"100%"} playsInline>
              <source src={videoAssignmentResult?.video} type="video/mp4"></source>
            </video>
          </VideoWrapper>
          <VideoInfoSection collapse={collapse}>
            <BODY_1 style={{ color: "rgba(0, 0, 0, 0.8)" }}>{videoAssignmentResult?.name}</BODY_1>
            <RecordDate>
              촬영일:{" "}
              {videoAssignmentResult &&
                videoAssignmentResult.video_at &&
                getDate(videoAssignmentResult.video_at)}{" "}
              ({videoAssignmentResult?.days_from_birth}일)
            </RecordDate>
          </VideoInfoSection>
        </VideoSection>
        <FileInformSection>
          <img alt="inform img" src={`/images/video-${videoAssignmentResult?.status}-img.svg`} />
          {videoAssignmentResult?.status === "TSST_REJECT" && (
            <RejectReasonSection>
              {videoAssignmentResult.admin_comment.map((comment: string, index: number) => (
                <div key={comment + index}>
                  <Reason notLastIndex={index !== videoAssignmentResult.admin_comment.length - 1}>
                    <span>{comment}</span>
                  </Reason>
                </div>
              ))}
            </RejectReasonSection>
          )}
        </FileInformSection>
      </PageWrapper>
    </LayoutDetailPage>
  );
};

export default VideoAssignmentPage;
