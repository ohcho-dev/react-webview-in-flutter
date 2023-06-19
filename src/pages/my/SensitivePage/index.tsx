import { useState, useEffect } from "react";

// We installed earlier. This will render content data fetched from the Notion.
import { NotionRenderer } from "react-notion";

// For styling markdown content
import "react-notion/src/styles.css";
import LayoutDetailPage from "../../../layouts/LayoutDetailPage";

function SensitivePage() {
  const [data, setData] = useState({});

  useEffect(() => {
    // notion-api-worker
    fetch("https://notion-api.splitbee.io/v1/page/5c87f9b9683a40ef866fc76118d04849")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <LayoutDetailPage>
      {/* Mount NotionRenderer and pass in data to render */}
      <NotionRenderer blockMap={data} fullPage={true} />
    </LayoutDetailPage>
  );
}

export default SensitivePage;
