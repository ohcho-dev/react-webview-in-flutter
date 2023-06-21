import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { visibleShareState } from "../../../../store/common";
import * as S from "./PageTitle.styled";

interface PageTitlePropsType {
  title: string;
}
const PageTitle = ({ title = "" }: PageTitlePropsType) => {
  const setShare = useSetRecoilState(visibleShareState);

  useEffect(() => {
    setShare(false);
  }, []);

  return (
    <S.TitleWrap>
      <S.Container>{title}</S.Container>
    </S.TitleWrap>
  );
};

export default PageTitle;
