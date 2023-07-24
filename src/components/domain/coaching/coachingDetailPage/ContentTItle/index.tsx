import React from "react";
import * as S from "./ContentTitle.styled";
import UseImgix from "../../../../common/Imgix";

interface ContentTitleProps {
  imgUrl?: string;
  name: string;
}

const ContentTitle: React.FC<ContentTitleProps> = ({ imgUrl, name }) => {
  return (
    <S.TitleWrap>
      {imgUrl && <UseImgix srcUrl={imgUrl} alt="" />}
      <S.TitleName>{name}</S.TitleName>
    </S.TitleWrap>
  );
};

export default ContentTitle;
