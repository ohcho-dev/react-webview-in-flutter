import ContentCarousel from "components/common/ContentCarousel";
import * as S from "./ContentPlayList.styled";
import { SlickDataProps } from "pages/coaching/ContentListPage";
import { useNavigate } from "react-router-dom";
import Text from "components/common/Text";
import {
  ColorLightBlack6,
  ColorLightBlack7,
  ColorLightBlack9Base,
  TextLg1826Semibold,
  TextSm1420Regular,
} from "lds-common/src/constants/tokens/global";
import GrowthChip from "components/common/GrowthChip";
import UseImgix from "components/common/Imgix";
import EmptyBox from "components/common/EmptyBox";

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
            {/* <S.CardImg src={item.img} alt="이미지" /> */}
            <UseImgix srcUrl="/images/new-coaching/icon_block.svg" />

            <S.CardBlur style={{ backdropFilter: "blur(6px)" }}>
              <UseImgix srcUrl="/images/icon-sad-circle.svg" />
              <EmptyBox height="1.2rem" />
              <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
                아직 열리지 않은 콘텐츠예요.
              </Text>
              <EmptyBox height="0.8rem" />
              <Text
                variant={TextSm1420Regular}
                color={ColorLightBlack7}
                style={{ wordBreak: "keep-all" }}
              >
                3주차 놀이는 23.05.22일 오전 9시부터 확인하실 수 있어요.
              </Text>
            </S.CardBlur>

            <GrowthChip label="언어" style={{ marginTop: "1.6rem" }} />
            <Text
              variant={TextLg1826Semibold}
              color={ColorLightBlack9Base}
              style={{ marginTop: "0.8rem" }}
              isEllipsis
            >
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
