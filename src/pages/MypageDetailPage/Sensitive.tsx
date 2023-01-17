import LayoutDetailPage from "../../layouts/LayoutDetailPage";
import { NotionRenderer } from "react-notion";
import axios from "axios";
import { useEffect, useState } from "react";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting

const Sensitive = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = "5c87f9b9683a40ef866fc76118d04849";
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

export default Sensitive;
