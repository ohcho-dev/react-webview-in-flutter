import * as S from "./RecordTaskList.styled";

import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import TaskListItem from "../../../components/domain/record/recordTaskListPage/TaskListItem";
import RecordTitle from "components/domain/record/RecordTitle";
import {
  ColorLightBlack9Base,
  ContentsXxl2232Semibold,
} from "lds-common/src/constants/tokens/global";
import Text from "components/common/Text";

const data = {
  practice: [
    {
      id: 0,
      title: "낙서하기",
      category: "소근육",
      month_level: {
        start: 8,
        end: 10,
      },
    },
    {
      id: 1,
      title: "식사하기",
      category: "소근육",
      month_level: {
        start: 8,
        end: 10,
      },
    },
    {
      id: 2,
      title: "동그라미 그리기",
      category: "소근육",
      month_level: {
        start: 8,
        end: 10,
      },
    },
  ],
  daily: [
    {
      id: 0,
      title: "낙서하기",
      category: "소근육",
      month_level: {
        start: 8,
        end: 10,
      },
    },
    {
      id: 1,
      title: "식사하기",
      category: "소근육",
      month_level: {
        start: 8,
        end: 10,
      },
    },
    {
      id: 2,
      title: "동그라미 그리기",
      category: "소근육",
      month_level: {
        start: 8,
        end: 10,
      },
    },
  ],
  play: [
    {
      id: 0,
      title: "낙서하기",
      category: "소근육",
      month_level: {
        start: 8,
        end: 10,
      },
    },
    {
      id: 1,
      title: "식사하기",
      category: "소근육",
      month_level: {
        start: 8,
        end: 10,
      },
    },
    {
      id: 2,
      title: "동그라미 그리기",
      category: "소근육",
      month_level: {
        start: 8,
        end: 10,
      },
    },
  ],
};

const RecordTaskListPage = () => {
  const { practice, daily, play } = data;
  return (
    <LayoutDetailPage>
      <Text
        variant={ContentsXxl2232Semibold}
        color={ColorLightBlack9Base}
        style={{ marginLeft: "2rem", marginTop: "0.8rem" }}
      >
        무엇을 기록할까요?
      </Text>
      <S.TaskSection>
        <RecordTitle
          imgUrl={"/images/record/record_muscle.svg"}
          title={"12개월을 위한 발달 연습"}
        />
        {data.practice.map(practice => (
          <TaskListItem
            key={practice.id}
            title={practice.title}
            chips={[{ status: "MONTH", month: 4 }, { status: "PRACTICE" }]}
          />
        ))}
      </S.TaskSection>
    </LayoutDetailPage>
  );
};

export default RecordTaskListPage;
