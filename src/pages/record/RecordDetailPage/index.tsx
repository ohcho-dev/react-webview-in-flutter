import Carousel from "components/common/Carousel";
import EmptyBox from "components/common/EmptyBox";
import Text from "components/common/Text";
import VideoSection from "components/domain/coaching/videoAssignmentPage/VideoSection";
import RecordTitle from "components/domain/record/RecordTitle";
import LayoutDetailPage from "layouts/LayoutDetailPage";
import {
  ColorLightBlack7,
  ColorLightBlack9Base,
  ColorLightSlate2,
  ContentsBase1626Regular,
  TextBase1624Semibold,
  TextLg1826Semibold,
} from "lds-common/src/constants/tokens/global";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./RecordDetailPage.styled";

const RecordDetailPage = () => {
  const { recordId } = useParams();
  const navigate = useNavigate();

  return (
    <LayoutDetailPage>
      <S.RecordDetailPageWrapper>
        <VideoSection
          collapse={""}
          videoUrl={
            "https://eltern-data.s3.ap-northeast-2.amazonaws.com/biz-develop/user/task/202307/20230704-053621-89.mp4"
          }
          videoName={"걷기"}
          videoAt={"2022.10.21"}
          days_from_birth={300}
        />
        <S.ParentCommentSection>
          <RecordTitle imgUrl={"/images/record/record_pencil.svg"} title={"추억을 남겨보세요."} />
          <S.ParentComment>
            <Text variant={ContentsBase1626Regular} color={ColorLightBlack7}>
              추억을 남겨보세요.
            </Text>
          </S.ParentComment>
        </S.ParentCommentSection>
      </S.RecordDetailPageWrapper>
      <EmptyBox height="1rem" backgroundColor={ColorLightSlate2} />
      <S.RecordDetailPageWrapper>
        <RecordTitle imgUrl={"/images/record/record_graph.svg"} title={"예상 발달 단계"} />
        <S.AnticipatedStageOfDevelopmentComment>
          <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
            대근육 : 18~19개월
          </Text>
        </S.AnticipatedStageOfDevelopmentComment>
        <S.AnticipatedStageOfDevelopmentComment style={{ marginBottom: "4rem" }}>
          <Text
            variant={TextBase1624Semibold}
            color={ColorLightBlack9Base}
            style={{ marginBottom: "1rem" }}
          >
            18~19개월 대근육 특성
          </Text>
          <Text variant={ContentsBase1626Regular} color={ColorLightBlack7}>
            벽을 짚고 한 발로 먼저 올라간 후 다음 발을 계단에 올려요.
          </Text>
        </S.AnticipatedStageOfDevelopmentComment>
        <Carousel
          sliderInfoArr={[
            {
              id: 1,
              imgUrl: "/images/banner_to_program.svg",
              handleClick: () => navigate("/program"),
            },
          ]}
        />
      </S.RecordDetailPageWrapper>
    </LayoutDetailPage>
  );
};

export default RecordDetailPage;
