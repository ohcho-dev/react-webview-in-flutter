import { useParams } from "react-router-dom";
import styled from "styled-components";
import LayoutDetailPage from "../../../../layouts/LayoutDetailPage";

const IframeWrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100vh;
  margin-top: -6rem;
  position: absolute;
  top: 0;
  left: 0;
`;

const ResultPaper = () => {
  const { paperid } = useParams();

  return (
    <LayoutDetailPage>
      <IframeWrap>
        <Iframe frameBorder={0} src={`https://coaching.eltern.kr/eltern/${paperid}`}></Iframe>
      </IframeWrap>
    </LayoutDetailPage>
  );
};

export default ResultPaper;
