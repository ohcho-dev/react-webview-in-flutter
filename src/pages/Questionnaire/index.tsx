import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getSurveyQuestionList } from "../../api/questionnaireApi";
import Button from "../../components/common/Button";
import Chip from "../../components/common/Chip";
import { queryKeys } from "../../constant/queryKeys";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import {
  questionnarieState,
  startQuestionOrderNumState,
  surveyAnswerState,
  surveyCoachingIdState,
} from "../../recoil/atom";
import { QuestionnaireType, SurveyInfoType } from "../../utils/type";

interface QuestionnaireProps {}

const QuestionnarieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

const QuestionnarieTitle = styled.div`
  font-size: 2.6rem;
  font-weight: 600;

  margin-bottom: 1rem;
`;

const QuestionnarieDescription = styled.div`
  width: 100%;
  line-height: 2.2rem;
  font-weight: 400;
  font-size: 1.6rem;

  margin-top: 1.5rem;
  margin-bottom: 4rem;
`;

const HowToSection = styled.div`
  img {
    width: 100%;
  }
`;

const Questionnaire = (): JSX.Element => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const setQuestionnaireState = useSetRecoilState(questionnarieState);
  const [surveyAnswer, setSurveyAnswer] = useRecoilState(surveyAnswerState);
  const setSurveyCoachingId = useSetRecoilState(surveyCoachingIdState);
  const [startOrderNum, setStartQuestionOrderNum] = useRecoilState(startQuestionOrderNumState);
  // const { data: surveyQuestionList } = useQuery(queryKeys.surveyQuestionList, () =>
  //   getSurveyQuestionList(id),
  // );
  const data: QuestionnaireType = {
    id: 1, //유저별 과제 ID
    name: "대근육 발달 검사", //과제 이름
    target_score: 5, //설문지 다음단계 판정 기준 점수
    start_survey_id: 5, //아이 월령에 따라 최초 시작할 설문지 ID
    survey: [
      //설문지
      {
        id: 1, //설문지 ID
        name: "8-9개월 대근육 발달 검사", //설문지 이름
        order: 0, //설문지 순서
        question: [
          //문제
          {
            id: 1, //문제 ID
            content: "앉은 자세를 30초 정도 유지할 수 있어요.", //문제 내용
            order: 1, //문제 순서
            item: [
              //문제에 포함된 보기
              {
                id: 1, //보기 ID
                order: 1, //보기 순서
                content: "능숙하게 잘해요", //보기 내용
                score: 2, //해당 보기 선택시 점수
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 1,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
          {
            id: 2,
            content: "네 발로 길 수 있어요.",
            order: 2,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 2,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
          {
            id: 3,
            content: "누워 있다 혼자 앉을 수 있어요.",
            order: 3,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 2,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "19-22개월 대근육 발달 검사",
        order: 1,
        question: [
          {
            id: 1,
            content: "서 있을수있어요.",
            order: 1,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 2,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
          {
            id: 2,
            content: "뛸 수 있어요.",
            order: 2,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 1,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
          {
            id: 3,
            content: "구를 수 있어요.",
            order: 3,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 1,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "9-10개월 대근육 발달 검사",
        order: 2,
        question: [
          {
            id: 1,
            content: "앉은 자세를 30초 정도 유지할 수 있어요.",
            order: 1,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 2,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
          {
            id: 2,
            content: "네 발로 길 수 있어요.",
            order: 2,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 1,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
          {
            id: 3,
            content: "누워 있다 혼자 앉을 수 있어요.",
            order: 3,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 1,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "36-48개월 대근육 발달 검사",
        order: 3,
        question: [
          {
            id: 1,
            content: "앉은 자세를 30초 정도 유지할 수 있어요.",
            order: 1,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 2,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
          {
            id: 2,
            content: "네 발로 길 수 있어요.",
            order: 2,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 1,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
          {
            id: 3,
            content: "누워 있다 혼자 앉을 수 있어요.",
            order: 3,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 1,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "60~78개월 소근육 발달 검사",
        order: 4,
        question: [
          {
            id: 1,
            content: "앉은 자세를 30초 정도 유지할 수 있어요.",
            order: 1,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 2,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
          {
            id: 2,
            content: "네 발로 길 수 있어요.",
            order: 2,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 1,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
          {
            id: 3,
            content: "누워 있다 혼자 앉을 수 있어요.",
            order: 3,
            item: [
              {
                id: 1,
                order: 1,
                content: "능숙하게 잘해요",
                score: 2,
              },
              {
                id: 2,
                order: 2,
                content: "때때로 가능해요",
                score: 1,
              },
              {
                id: 3,
                order: 3,
                content: "아직 못해요",
                score: 0,
              },
            ],
          },
        ],
      },
    ],
  };

  useEffect(() => {
    if (data) {
      setQuestionnaireState(data);
      setSurveyAnswer({ survey: [], task_id: data.id });
      setSurveyCoachingId(state.coachingId);
      const selectedSurvey: SurveyInfoType[] = data.survey.filter(
        survey => survey.id.toString() === data.start_survey_id.toString(),
      );
      setStartQuestionOrderNum(selectedSurvey[0].order);
    }
  }, []);

  return (
    <LayoutDetailPage
      bottomBtn
      bottomBtnElement={
        <Button
          content="설문하기"
          theme="black"
          onClick={() => navigate(`/coaching/questionnarie/form/${startOrderNum}`)}
        />
      }
    >
      <QuestionnarieWrapper>
        <QuestionnarieTitle>{data.name}</QuestionnarieTitle>
        <Chip status="TSTY_SURVEY" />
        <QuestionnarieDescription>
          아이가 낙서하는 모습을 기록해볼까요?모습을 기록하면 발달 과정을 확인하고 또래 친구들의
          발달은 어느 정도인지 알아볼 수 있어요.
        </QuestionnarieDescription>
        <HowToSection>
          <img alt="how to img" src="/images/how-to-img.svg" />
        </HowToSection>
      </QuestionnarieWrapper>
    </LayoutDetailPage>
  );
};

export default Questionnaire;
