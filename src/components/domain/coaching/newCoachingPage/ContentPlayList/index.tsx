import ContentCarousel from "components/common/ContentCarousel";
import * as S from "./ContentPlayList.styled";
import { SlickDataProps } from "pages/coaching/ContentListPage";
import { useNavigate } from "react-router-dom";
import Text from "components/common/Text";
import {
  ColorLightBlack6,
  ColorLightBlack9Base,
  TextLg1826Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import GrowthChip from "components/common/GrowthChip";

interface ContentPlayListProps {
  data: SlickDataProps[];
  settings: object;
}

const ContentPlayList = ({ data, settings }: ContentPlayListProps) => {
  const navigate = useNavigate();
  return (
    <ContentCarousel settings={settings}>
      {data.map(item => (
        <S.ContentWrapper key={item.id} onClick={() => navigate(`/coaching/content/${1}`)}>
          <S.CardWrapper>
            <S.CardImg src={item.img} alt="이미지" />
            <GrowthChip label="언어" />
            <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base} isEllipsis>
              {item.title}
            </Text>
            <Text variant={TextSm1420Regular} color={ColorLightBlack6} isEllipsis>
              {item.desc}
            </Text>
          </S.CardWrapper>
        </S.ContentWrapper>
      ))}
    </ContentCarousel>
  );
};
export default ContentPlayList;
