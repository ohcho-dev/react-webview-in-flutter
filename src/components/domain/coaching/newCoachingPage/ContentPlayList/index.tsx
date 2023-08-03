import ContentCarousel from "components/common/ContentCarousel";
import * as S from "./ContentPlayList.styled";
import { SlickDataProps } from "pages/coaching/ContentListPage";
import { useNavigate } from "react-router-dom";

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
