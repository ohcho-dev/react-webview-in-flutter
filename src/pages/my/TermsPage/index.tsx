import { useState, useEffect } from "react";

// We installed earlier. This will render content data fetched from the Notion.
import { NotionRenderer } from "react-notion";

// For styling markdown content
import "react-notion/src/styles.css";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";

const TermsPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // notion-api-worker
    fetch("https://notion-api.splitbee.io/v1/page/5c9b3351983749cf9c61c274376eef67")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <LayoutDetailPage>
      {/* Mount NotionRenderer and pass in data to render */}
      <NotionRenderer blockMap={data} fullPage={true} />
    </LayoutDetailPage>
  );
};

export default TermsPage;
