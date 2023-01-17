import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { NotionRenderer } from "react-notion";
import axios from "axios";
import { useEffect, useState } from "react";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting

const Terms = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = "5c9b3351983749cf9c61c274376eef67";
    if (NOTION_PAGE_ID) {
      axios.get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`).then(({ data }) => {
        setResponse(data);
      });
    }
  }, []);

  return (
    <LayoutDetailPage>
      {response && Object.keys(response).length && (
        <NotionRenderer blockMap={response} fullPage={true} />
      )}
    </LayoutDetailPage>
  );
};

export default Terms;
