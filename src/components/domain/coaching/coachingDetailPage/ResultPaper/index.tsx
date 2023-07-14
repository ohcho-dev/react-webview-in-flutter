import { useParams } from "react-router-dom";
import * as S from "./ResultPaper.styled";
import LayoutDetailPage from "../../../../../layouts/LayoutDetailPage";

const ResultPaper = () => {
  const { paperid } = useParams();

  return (
    <LayoutDetailPage>
      <S.IframeWrap>
        <S.Iframe frameBorder={0} src={`https://coaching.eltern.kr/eltern/${paperid}`}></S.Iframe>
      </S.IframeWrap>
    </LayoutDetailPage>
  );
};

export default ResultPaper;
