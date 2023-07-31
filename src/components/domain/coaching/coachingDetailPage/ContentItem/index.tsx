import Icon from "components/common/Icon";

import Chip from "../../../../common/Chip";
import UseImgix from "../../../../common/Imgix";
import * as S from "./ContentItem.styled";
import { ColorLightSlate10 } from "lds-common/src/constants/tokens/global";

interface ContentItemProps {
  chipStatus: Array<string>;
  name: string;
  coachingMethod: string;
  useArrowBtn?: boolean;
  handleClick: () => void;
  style?: object;
}

const ContentItem: React.FC<ContentItemProps> = ({
  chipStatus,
  name,
  useArrowBtn,
  handleClick,
  coachingMethod,
  style,
}) => {
  return (
    <S.ItemWrap onClick={handleClick} style={style}>
      <S.ImageWrap>
        <UseImgix srcUrl={`/images/icon-coaching-${coachingMethod}.svg`} alt="task img" />
      </S.ImageWrap>
      <S.ItemDesc>
        <S.ChipLayout>
          {chipStatus.map((chip, index) => {
            return <Chip key={index} status={chip} />;
          })}
        </S.ChipLayout>
        <S.ItemTitle>{name}</S.ItemTitle>
      </S.ItemDesc>
      {useArrowBtn && (
        <S.ArrowBtnSection>
          <Icon icon={"chevron-right"} size={24} fill={ColorLightSlate10} />
        </S.ArrowBtnSection>
      )}
    </S.ItemWrap>
  );
};

export default ContentItem;
