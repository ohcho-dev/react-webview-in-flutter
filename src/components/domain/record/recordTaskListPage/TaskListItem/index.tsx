import * as S from "./TaskListItem.styled";
import Icon from "components/common/Icon";
import {
  ColorLightBlack9Base,
  ColorLightSlate8,
  TextBase1624Semibold,
} from "lds-common/src/constants/tokens/global";
import Chip from "components/common/Chip";
import Text from "components/common/Text";

interface TaskListItemProps {
  chips: { status: string; month?: number }[];
  title: string;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ chips, title }) => {
  return (
    <S.ListItemCard>
      <S.FlexBox>
        <S.InfoWrap>
          <S.ChipWrap>
            {chips.map(({ status, month }) => (
              <Chip key={status} status={status} month={month} />
            ))}
          </S.ChipWrap>
          <Text variant={TextBase1624Semibold} color={ColorLightBlack9Base}>
            {title}
          </Text>
        </S.InfoWrap>
        <Icon icon={"chevron-right"} size={24} fill={ColorLightSlate8} />
      </S.FlexBox>
    </S.ListItemCard>
  );
};

export default TaskListItem;
