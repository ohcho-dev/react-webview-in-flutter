import { useState, useEffect } from "react";

// We installed earlier. This will render content data fetched from the Notion.
import { NotionRenderer } from "react-notion";

// For styling markdown content
import "react-notion/src/styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";

import { mainPageScrollValueState } from "../../recoil/atom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const IframeWrap = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

function ActivityDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState({});
  const [newUrl, setNewUrl] = useState("");
  const scroll = useRecoilValue(mainPageScrollValueState);

  useEffect(() => {
    if (state.indexOf("notion") !== -1) {
      fetch(`https://notion-api.splitbee.io/v1/page/${state.substr(37)}`)
        .then(res => res.json())
        .then(data => setData(data));
    } else {
      state.indexOf("m.blog") && setNewUrl(state.replace("blog", "m.blog"));
    }
  }, [state]);

  return (
    <>
      {newUrl && (
        <IframeWrap>
          <Iframe frameBorder={0} src={newUrl}></Iframe>
        </IframeWrap>
      )}

      {data && (
        <LayoutDetailPage
          titleBarBorder
          handleBackBtnClick={() => navigate("/home", { state: scroll })}
        >
          <NotionRenderer blockMap={data} fullPage={true} />
        </LayoutDetailPage>
      )}
    </>
  );
}

export default ActivityDetail;
