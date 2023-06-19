import * as S from "./RecordTaskList.styled";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import EmptyBox from "../../../components/globals/EmptyBox";
import TaskListItem from "./components/TaskListItem";

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

const RecordTaskList = () => {
  const { practice, daily, play } = data;
  return (
    <LayoutDetailPage>
      <S.Title>무엇을 기록할까요?</S.Title>
      <EmptyBox height="2rem" />
      {practice.map((practiceItem: any) => (
        <TaskListItem key={practiceItem.id + practiceItem.title} data={practiceItem} />
      ))}
    </LayoutDetailPage>
  );
};

export default RecordTaskList;
