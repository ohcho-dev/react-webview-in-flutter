import UseImgix from "components/common/Imgix";
import Text from "components/common/Text";
import { ColorLightBlack9Base, TextLg1826Semibold } from "lds-common/src/constants/tokens/global";
import styled from "styled-components";

interface RecordTitleProps {
  imgUrl: string;
  title: string;
}

const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;

const RecordTitle = ({ imgUrl, title }: RecordTitleProps) => {
  return (
    <Title>
      <UseImgix srcUrl={imgUrl} style={{ width: "4rem", height: "4rem" }} />
      <Text variant={TextLg1826Semibold} color={ColorLightBlack9Base}>
        {title}
      </Text>
    </Title>
  );
};

export default RecordTitle;
