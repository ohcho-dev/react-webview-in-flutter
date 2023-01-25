import React from "react";
import styled from "styled-components";
import UseEmoji from "../../../utils/UseEmoji";

interface ContentTitleProps {
  emoji?: string;
  imgUrl?: string;
  name: string;
}

const TitleWrap = styled.div`
  padding: 2.6rem 2rem 1.2rem;
  display: flex;
  align-items: center;
`;
const TitleName = styled.div`
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: -0.04rem;
  color: #000000;
  margin-left: 0.4rem;
`;

const ContentTitle: React.FC<ContentTitleProps> = ({ emoji, imgUrl, name }) => {
  return (
    <TitleWrap>
      {emoji && <UseEmoji emojiName={emoji} />}
      {imgUrl && <img src={imgUrl} alt="" />}
      <TitleName>{name}</TitleName>
    </TitleWrap>
  );
};

export default ContentTitle;
