import styled from "styled-components";
import Chip from "../../../components/common/Chip";

const ItemWrap = styled.div`
  width: calc(100% - 4rem);
  padding: 1.2rem;
  margin: 0 auto;
  background: #f8f8f8;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.8rem;
  display: flex;
  position: relative;
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 8rem;
  }
`;
const ImageWrap = styled.div`
  min-width: 9.8rem;
  min-height: 8.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  mix-blend-mode: normal;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.8rem;
  margin-right: 1.4rem;
`;
const ItemDesc = styled.div`
  margin-top: 0.6rem;
  max-width: 60%;
`;

const ChipLayout = styled.div`
  div {
    margin-right: 0.4rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ItemTitle = styled.div`
  margin-top: 0.8rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: #282828;
`;
const ArrowBtn = styled.img`
  position: absolute;
  top: 50%;
  right: 1.8rem;
  transform: translate(0, -50%);
`;

interface ContentItemProps {
  imgUrl: string;
  chipStatus: Array<string>;
  name: string;
  useArrowBtn?: boolean;
}

const ContentItem: React.FC<ContentItemProps> = ({ imgUrl, chipStatus, name, useArrowBtn }) => {
  return (
    <ItemWrap>
      <ImageWrap>
        <img src={imgUrl} width="60%" />
      </ImageWrap>
      <ItemDesc>
        <ChipLayout>
          {chipStatus.map((chip, index) => {
            console.log(chip);
            return <Chip key={index} status={chip} />;
          })}
        </ChipLayout>
        <ItemTitle>{name}</ItemTitle>
      </ItemDesc>
      {useArrowBtn && <ArrowBtn src="/images/icon-arrow-right.svg" alt="상세보기" />}
    </ItemWrap>
  );
};

export default ContentItem;
