import Text from "components/common/Text";
import {
  ColorLightBlack6,
  ColorLightBlack9Base,
  TextLg1826Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import { collapseType } from "pages/coaching/VideoAssignmentPage";
import { getDate } from "utils/date/getDateTime";
import * as S from "./VideoSection.styled";

interface VideoSectionProps {
  collapse: collapseType;
  videoUrl: string;
  videoName: string;
  videoAt: string;
  days_from_birth: number;
}

const VideoSection = ({
  collapse,
  videoAt,
  videoName,
  videoUrl,
  days_from_birth,
}: VideoSectionProps) => {
  return (
    <S.VideoSection collapse={collapse}>
      <S.VideoWrapper collapse={collapse}>
        <video controls width={"100%"} height={"100%"} playsInline>
          <source src={videoUrl} type="video/mp4"></source>
        </video>
      </S.VideoWrapper>
      <S.VideoInfoSection collapse={collapse}>
        <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
          {videoName}
        </Text>
        <Text variant={TextSm1420Regular} color={ColorLightBlack6}>{`촬영일: ${getDate(
          videoAt,
        )}(${days_from_birth}일)`}</Text>
      </S.VideoInfoSection>
    </S.VideoSection>
  );
};

export default VideoSection;
