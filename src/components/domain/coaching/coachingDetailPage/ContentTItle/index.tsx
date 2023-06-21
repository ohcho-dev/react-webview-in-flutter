import React from "react";
import * as S from "./ContentTitle.styled";
import CustomEmoji from "../../../../common/Emoji";
import UseImgix from "../../../../common/Imgix";

interface ContentTitleProps {
  emoji?: string;
  imgUrl?: string;
  name: string;
}

const ContentTitle: React.FC<ContentTitleProps> = ({ emoji, imgUrl, name }) => {
  return (
    <S.TitleWrap>
      {emoji && <CustomEmoji emojiName={emoji} />}
      {imgUrl && <UseImgix srcUrl={imgUrl} alt="" />}
      <S.TitleName>{name}</S.TitleName>
    </S.TitleWrap>
  );
};

export default ContentTitle;
