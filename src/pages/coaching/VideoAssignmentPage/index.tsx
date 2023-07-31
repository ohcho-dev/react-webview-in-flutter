import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Button from "../../../components/common/Button";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import { NativeFunction } from "../../../utils/app/NativeFunction";
import UseImgix from "../../../components/common/Imgix";
import { selectedChildInfoState } from "../../../store/common";
import * as S from "./videoAssignmentPage.styled";
import useVideoAssignmentResult from "../../../queries/domain/coaching/useVideoAssignmentResult";
import VideoSection from "components/domain/coaching/videoAssignmentPage/VideoSection";
import Text from "components/common/Text";
import {
  ColorLightBlack9Base,
  ContentsXxl2232Semibold,
} from "lds-common/src/constants/tokens/global";
export type collapseType = "" | "open" | "close";

const VideoAssignmentPage = (): JSX.Element => {
  const { id } = useParams();
  const childInfo = useRecoilValue(selectedChildInfoState);
  const [collapse, setCollapse] = useState<collapseType>("");
  const { data: videoAssignmentResult } = useVideoAssignmentResult(id);

  const handleArrowClick = () => {
    if (!collapse || collapse === "open") {
      setCollapse("close");
    } else if (collapse === "close") {
      setCollapse("open");
    }
  };

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
        />
      }
    >
      <S.PageWrapper>
        <S.PageTitleWrapper>
          <Text variant={ContentsXxl2232Semibold} color={ColorLightBlack9Base}>
            촬영 영상
          </Text>
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
        <VideoSection
          collapse={collapse}
          videoUrl={""}
          videoName={videoAssignmentResult?.name ? videoAssignmentResult.name : ""}
          videoAt={videoAssignmentResult?.video_at ? videoAssignmentResult.video_at : ""}
          days_from_birth={
            videoAssignmentResult?.days_from_birth ? videoAssignmentResult.days_from_birth : 0
          }
        />
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
