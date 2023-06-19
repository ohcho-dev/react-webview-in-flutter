import { useState, useEffect } from "react";

// We installed earlier. This will render content data fetched from the Notion.
import { NotionRenderer } from "react-notion";

// For styling markdown content
import "react-notion/src/styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../common/LoadingSpinner";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";
import { useRecoilValue } from "recoil";
import { mainPageScrollValueState } from "../../../store/common";

function ActivityDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [data, setData] = useState({});
  const scroll = useRecoilValue(mainPageScrollValueState);

  useEffect(() => {
    fetch(`https://notion-api.splitbee.io/v1/page/${state.substr(37)}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [state]);

  return (
    <LayoutDetailPage
      titleBarBorder
      handleBackBtnClick={() => navigate("/home", { state: scroll })}
    >
      {data.constructor === Object && Object.keys(data).length === 0 ? (
        <LoadingSpinner />
      ) : (
        <NotionRenderer blockMap={data} fullPage={true} />
      )}
    </LayoutDetailPage>
  );
}

export default ActivityDetail;
