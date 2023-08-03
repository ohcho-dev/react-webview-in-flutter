import ContentCarousel from "components/common/ContentCarousel";
import * as S from "./ContentPlayList.styled";
import { SlickDataProps } from "pages/coaching/ContentListPage";

interface ContentPlayListProps {
  data: SlickDataProps[];
  settings: object;
}

const ContentPlayList = ({ data, settings }: ContentPlayListProps) => {
  return (
    <ContentCarousel settings={settings}>
      {data.map(item => (
        <S.ContentWrapper>
          <S.CardWrapper>
            <S.CardImg src={item.img} alt="이미지" />
            <S.CardChip>{item.category}</S.CardChip>
            <S.CardTitle>{item.title}</S.CardTitle>
            <S.CardDesc>{item.desc}</S.CardDesc>
          </S.CardWrapper>
        </S.ContentWrapper>
      ))}
    </ContentCarousel>
  );
};
export default ContentPlayList;
