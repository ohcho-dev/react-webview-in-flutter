import Chip from "../../../../common/Chip";
import UseImgix from "../../../../common/Imgix";
import * as S from "./ContentItem.styled";

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
        <S.ArrowBtn>
          <UseImgix srcUrl="/images/icon-arrow-right.svg" alt="상세보기" />
        </S.ArrowBtn>
      )}
    </S.ItemWrap>
  );
};

export default ContentItem;
