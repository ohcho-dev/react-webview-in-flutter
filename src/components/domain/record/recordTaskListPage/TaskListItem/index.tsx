import RecordChip from "../../../../../components/common/RecordChip";
import UseImgix from "../../../../../components/common/Imgix";
import * as S from "./TaskListItem.styled";

interface TaskListItemProps {
  data: any;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ data }) => {
  return (
    <S.ListItemWrapper>
      <S.ListItemCard>
        <S.FlexBox>
          <S.InfoWrap>
            <S.ChipWrap>
              <RecordChip status="L" />
              <RecordChip status="S" />
              <RecordChip status="PRACTICE" />
              <RecordChip status="DAILY" />
              <RecordChip status="MONTH_LEVEL" />
              <RecordChip status="S" />
            </S.ChipWrap>
            <S.Title>{data.title}</S.Title>
          </S.InfoWrap>
          <S.ArrowIcon>
            <UseImgix srcUrl="/images/icon-mypage-arrow.svg" alt="right arrow" />
          </S.ArrowIcon>
        </S.FlexBox>
      </S.ListItemCard>
    </S.ListItemWrapper>
  );
};

export default TaskListItem;
